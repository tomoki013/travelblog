import * as Blog from "@/features/blog/components/index";

const InfoRightSide = () => {
    return (
        <aside className="w-[100%] bg-white md:w-[30%] md:h-[calc(100vh-var(--header-height))] md:fixed top-[var(--header-height)] right-0 p-1">

            {/* おすすめのブログ */}
            <div>
				<h2 className="text-center text-[var(--color-three)]">おすすめのブログ</h2>
				<Blog.DisplayPost type="info" displayCount={4} styleType="style2" containerStyle={{ margin: 0 }} h2ClassName="hidden" hrClassName="hidden" sortType="random" />
			</div>

        </aside>
    );
};

export default InfoRightSide;