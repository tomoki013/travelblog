import * as Contact from "@/features/contact/components/index";
import * as Elements from "@/app/components/elements/index";
import * as Intro from "@/features/intro/components/index";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `ともきちの旅行ブログ｜お問い合わせ`,
        description: `ブログへのお問い合わせはこちらから。記事に関するご質問や広告掲載、コラボレーションのご依頼もお待ちしております。`,
    };
}

const ContactPage = () => {
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

export default ContactPage;
