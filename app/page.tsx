import * as Elements from '@/app/components/elements/index';
import * as Intro from '@/features/intro/components/index';
import * as Blog from '@/features/blog/components/index';
import { getAllDiaries, getAllInfos } from '@/lib/post';

export default function Home() {
    const diary = getAllDiaries();
    const info = getAllInfos();

    return (
        <Elements.MainContainer>

            <Elements.SlideContainer>
                <Intro.TopPageNav />
                <Intro.PageTopSlide />
                <Intro.ScrollIcon />
            </Elements.SlideContainer>

            <Blog.DisplayPost type='diary' posts={diary} id='blog' styleType='style1' displayCount={6}> 
                <Elements.NavigationItem
                    href="/blogList"
                    className="block underline text-[var(--color-one)] w-fit mx-auto hover:text-[var(--color-three)]"
                >
                    一覧へ ＞＞
                </Elements.NavigationItem>
            </Blog.DisplayPost>

            <Blog.DisplayPost type='info' posts={info} id='travelinfo' styleType='style1' displayCount={6}>
                <Elements.NavigationItem
                    href="/travelinfo"
                    className="block underline text-[var(--color-one)] w-fit mx-auto hover:text-[var(--color-three)]"
                >
                    一覧へ ＞＞
                </Elements.NavigationItem>
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
