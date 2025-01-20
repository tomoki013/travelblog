import Link from 'next/link';
import { NavigationItemProps } from '../types';

const NavigationItem = ({
    href,
    children,
    className
} : NavigationItemProps
) => {
    return (
        <li className='list-none'>
            <Link
                href={href}
                className={`' hover:opacity-70 ${className} '`}
            >
                {children}
            </Link>
        </li>
    );
}

export default NavigationItem;
