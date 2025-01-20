import * as Elements from '@/app/components/elements/index';
import * as Blog from '@/features/blog/components/index';
import * as Intro from '@/features/intro/components/index';
import { Metadata } from 'next';
import { getAllDiaries } from '@/lib/post';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `ともきちの旅行ブログ｜ブログ一覧`,
        description: `世界各地の旅行記や観光スポット情報を一覧でご紹介します。冒険のヒントや観光地の見どころ、旅のアイデアをお探しなら、ぜひチェックしてみてください！`,
    };
}

const BlogListPage = async ()  => {
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

export default BlogListPage;
