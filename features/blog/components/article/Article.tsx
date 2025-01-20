import Image from "next/image";
import styles from './Article.module.scss'
import { ArticleProps } from "../types";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import * as Elements from '@/app/components/elements/index';

const Article = ({
    title,
    place,
    dates,
    image,
    alt,
    tags,
    content
}: ArticleProps
) => {
    return (
        <article className="pt-3 pb-10 bg-white text-[var(--text-color)] md:rounded-xl">
            <h2 className="mb-0 pb-0 text-center">{title}</h2><hr />
            <p className="my-0 mr-3 text-right">{place}</p>
            <ul>
                {dates.map((date, index) => (
                    <li key={index} className="my-0 mr-3 text-right">{date}</li>
                ))}
            </ul>
            <Elements.Tags tags={tags} ulClassName="justify-end" hideAll />
            <div className="flex justify-center my-4">
                <Image 
                    src={image}
                    alt={alt}
                    width={400}
                    height={400}
                    className="max-w-[300px] max-h-[300px] md:max-w-[400px] md:max-h-[400px]"
                />
            </div>

            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                className={`" prose ${ styles.blog_doc} "`}
            >
                {content}
            </ReactMarkdown>

        </article>
    );
}

export default Article;
