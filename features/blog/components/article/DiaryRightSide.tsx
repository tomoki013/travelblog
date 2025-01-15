import * as Blog from "@/features/blog/components/index";
import { getAllDiaries } from "@/lib/post";

const DiaryRightSide: React.FC = () => {
    const posts = getAllDiaries();
    return (
        <aside className="w-[100%] bg-white md:w-[30%] md:h-[calc(100vh-var(--header-height))] md:fixed md:top-[var(--header-height)] md:right-0 p-1">

            {/* 最新のブログ */}
            <div>
                <h2 className="text-center text-5 text-[var(--color-three)]">最新のブログ</h2>
                <Blog.DisplayPost type="diary" posts={posts} displayCount={1} styleType="style2" containerStyle={{ margin: 0 }} h2ClassName="hidden" hrClassName="hidden" />
            </div>

            {/* おすすめのブログ */}
            <div>
				<h2 className="text-center text-[var(--color-three)]">おすすめのブログ</h2>
				<Blog.DisplayPost type="diary" posts={posts} displayCount={3} styleType="style2" containerStyle={{ margin: 0 }} h2ClassName="hidden" hrClassName="hidden" sortType="random" />
			</div>

        </aside>
    );
};

export default DiaryRightSide;