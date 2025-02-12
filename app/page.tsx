import * as Elements from '@/app/components/elements/index';
import * as Intro from '@/features/intro/components/index';
import * as Blog from '@/features/blog/components/index';

const Home = () => {
    return (
        <Elements.MainContainer>

            <Elements.SlideContainer>
                <Intro.TopPageNav />
                <Intro.PageTopSlide />
                <Intro.ScrollIcon />
            </Elements.SlideContainer>

            <Blog.DisplayPost type='diary' id='travelDiary' styleType='style1' displayCount={5}> 
                <ul>
                    <Elements.NavigationItem
                        href="/travelDiary"
                        className="block underline text-[var(--color-one)] w-fit mx-auto hover:text-[var(--color-three)]"
                    >
                        一覧へ ＞＞
                    </Elements.NavigationItem>
                </ul>
            </Blog.DisplayPost>

            <Blog.DisplayPost type='info' id='travelInfo' styleType='style1' displayCount={5}>
                <ul>
                    <Elements.NavigationItem
                        href="/travelInfo"
                        className="block underline text-[var(--color-one)] w-fit mx-auto hover:text-[var(--color-three)]"
                    >
                        一覧へ ＞＞
                    </Elements.NavigationItem>
                </ul>
            </Blog.DisplayPost>
            
            <Elements.UnitContainer id='roulette'>
                <Intro.RandomSelectPlace />
            </Elements.UnitContainer>
            
            <Elements.UnitContainer id='profile'>
                <Intro.Profile />
            </Elements.UnitContainer>
            
        </Elements.MainContainer>
    );
}

export default Home;
