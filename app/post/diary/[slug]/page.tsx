import * as Elements from '@/app/components/elements/index';
import * as Layouts from '@/app/components/layouts/index';
import * as Intro from '@/features/intro/components/index';
import * as Blog from '@/features/blog/components/index';
import { getAllDiaries, getDiaryBySlug, getAdjacentDiaries } from '@/lib/post';
import { Metadata } from 'next';

export async function generateStaticParams(): Promise<{ slug: string }[]> {
    const posts = await getAllDiaries();
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const params = await props.params;
    const post = await getDiaryBySlug(params.slug);
    return {
        title: post?.title || '記事が見つかりませんでした',
        description: post?.description || '',
    };
}

export default async function DiaryPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    // データの取得
    const post = await getDiaryBySlug(params.slug);
    const { prevPost, nextPost } = await getAdjacentDiaries(params.slug);

    // 投稿が存在しない場合の処理
    if (!post) {
        return <div>記事が見つかりませんでした。</div>;
    }

    return (
        <>
            <Elements.MainContainer className='md:flex'>

                {/* メインコンテンツ */}
                <div className='w-full md:w-[70%]'>
                    <Blog.ArticleNav prevPost={prevPost} nextPost={nextPost} />

                    <Elements.UnitContainer style={{ textAlign: 'left' }}>
                        <Blog.Article
                            title={post.title}
                            description={post.description}
                            place={post.place}
                            dates={post.dates}
                            image={post.image}
                            alt={post.alt}
                            tags={post.tags}
                            content={post.content}
                        />
                    </Elements.UnitContainer>

                    <Elements.UnitContainer id='profile'>
                        <Intro.Profile />
                    </Elements.UnitContainer>

                    <Blog.ArticleNav prevPost={prevPost} nextPost={nextPost} />

                    <Layouts.BlogFooter className='hidden md:block' />
                </div>

                {/* 右サイドのスペース */}
                <div className='w-[30%]'></div>

                {/* 右サイドのコンテンツ */}
                <Blog.DiaryRightSide />

            </Elements.MainContainer>

            <Layouts.BlogFooter className='md:hidden' />
        </>
    );
}
