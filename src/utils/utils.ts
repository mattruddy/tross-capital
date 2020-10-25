export const blogUrl = (title: string) =>  `https://fundrise.cdn.prismic.io/api/v2/documents/search?ref=X5MlAxEAAB4Ald3f&q=[[at(document.type,%20%22${title}%22)]]&fetchLinks=categories.category_name,blog.title,blog.abstract,blog.cover_image`
export const blogUrlSlug = (title: string) =>  `https://fundrise.cdn.prismic.io/api/v2/documents/search?ref=X5MlAxEAAB4Ald3f&q=[[at(my.blog.uid,%20%22${title}%22)]]&fetchLinks=categories.category_name,blog.title,blog.abstract,blog.cover_image`

export const Branding = {
    defaultDesciption: "this is a test bro",
    defaultLogo: "/logo.png",
    defaultTitle: "Tross Capital",
    defaultUrl: ""
}

export const mission = "We want to divide the line between the Real Estate Market and Technology to develop a diverse portfolio of long term assets with a high ROI"