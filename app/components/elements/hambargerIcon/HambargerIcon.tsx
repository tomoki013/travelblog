import classNames from "classnames";
import styles from "./HambargerIcon.module.css";

interface HambargerIconProps {
    menuIconRef: React.RefObject<HTMLDivElement | null>;
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

const HambargerIcon: React.FC<HambargerIconProps> = ({ menuIconRef, isMenuOpen, toggleMenu }) => {
    return (
        <div
            ref={menuIconRef}
            className={classNames(styles.hambarger, { [styles.active]: isMenuOpen })}
            onClick={toggleMenu}
            aria-label="メニューアイコン"
        >
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <span className={styles.menu_text}>{isMenuOpen ? "close" : "menu"}</span>
        </div>
    );
}

export default HambargerIcon;
