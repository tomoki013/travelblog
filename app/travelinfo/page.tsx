import * as Elements from '@/app/components/elements/index';
import * as Intro from '@/features/intro/components/index';
import * as Blog from '@/features/blog/components/index';
import { Metadata } from 'next';
import { getAllInfos } from '@/lib/post';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `観光情報一覧`,
        description: `全ての観光情報一覧`,
    };
}

export default function TravelInfo() {
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

            <Blog.DisplayPost type='info' id='travelinfo' styleType='style1' displayCount={10} />

            <Elements.UnitContainer id='roulette'>
                <Intro.RandomSelectPlace />
            </Elements.UnitContainer>

            <Elements.UnitContainer id='profile'>
                <Intro.Profile />
            </Elements.UnitContainer>

        </Elements.MainContainer>
    );
}
