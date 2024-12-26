import Link from "next/link";
import styles from "./LeftSide.module.css";

type Place = {
    name: string;
}

type LeftSideProps = {
    selectedPlace: Place | null;
    isLoading: boolean;
}

const LeftSide: React.FC<LeftSideProps> = ({ selectedPlace, isLoading }) => {
    return (
        <div className="flex flex-col space-y-4 p-4">
            {isLoading ? (
                <h2><span className={styles.loading}>.</span><span className={styles.loading}>.</span><span className={styles.loading}>.</span></h2>
            ) : selectedPlace ? (
                <div>
                    {/* 結果 */}
                    <h2 className="text-lg">
                        {selectedPlace.name}
                    </h2><hr />
                </div>
            ) : (
                <h2>スタートボタンを押してね</h2>
            )}

            {/* 注意喚起 */}
            <div>
                <p>海外旅行に出発する前には、<Link href="https://www.anzen.mofa.go.jp/" className="text-blue-800 underline">外務省の海外安全ホームページ</Link>を必ず確認し、最新の渡航情報を把握してください。現地の治安状況や危険情報を確認し、安全対策を講じることが重要です。また、旅行保険の加入や予防接種の確認も忘れずに行いましょう。安全第一で、万全の準備を整えてください。</p>
            </div>

        </div>
    );
};

export default LeftSide;
