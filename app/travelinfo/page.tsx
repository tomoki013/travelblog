import * as Elements from '@/app/components/elements/index';
import * as Intro from '@/features/intro/components/index';

export default function TravelInfo() {
    return (
        <Elements.MainContainer>
            
            <div className='w-[100%] h-[calc(100vh-var(--mini-header-height))] md:h-[calc(100vh-var(--header-height))]'>
                <Intro.TravelInfoPageNav />
                <Intro.PageTopSlide />
                <Intro.ScrollIcon />
            </div>

            <Elements.UnitContainer id='roulette'>
                <Intro.RandomSelectPlace />
            </Elements.UnitContainer>

            <Elements.UnitContainer id='profile'>
                <Intro.Profile />
            </Elements.UnitContainer>

        </Elements.MainContainer>
    );
}
