import { Post } from "./types";
import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";

// ディレクトリの定義
const directories = {
    diary: path.join(process.cwd(), 'posts/diary'),
    info: path.join(process.cwd(), 'posts/info'),
}

/**
 * 指定されたディレクトリ内の全ての投稿を取得し、ソートして返す。
 * @param {string} directory - 投稿が保存されていディレクトリパス。
 * @param {string} type - 投稿のタイプ（'diary' または 'info'）。
 * @returns {Array} - ソート済みの投稿リスト。
 */
const getAllPosts = (directory: string, type: 'diary' | 'info'): Post[] => {
    return fs.readdirSync(directory)
    .map((fileName) =>{
        const fullPath = path.join(directory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf-8');
        const { data } = matter(fileContents) as GrayMatterFile<string> & { data: Post };

        // datesを配列として取得し、日付オブジェクトに変換
        const dates: string[] = data.dates || [];

        return {
            title: data.title,
            description: data.description,
            dates: dates,
            place: data.place,
            image: data.image,
            alt: data.alt,
            tags: data.tags || [], // 修正: data.tag -> data.tags
            slug: fileName.replace(/\.md$/, ''),
            type,
        };
    })
}

/**
 * 指定されたスラグに対応する投稿を取得し、HTMLに変換して返す。
 * @param {string} slug - 投稿のスラグ。
 * @param {string} directory - 投稿が保存されているディレクトリパス。
 * @returns {Promise<object>} - 投稿データ（HTMLコンテンツ付き）。
 */
const getPostBySlug = async (slug: string, directory: string) => {
    const fullPath = path.join(directory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const { data, content } = matter(fileContents) as GrayMatterFile<string> & { data: Post };

    return {
        content: String(content),
        ...data,
        slug,
    };
}

/**
 * 指定されたスラグに基づいて前後の投稿を取得。
 * @param {string} slug - 現在の投稿のスラグ。
 * @param {Function} getAll - 全投稿を取得する関数。
 * @returns {object} - 前後の投稿データ。
 */
const getAdjacentPosts = (slug: string, getAllPosts: () => Post[]): { prevPost: Post | null, nextPost: Post | null } => {
    const posts = getAllPosts();

    // 日付順にソート
    posts.sort((a, b) => new Date(a.dates[0]).getTime() - new Date(b.dates[0]).getTime());

    const index = posts.findIndex(post => post.slug === slug);

    const prevPost = index > 0 ? posts[index - 1] : null;
    const nextPost = index < posts.length - 1 ? posts[index + 1] : null;

    return { prevPost, nextPost };
};

/**
 * 旅行日記関連関数
 */
export const getAllDiaries = () => getAllPosts(directories.diary, 'diary');
export const getDiaryBySlug = (slug: string) => getPostBySlug(slug, directories.diary);
export const getAdjacentDiaries = (slug: string) => getAdjacentPosts(slug, getAllDiaries);

/**
 * 観光情報関連関数
 */
export const getAllInfos = () => getAllPosts(directories.info, 'info');
export const getInfoBySlug = (slug: string) => getPostBySlug(slug, directories.info);
export const getAdjacentInfos = (slug: string) => getAdjacentPosts(slug, getAllInfos);
