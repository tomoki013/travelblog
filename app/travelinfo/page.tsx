import * as Elements from '@/app/components/elements/index';
import * as Intro from '@/features/intro/components/index';
import * as Blog from '@/features/blog/components/index';
import { Metadata } from 'next';
import { getAllInfos } from '@/lib/post';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `ともきちの旅行日記｜観光情報`,
        description: `初心者から経験者まで楽しめる旅情報を一覧でご覧いただけます。おすすめの観光スポットや隠れた名所をまとめました！`,
    };
}

const TravelInfoPage = () => {
    const posts = getAllInfos();
    const tags = Array.from(new Set(posts.flatMap(post => post.tags)));
    return (
        <Elements.MainContainer>
            
            <Elements.SlideContainer>
                <Intro.TravelInfoPageNav />
                <Intro.PageTopSlide />
                <Intro.ScrollIcon />
            </Elements.SlideContainer>
            
            <Elements.UnitContainer>
                <h2>ジャンルごとに見る</h2><hr />
                <Elements.Tags tags={tags} ulClassName='justify-center' />
            </Elements.UnitContainer>

            <Blog.DisplayPost type='info' id='travelInfo' styleType='style1' displayCount={10} />

            <Elements.UnitContainer id='roulette'>
                <Intro.RandomSelectPlace />
            </Elements.UnitContainer>

            <Elements.UnitContainer id='profile'>
                <Intro.Profile />
            </Elements.UnitContainer>

        </Elements.MainContainer>
    );
}

export default TravelInfoPage;
