import * as Elements from '@/app/components/elements/index';

const FooterNavigation: React.FC = () => {
    return (
        <nav className='mt-7'>
            <ul className='flex justify-center flex-col gap-5 text-center md:flex-row'>
                <Elements.NavigationItem
                    href={'/'}
                    className='hover:underline'
                >
                    トップページ
                </Elements.NavigationItem>
                <Elements.NavigationItem
                    href={'/travelinfo'}
                    className='hover:underline'
                >
                    観光情報
                </Elements.NavigationItem>
                <Elements.NavigationItem
                    href={'/contact'}
                    className='hover:underline'
                >
                    お問い合わせ
                </Elements.NavigationItem>
            </ul>
        </nav>
    );
}

export default FooterNavigation;