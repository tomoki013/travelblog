"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import styles from "./Header.module.css";
import NavigationMenuItem from "./NavigationMenuItem";
import * as Elements from "@/app/components/elements/index";
import classNames from "classnames";

const Header = () => {
    const [date, setDate] = useState<string>("");
    const [time, setTime] = useState<string>("");
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [headerOpacity, setHeaderOpacity] = useState<number>(1);

    const menuRef = useRef<HTMLDivElement | null>(null);
    const menuIconRef = useRef<HTMLDivElement | null>(null);

    // 時刻を更新する関数
    const updateDateTime = useCallback(() => {
        const dateTime = new Date();
        const dayOfWeek = ["日", "月", "火", "水", "木", "金", "土"];
        const dateStr = `${dateTime.getFullYear()}/${(dateTime.getMonth() + 1).toString().padStart(2, "0")}/${dateTime.getDate().toString().padStart(2, "0")} (${dayOfWeek[dateTime.getDay()]})`;
        const timeStr = `${dateTime.getHours()}:${dateTime.getMinutes().toString().padStart(2, "0")}:${dateTime.getSeconds().toString().padStart(2, "0")}`;
        setDate(dateStr);
        setTime(timeStr);
    }, []);

    // 時刻更新のインターバル設定
    useEffect(() => {
        updateDateTime();
        const interval = setInterval(updateDateTime, 1000);

        return () => clearInterval(interval);
    }, [updateDateTime]);

    // スクロール時のヘッダーの透明度を設定
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setHeaderOpacity(Math.max(0.5, 1 - scrollPosition / 500));
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // メニューを開閉する関数
    const toggleMenu = useCallback(() => {
        setIsMenuOpen((prev) => {
            // スクロール無効時の切り替え
            if (!prev) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            } return !prev;
        });
    }, []);

    // メニュー外をクリックしたときにメニューを閉じる
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            if (
                menuRef.current &&
                !menuRef.current.contains(target) &&
                menuIconRef.current &&
                !menuIconRef.current.contains(target)
            ) {
                setIsMenuOpen(false);
                document.body.style.overflow = "";
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = "";
    };
    }, []);

    return (
        <header>
            <div
                className={styles.opacity_header}
                style={{ opacity: headerOpacity }}
            >
                {/* 時刻表示 */}
                <div className="hidden md:block absolute top-[var(--hamburger-top-position)] left-6 text-white text-center">
                    <div>{date}</div>
                    <div>{time}</div>
                </div>

                {/* タイトル */}
                <h1 className="text-white">ともきちの旅行日記</h1>

                {/* ハンバーガーメニュー */}
                <Elements.HamburgerIcon
                    menuIconRef={menuIconRef}
                    isMenuOpen={isMenuOpen}
                    toggleMenu={toggleMenu}
                />
            </div>

            {/* ナビゲーションメニュー */}
            <nav
                ref={menuRef}
                className={classNames(styles.navmenu,{
                    [styles.active]: isMenuOpen,
                    [styles.inactive]: !isMenuOpen,
                })}
            >
                <h3 className="underline text-4xl tracking-[0.3rem] md:text-3xl">MENU</h3>
                <ul className="w-[70%] m-auto">
                    <NavigationMenuItem
                        href="/"
                        onClick={toggleMenu}
                    >
                        トップページ
                    </NavigationMenuItem>
                    <NavigationMenuItem
                        href="/travelDiary"
                        onClick={toggleMenu}
                    >
                        旅行日記
                    </NavigationMenuItem>
                    <NavigationMenuItem
                        href="/travelInfo"
                        onClick={toggleMenu}
                    >
                        観光情報
                    </NavigationMenuItem>
                    <NavigationMenuItem
                        href="/contact"
                        onClick={toggleMenu}
                    >
                        お問い合わせ
                    </NavigationMenuItem>
                </ul>
                <section className="flex justify-center flex-wrap gap-4 p-6">
                    <Elements.GitHubIcon />
                    <Elements.TikTokIcon />
                    <Elements.YouTubeIcon />
                    <Elements.InstagramIcon />
                </section>
            </nav>
        </header>
    );
}

export default Header;
