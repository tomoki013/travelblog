interface SlideContainerProps {
    children: React.ReactNode;
}

const SlideContainer = ({ children } : SlideContainerProps) => {
    return (
        <div className='w-[100%] h-[calc(100vh-var(--mini-header-height))] md:h-[calc(100vh-var(--header-height))]'>
            {children}
        </div>
    );
}

export default SlideContainer;