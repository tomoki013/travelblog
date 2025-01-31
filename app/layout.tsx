import type { Metadata } from "next";
import Head from "next/head";
import "./globals.scss";
import * as Layouts from "@/app/components/layouts/index";

export const metadata: Metadata = {
    title: "ともきちの旅行日記｜旅の最新情報をお届け",
    description: "ともきちの旅行日記で、日本国内外の旅行情報を網羅。人気観光地、穴場スポット、旅行のアドバイス、現地文化の体験談を豊富に紹介します。あなたの次の旅行のインスピレーションがここに！",
};

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
  	return (
    	<html lang="ja">
			<Head>

				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				{/* vercel */}
				<meta name="google-site-verification" content="jk1E308JgpkVeYLTheB9i3UHWU3QVrRU9afhkYgvWPw" />
				<meta name="msvalidate.01" content="37047B265EABB92200421D53818C4486" />
				<meta name="google-adsense-account" content="ca-pub-8687520805381056"></meta>

				{/* netlify */}
				<meta name="google-site-verification" content="qd9h_oeUkXKK0F-u4U5Z-c540MUq_Agst3K0rF8ERdM" />
				<meta name="msvalidate.01" content="37047B265EABB92200421D53818C4486" />
				<meta name="google-adsense-account" content="ca-pub-8687520805381056"></meta>
				
				{/* Google tag (gtag.js) */}
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-6KJ6B2X5BP"></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());

							gtag('config', 'G-6KJ6B2X5BP');
						`,
					}}>
				</script>
				{/* Google AdSense */}
				<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8687520805381056" crossOrigin="anonymous"></script>
			</Head>
      		<body>
				<Layouts.Header />
        			{children}
				<Layouts.Footer />
      		</body>
    	</html>
  	);
};
