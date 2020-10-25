export const blogUrl = (title: string) =>  `https://fundrise.cdn.prismic.io/api/v2/documents/search?ref=X5MlAxEAAB4Ald3f&q=[[at(document.type,%20%22${title}%22)]]&fetchLinks=categories.category_name,blog.title,blog.abstract,blog.cover_image`
export const blogUrlSlug = (title: string) =>  `https://fundrise.cdn.prismic.io/api/v2/documents/search?ref=X5MlAxEAAB4Ald3f&q=[[at(my.blog.uid,%20%22${title}%22)]]&fetchLinks=categories.category_name,blog.title,blog.abstract,blog.cover_image`

export const Branding = {
    defaultDesciption: "this is a test bro",
    defaultLogo: "/logo.png",
    defaultTitle: "Tross Capital",
    defaultUrl: ""
}

export const mission = "We provide use our technology and financial abilities to provide excellent ROI for our investors. We priorities long term, stable properties with high capital rates and growth potential"