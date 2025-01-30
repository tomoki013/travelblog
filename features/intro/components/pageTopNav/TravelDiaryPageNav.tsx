"use client";

import Link from "next/link";
import * as Elements from "@/app/components/elements/index";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const TravelDiaryPageNavItem = () => {
    const searchParams = useSearchParams();
    const tag = searchParams.get("tag") || null;

    return (
        <nav className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-5 bg-opacity max-w-[80%] z-[calc(var(--header-z-index)-1)] flex flex-col gap-4">
            <Link
                href="/travelDiary"
                className="underline text-[1.5rem] w-fit mx-auto"
            >
                {tag} 旅行日記
            </Link>
            <ul className="p-0 flex justify-center items-center flex-col gap-x-5 gap-y-2 md:flex-row">
                <Elements.NavigationItem href="#travelDiary">
                    旅行日記
                </Elements.NavigationItem>
                <Elements.NavigationItem href="#roulette">
                    旅行先ルーレット
                </Elements.NavigationItem>
                <Elements.NavigationItem href="#profile">
                    プロフィール
                </Elements.NavigationItem>
            </ul>
        </nav>
    );
}

const TravelDiaryPageNav = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <TravelDiaryPageNavItem />
        </Suspense>
    );
}

export default TravelDiaryPageNav;
