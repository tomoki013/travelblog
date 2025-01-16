import DisplayPostItems from './DisplayPostItem';
import { Suspense } from 'react';
import { getAllDiaries, getAllInfos } from '@/lib/post';

interface DisplayPostProps {
    type: "diary" | "info";
    displayCount?: number;
    id?: string;
    children?: React.ReactNode;
    styleType: "style1" | "style2";
    containerStyle?: React.CSSProperties;
    h2ClassName?: string;
    hrClassName?: string;
    sortType?: 'date' | 'random' | 'latest';
}

const DisplayPost: React.FC<DisplayPostProps> = ({ type, styleType, children, displayCount, id, h2ClassName, hrClassName, containerStyle, sortType }) => {
    const posts = type === "diary" ? getAllDiaries() : type === "info" ? getAllInfos() : getAllDiaries();

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <DisplayPostItems type={type} posts={posts} styleType={styleType} displayCount={displayCount} id={id} h2ClassName={h2ClassName} hrClassName={hrClassName} containerStyle={containerStyle} sortType={sortType}>{children}</DisplayPostItems>
        </Suspense>
    )
}

export default DisplayPost;
