import {useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { Body } from '../../interfaces'
import { blogUrlSlug } from '../../utils/utils'

const BlogPage = () => {
    const router = useRouter()
    const {slug} = router.query

    const [body, setBody] = useState<Body[]>()

    useEffect(() => {
        ;(async() => {
            if (slug) {
                const resp = await fetch(blogUrlSlug(slug as string), {
                    method: "GET"
                })
                const json = await resp.json()
                setBody(json.results[0].data.body.map((el: any) => {
                    return {
                    type: el.type,
                    text: el.text
                } as Body}))
            }
        })()
    }, [slug])

    return (
        <Layout>
        <div>{body && body.map((el, i) => {
            if (el.type === "paragraph") {
            return <p key={i}>{el.text}</p>
            }
        })}</div>
        </Layout>
    ) 
}

export default BlogPage