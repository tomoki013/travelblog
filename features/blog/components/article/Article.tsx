import Image from "next/image";
import styles from './Article.module.scss'
import { ArticleProps } from "../types";

const Article = ({ title, place, dates, image, alt, content }: ArticleProps) => {
    return (
        <article className="pt-3 pb-10 bg-white text-[var(--text-color)] md:rounded-xl">
            <h2 className="mb-0 pb-0 text-center">{title}</h2><hr />
            <p className="my-0 mr-3 text-right">{place}</p>
            <p className="my-0 mr-3 text-right">{dates}</p>
            <div className="flex justify-center my-4">
                <Image 
                    src={image}
                    alt={alt}
                    width={1}
                    height={1}
                    layout="responsive"
                    className="max-w-[300px] max-h-[500px]"
                />
            </div>

            <div className={styles.blog_doc}>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>

        </article>
    );
}

export default Article;
