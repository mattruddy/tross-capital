export const blogUrl = (title: string) =>  `https://fundrise.cdn.prismic.io/api/v2/documents/search?ref=X4nauBEAAB4AbDwr&q=[[at(document.type,%20%22${title}%22)]]&fetchLinks=categories.category_name,blog.title,blog.abstract,blog.cover_image`
export const blogUrlSlug = (title: string) =>  `https://fundrise.cdn.prismic.io/api/v2/documents/search?ref=X4nauBEAAB4AbDwr&q=[[at(my.blog.uid,%20%22${title}%22)]]&fetchLinks=categories.category_name,blog.title,blog.abstract,blog.cover_image`

export const Branding = {
    defaultDesciption: "Tross Capital",
    defaultLogo: "logo.png",
    defaultTitle: "Tross Capital",
    defaultUrl: ""
}