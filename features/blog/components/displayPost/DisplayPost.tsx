import React from 'react';
import * as Elements from '@/app/components/elements/index';
import { getAllDiaries, getAllInfos } from '@/lib/post';

interface DisplayPostProps {
    type: 'diary' | 'info';
    displayCount?: number;
    id?: string;
    children?: React.ReactNode;
    styleType: "style1" | "style2";
    containerStyle?: React.CSSProperties;
    h2ClassName?: string;
    hrClassName?: string;
    sortType?: 'date' | 'random' | 'latest'; // 追加
}

const DisplayPost: React.FC<DisplayPostProps> = ({ type, displayCount, id, children, styleType, containerStyle, h2ClassName, hrClassName, sortType = 'date' }) => {
    let items = type === 'diary' ? getAllDiaries() : getAllInfos();
    const count = displayCount || items.length;

    if (sortType === 'random') {
        items = items.sort(() => Math.random() - 0.5);
    } else if (sortType === 'latest') {
        items = items.sort((a, b) => new Date(b.dates[0]).getTime() - new Date(a.dates[0]).getTime());
    } else {
        items = items.sort((a, b) => new Date(a.dates[0]).getTime() - new Date(b.dates[0]).getTime());
    }

    return (
        <Elements.UnitContainer id={id} style={containerStyle}>
            <h2 className={h2ClassName}>{type === 'diary' ? "ブログ一覧" : "観光情報"}</h2>
            <hr className={hrClassName} />
            <ul className="flex flex-wrap justify-center p-0 m-0 gap-4">
                {items.slice(0, count).map((item) => (
                    <Elements.PostStyle key={item.slug} post={item} generatePostLink={() => `/post/${type}/${item.slug}`} styleType={styleType} />
                ))}
            </ul>
            {children}
        </Elements.UnitContainer>
    );
}

export default DisplayPost;