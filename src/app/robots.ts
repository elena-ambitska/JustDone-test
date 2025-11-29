import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
       sitemap:
       // TODO: Replace with production domain before release
           'http://localhost:3000/sitemap.xml',
    }

}