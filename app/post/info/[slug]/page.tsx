import * as Elements from '@/app/components/elements/index';
import * as Layouts from '@/app/components/layouts/index';
import * as Intro from '@/features/intro/components/index';
import * as Blog from '@/features/blog/components/index';
import { getAllInfos, getInfoBySlug, getAdjacentInfos } from '@/lib/post';
import { Metadata } from 'next';

export async function generateStaticParams(): Promise<{ slug: string }[]> {
    const posts = await getAllInfos();
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const params = await props.params;
    const post = await getInfoBySlug(params.slug);
    return {
        title: post?.title || '記事が見つかりませんでした',
        description: post?.description || '',
    };
}

const formatDate = (dateString: string[]) => {
    const date = new Date(dateString.join(' '));
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}年${month}月${day}日`;
}

export default async function InfoPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    // データの取得
    const post = await getInfoBySlug(params.slug);
    const { prevPost, nextPost } = await getAdjacentInfos(params.slug);

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

                        <div className='rounded-md bg-yellow-200 flex justify-center items-center border border-black p-2'>
                            <p>この記事は<span className='border-b-2 border-red-500'>{formatDate(post.dates)}</span>現在の情報です。最新情報に注意して旅行をしてください。</p>
                        </div>

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
        
                {/* 右サイドのスタイルを整えるためのスペース */}
                <div className='w-[30%]'></div>
        
                {/* 右サイドのコンテンツ */}
                <Blog.InfoRightSide />
        
            </Elements.MainContainer>
        
            <Layouts.BlogFooter className='md:hidden' />

        </>
    );
}
