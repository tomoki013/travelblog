interface MainContainerProps {
    children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
    return (
        <main className="mt-[var(--mini-header-height)] md:mt-[var(--header-height)]">
            {children}
        </main>
    );
};

export default MainContainer;
