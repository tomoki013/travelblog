import classNames from "classnames";
import styles from "./HamburgerIcon.module.css";
import { HamburgerIconProps } from "../types";

const HamburgerIcon = ({
    menuIconRef,
    isMenuOpen,
    toggleMenu
} : HamburgerIconProps
) => {
    return (
        <div
            ref={menuIconRef}
            className={classNames(styles.hamburger, { [styles.active]: isMenuOpen })}
            onClick={toggleMenu}
            aria-label="メニューアイコン"
            style={{ pointerEvents: "auto", touchAction: "manipulation" }} // Ensure pointer events and touch action are enabled
        >
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <span className={styles.menu_text}>{isMenuOpen ? "close" : "menu"}</span>
        </div>
    );
}

export default HamburgerIcon;
