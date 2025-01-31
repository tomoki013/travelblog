import DisplayPostItems from './DisplayPostItem';
import { Suspense } from 'react';
import { getAllDiaries, getAllInfos } from '@/lib/post';
import { DisplayPostProps } from '../types';

const DisplayPost = ({
    type,
    styleType,
    children,
    displayCount,
    id,
    h2ClassName,
    hrClassName,
    containerStyle,
    sortType
} : DisplayPostProps
) => {
    const posts = type === "diary" ? getAllDiaries() : type === "info" ? getAllInfos() : getAllDiaries();
    console.log(posts)

    return (
        <Suspense fallback={<div className='flex justify-center items-center'>Loading...</div>}>
            <DisplayPostItems type={type} posts={posts} styleType={styleType} displayCount={displayCount} id={id} h2ClassName={h2ClassName} hrClassName={hrClassName} containerStyle={containerStyle} sortType={sortType}>{children}</DisplayPostItems>
        </Suspense>
    )
}

export default DisplayPost;
