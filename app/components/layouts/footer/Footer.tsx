"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import FooterNavigation from './FooterNavigation';
import * as Elements from '@/app/components/elements/index';

interface FooterProps {
    className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [pageTopOpacity, setPageTopOpacity] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrollPosition(scrollY);
            const newPageTopOpacity = Math.min(0.7, scrollY / 200);
            setPageTopOpacity(newPageTopOpacity);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const handlePageTopHover = (hover: boolean) => {
        setPageTopOpacity(hover ? 0.5 : scrollPosition / 200);
    }

    const pathName = usePathname();

    if (pathName.includes('/post')) {
        return null;
    }

    const currentYear = new Date().getFullYear();

    return (
        <footer className={`' bg-[var(--color-two)] p-4 text-[var(--color-one)] ${className} '`}>
            <p className='text-center'>&copy; {currentYear} Tomokichi TravelBlog</p>
            <FooterNavigation />
            <Elements.PageTopButton
                opacity={pageTopOpacity.toString()}
                onHover={handlePageTopHover}
            />
        </footer>
    );
}

export default Footer;
