async function generateSitemap() {
    // Define static routes here
    // For dynamic routes see: https://jahz.xyz/generating-a-sitemap-xml-in-next-js-version-13
    const routes = ['', '/about'].map((route) => ({
        url: `${process.env.SEO_FRONT_END_URL}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }));
    return [...routes]
}

export default generateSitemap;