/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://travelblog-phi.vercel.app/',
    generateRobotsTxt: true, // (optional)
    // ...other options
}