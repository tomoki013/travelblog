"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { visit } from 'unist-util-visit';
import { Root, Heading } from 'mdast';
import { InfoIndexProps } from '../types';
import { usePathname } from 'next/navigation';

const InfoIndex = ({
    content
}: InfoIndexProps
) => {
    const [headings, setHeadings] = useState<string[]>([]);

    useEffect(() => {
        const processor = unified().use(remarkParse);
        const tree = processor.parse(content) as Root;

        const newHeadings: string[] = [];
        visit(tree, 'heading', (node: Heading) => {
            if (node.depth === 2) {
                const text = node.children.map((child) => 'value' in child ? child.value : '').join('');
                newHeadings.push(text);
            }
        });

        setHeadings(newHeadings);
    }, [content]);

    const pathname = usePathname();
    
    if (pathname.includes('/diary')) {
        return null;
    }

    return (
        <div className='bg-[var(--main-bg-color)] my-10 p-2 rounded-md border border-black'>
            <h2 className='underline text-center'>目次</h2>
            <ul className='list-disc w-fit mx-auto'>
                {headings.map((heading, index) => (
                    <li key={index} className='my-2'>
                        <Link href={`#${heading}`} className='hover:underline'>{heading}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InfoIndex;
