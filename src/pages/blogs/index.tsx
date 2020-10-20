import Link from "next/link"
import { useEffect, useState } from "react"
import Layout from "../../components/Layout"
import { Landing } from "../../interfaces"
import { blogUrl } from "../../utils/utils"

const BlogsPage = () => {
    const [items, setItems] = useState<Landing[]>()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const resp = await fetch(blogUrl("blog_landing"), {
            method: "GET"
        })

        const json = await resp.json()
        const body = json.results[0].data.body
        const initItems = [] as Landing[]
        body.forEach((section: any) => {
            section.items.forEach((item: any) => {
                if (item.series_posts) {
                    const data = item.series_posts.data
                    const init = {
                        title: data.title,
                        desc: data.abstract,
                        slug: item.series_posts.uid
                    } as Landing
                    initItems.push(init)
                }
            })
        });
        setItems(initItems)
    }

    return (
        <Layout title="Tross Capital | Blogs">
            {items && items.map((item, i) => 
            <div key={i}>
                <Link href={`/blogs/${item.slug}`}><h3>{item.title}</h3></Link>
                <p>{item.desc}</p>
            </div>)}
        </Layout>
    )
}

export default BlogsPage