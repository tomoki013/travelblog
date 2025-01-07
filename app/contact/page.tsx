import * as Contact from "@/features/contact/components/index";
import * as Elements from "@/app/components/elements/index";
import * as Intro from "@/features/intro/components/index";

export default function ContactPage() {
    return (
        <Elements.MainContainer>

            <Elements.SlideContainer>
                <Intro.ContactPageNav />
                <Intro.PageTopSlide />
                <Intro.ScrollIcon />
            </Elements.SlideContainer>

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
