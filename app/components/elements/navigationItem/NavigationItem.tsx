import Link from 'next/link';

interface NavigationItemProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

const NavigationItem = ({ href, children, className } : NavigationItemProps) => {
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
 
//  The  NavigationItem  component is a simple component that wraps the  Link  component from Next.js. It accepts two props:  href  and  children .
//  The  href  prop is the URL to which the user will be navigated when they click on the link. The  children  prop is the text that will be displayed as the link text. 
//  Now, let's create the  Navigation  component. This component will be a container for the  NavigationItem  components.
