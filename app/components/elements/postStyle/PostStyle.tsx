import Link from "next/link";
import Image from "next/image";
import { Post } from '@/lib/types';
import styles from './PostStyle.module.scss';

interface PostStyleProps {
    post: Post;
    generatePostLink: (post: Post) => string;
    styleType: "style1" | "style2";
}

const PostStyle: React.FC<PostStyleProps> = ({ post, generatePostLink, styleType }) => {
    if (styleType === "style1") {
        return (
            <li 
                key={post.slug}
                className="flex w-[200px] h-[280px] m-4 border border-[var(--color-one)] hover:opacity-70 hover:bg-[var(--blog-hover-color)]"
            >
                <Link
                    href={generatePostLink(post)}
                    className={`${styles.item_1} "flex flex-col w-[100%] h-[100%] p-3 text-[var(--color-one)]"`}
                >
                    <Image
                        src={post.image}
                        alt={post.alt}
                        width={180}
                        height={150}
                        className="w-[100%] h-[150px] my-3 mx-0"
                    />
                    <hr />
                    <p className="text-[var(--color-one)]">{post.title}</p>
                </Link>
            </li>
        );
    } else {
        return (
            <li
                key={post.slug}
                className="relative bg-white border border-[var(--color-one)] rounded-md hover:opacity-70 hover:bg-[var(--blog-hover-color] w-[90%] m-auto"
            >
                <Link
                    href={generatePostLink(post)}
                    className="flex items-center py-4 px-2 text-[var(--color-one)] transition-color duration-300 ease"
                >
                    <p>{post.title}</p>
                    <Image
                        src={post.image}
                        alt={post.alt}
                        width={70}
                        height={70}
                        className="w-[70px] h-[70px] rounded-[50%] ml-auto border-5 border-opacity"
                    />
                </Link>
            </li>
        );
    };
}

export default PostStyle;
