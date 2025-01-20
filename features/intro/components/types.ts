export interface Place {
    name: string;
}

export interface RightSideProps {
    places: Place[];
    onAddPlace: (PlaceName: string) => void;
    onDeletePlace: (index: number) => void;
    onClearPlaces: () => void;
}

export interface LeftSideProps {
    selectedPlace: Place | null;
    isLoading: boolean;
}
