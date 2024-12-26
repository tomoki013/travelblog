"use client";

import { useState } from "react";
import LeftSide from "./leftSide/LeftSide";
import RightSide from "./rightSide/RightSide";
type Place = {
    name: string;
};

const RandomSelectPlace: React.FC = () => {
    const [places, setPlaces] = useState<Place[]>([
        { name: "ベトナム" },
        { name: "タイ" },
        { name: "インド" },
        { name: "フランス" },
        { name: "スペイン" },
    ]);
    const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleAddPlace = (placeName: string): void => {
        setPlaces([...places, { name: placeName }]);
    };

    const handleDeletePlace = (index: number): void => {
        const newPlaces = [...places];
        newPlaces.splice(index, 1);
        setPlaces(newPlaces);
    };

    const handleClearPlaces = (): void => setPlaces([]);

    const handleStartRoulette = (): void => {
        if (places.length > 0) {
            setIsLoading(true);
            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * places.length);
                setSelectedPlace(places[randomIndex]);
                setIsLoading(false);
            }, 3500);
        } else {
            alert("行きたい場所を追加してください");
        };
    };

    return (
        <>
            <h2>旅行先ルーレット</h2>
            <hr />
            <button
                className="m-4 text-[var(--text-color)] bg-[var(--main-bg-color)] border border-[var(--color-three)] rounded curdor-pointer py-2 px-4"
                onClick={handleStartRoulette}
            >
                スタート
            </button>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr]">
                <LeftSide
                    selectedPlace={selectedPlace}
                    isLoading={isLoading}
                />
                <div className="bg-black"></div>
                <RightSide
                    places={places}
                    onAddPlace={handleAddPlace}
                    onDeletePlace={handleDeletePlace}
                    onClearPlaces={handleClearPlaces}
                />
            </div>
        </>
    );
};

export default RandomSelectPlace;
