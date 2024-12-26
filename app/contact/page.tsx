import * as Contact from "@/features/contact/components/index";
import * as Elements from "@/app/components/elements/index";
import * as Intro from "@/features/intro/components/index";

export default function ContactPage() {
    return (
        <Elements.MainContainer>

            <div className='w-[100%] h-[calc(100vh-var(--mini-header-height))] md:h-[calc(100vh-var(--header-height))]'>
                <Intro.ContactPageNav />
                <Intro.PageTopSlide />
                <Intro.ScrollIcon />
            </div>

            <Elements.UnitContainer id="contactForm">
                <Contact.ContactForm />
            </Elements.UnitContainer>

            <Elements.UnitContainer className="md:flex" id="siteRule">
                <Contact.SiteRule />
            </Elements.UnitContainer>

            <Elements.UnitContainer id="profile">
                <Intro.Profile />
            </Elements.UnitContainer>
            
        </Elements.MainContainer>
    );
}
