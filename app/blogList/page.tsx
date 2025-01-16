import * as Elements from '@/app/components/elements/index';
import * as Blog from '@/features/blog/components/index';
import * as Intro from '@/features/intro/components/index';
import { Metadata } from 'next';
import { getAllDiaries } from '@/lib/post';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `ブログ一覧`,
        description: `全てのブログ記事一覧`,
    };
}

export default async function BlogListPage() {
    const posts = await getAllDiaries();
    const tags = Array.from(new Set(posts.flatMap(post => post.tags)));
    return (
        <Elements.MainContainer>
                    
            <Elements.SlideContainer>
                <Intro.BlogListPageNav />
                <Intro.PageTopSlide />
                <Intro.ScrollIcon />
            </Elements.SlideContainer>

            <Elements.UnitContainer>
                <h2>ジャンルごとに見る</h2><hr />
                <Elements.Tags tags={tags} ulClassName='justify-center' />
            </Elements.UnitContainer>

            <Blog.DisplayPost type="diary" styleType="style1" id='blogList' />
            
            <Elements.UnitContainer id='roulette'>
                <Intro.RandomSelectPlace />
            </Elements.UnitContainer>

            <Elements.UnitContainer id='profile'>
                <Intro.Profile />
            </Elements.UnitContainer>

        </Elements.MainContainer>
    );
}
