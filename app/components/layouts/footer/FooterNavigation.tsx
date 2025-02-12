import * as Elements from '@/app/components/elements/index';

const FooterNavigation = () => {
    return (
        <nav className='mt-7'>
            <ul className='flex justify-center flex-col gap-5 text-center md:flex-row'>
                <Elements.NavigationItem
                    href={'/'}
                    className='hover:underline text-[var(--color-one)] hover:text-[var(--color-three)]'
                >
                    トップページ
                </Elements.NavigationItem>
                <Elements.NavigationItem
                    href={'/travelDiary'}
                    className='hover:underline text-[var(--color-one)] hover:text-[var(--color-three)]'
                >
                    旅行日記
                </Elements.NavigationItem>
                <Elements.NavigationItem
                    href={'/travelInfo'}
                    className='hover:underline text-[var(--color-one)] hover:text-[var(--color-three)]'
                >
                    観光情報
                </Elements.NavigationItem>
                <Elements.NavigationItem
                    href={'/contact'}
                    className='hover:underline text-[var(--color-one)] hover:text-[var(--color-three)]'
                >
                    お問い合わせ
                </Elements.NavigationItem>
            </ul>
        </nav>
    );
}

export default FooterNavigation;