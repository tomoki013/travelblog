import * as Elements from '@/app/components/elements/index';
import * as Layouts from '@/app/components/layouts/index';
import * as Intro from '@/features/intro/components/index';
import * as Blog from '@/features/blog/components/index';
import { getAllDiaries, getDiaryBySlug, getAdjacentDiaries } from '@/lib/post';

export async function generateStaticParams() {
    const posts = await getAllDiaries();
    return posts.map((post) => ({ slug: post.slug}));
};

export default async function DiaryPage({ params }: { params: { slug: string } }) {

    const post = await getDiaryBySlug(params.slug);
    const { prevPost, nextPost } = await getAdjacentDiaries(params.slug);

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
                <Blog.DiaryRightSide />
        
            </Elements.MainContainer>
        
            <Layouts.BlogFooter className='md:hidden' />

        </>
    );
}
