import styles from './PageTopSlide.module.css';

const PageTopSlide = () => {
    return (
        <div className="w-[100%] h-[100%] relative overflow-hidden max-w-full z-[calc(var(--header-z-index)-2)]">
            <div className={styles.img_01}></div>
            <div className={styles.img_02}></div>
            <div className={styles.img_03}></div>
        </div>
    );
}

export default PageTopSlide;
