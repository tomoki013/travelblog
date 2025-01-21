/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://travelblog-phi.vercel.app/',
    changefreq: 'weekly',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    outDir: './out',
}
