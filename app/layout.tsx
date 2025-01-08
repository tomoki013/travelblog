import type { Metadata } from "next";
import "./globals.scss";
import * as Layouts from "@/app/components/layouts/index";

export const metadata: Metadata = {
    title: "ともきちの旅行ブログ｜旅の最新情報をお届け",
    description: "ともきちの旅行ブログで、日本国内外の旅行情報を網羅。人気観光地、穴場スポット、旅行のアドバイス、現地文化の体験談を豊富に紹介します。あなたの次の旅行のインスピレーションがここに！",
};

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
  	return (
    	<html lang="ja">
      		<body>
				<Layouts.Header />
        			{children}
				<Layouts.Footer />
      		</body>
    	</html>
  	);
};
