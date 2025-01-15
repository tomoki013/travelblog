"use client";

import { useState } from "react";

type Place = {
    name: string;
}

type RightSideProps = {
    places: Place[];
    onAddPlace: (PlaceName: string) => void;
    onDeletePlace: (index: number) => void;
    onClearPlaces: () => void;
};

const RightSide: React.FC<RightSideProps> = ({
    places,
    onAddPlace,
    onDeletePlace,
    onClearPlaces,
}) => {
    const [newPlace, setNewPlace] = useState("");

    const handleAdd = () => {
        if (newPlace.trim()) {
            onAddPlace(newPlace);
            setNewPlace("");
        }
    };

    return (
        <div className="p-4 mt-4">
            <div className="flex">
                <input
                    type="text"
                    value={newPlace}
                    onChange={(e) => setNewPlace(e.target.value)}
                    placeholder="場所を追加"
                    className="border rounded w-full mr-1"
                />
                <button
                    onClick={handleAdd}
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 min-w-16"
                >
                    追加
                </button>
            </div>

            {/* 追加されている場所リスト */}
            <ul className="mt-4 list-disc pl-5 grid grid-cols-3 border p-2">
                {places.map((Place, index) => (
                    <li key={index} className="flex justify-between w-[90%] bg-gray-100 mb-2 p-2">
                        <span>{Place.name}</span>
                        <button
                            onClick={() => onDeletePlace(index)}
                            className="text-red-500"
                        >
                            削除
                        </button>
                    </li>
                ))}
            </ul>
            <button
                onClick={onClearPlaces}
                className="mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-700"
            >
                全てクリア
            </button>
        </div>
    );
};

export default RightSide;
