"use client";

import { useEffect, useState } from 'react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { visit } from 'unist-util-visit';
import { Root, Heading } from 'mdast';
import { InfoIndexProps } from '../types';

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

    return (
        <div>
            <h2>目次</h2>
            <ul>
                {headings.map((heading, index) => (
                    <li key={index}>
                        <a href={`#${heading}`}>{heading}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InfoIndex;
