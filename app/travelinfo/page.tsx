import * as Elements from '@/app/components/elements/index';
import * as Intro from '@/features/intro/components/index';
import * as Blog from '@/features/blog/components/index';
import { getAllInfos } from '@/lib/post';

export default function TravelInfo() {
    const posts = getAllInfos();
    return (
        <Elements.MainContainer>
            
            <Elements.SlideContainer>
                <Intro.TravelInfoPageNav />
                <Intro.PageTopSlide />
                <Intro.ScrollIcon />
            </Elements.SlideContainer>

            <Blog.DisplayPost type='info' posts={posts} id='travelinfo' styleType='style1' />

            <Elements.UnitContainer id='roulette'>
                <Intro.RandomSelectPlace />
            </Elements.UnitContainer>

            <Elements.UnitContainer id='profile'>
                <Intro.Profile />
            </Elements.UnitContainer>

        </Elements.MainContainer>
    );
}
