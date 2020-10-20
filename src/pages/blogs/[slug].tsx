import {useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Button, Container } from 'reactstrap'
import Layout from '../../components/Layout'
import { Body, Image } from '../../interfaces'
import { blogUrlSlug } from '../../utils/utils'

const BlogPage = () => {
    const router = useRouter()
    const {slug} = router.query

    const [body, setBody] = useState<Body[]>()
    const [title, setTitle] = useState<string>()

    useEffect(() => {
        ;(async() => {
            if (slug) {
                const resp = await fetch(blogUrlSlug(slug as string), {
                    method: "GET"
                })
                const json = await resp.json()
                const bod = json.results[0].data.body
                setBody(bod.map((el: any) => {
                    return {
                    type: el.type,
                    text: el.text,
                    image: el.type === "image" ? { 
                        url: el.url,
                        height: el.dimensions.height,
                        width: el.dimensions.width
                    } as Image : undefined
                } as Body}))
                setTitle(json.results[0].data.title)
            }
        })()
    }, [slug])

    return (
        <Layout>
            <Button onClick={(e) => {
                e.preventDefault()
                router.back()
            }}>Back</Button>
            <Container>
                <div className="BlogPage">
                {title && <h1>{title}</h1>}
                    {body && body.map((el, i) => {
                        if (el.type === "paragraph") {
                        return <p key={i}>{el.text}</p>
                        } else if (el.type === "list-item") {
                        return <li key={i}>{el.text}</li>
                        } else if (el.type === "heading3") {
                        return <h3 key={i}>{el.text}</h3>
                        } else if (el.type === "heading2") {
                        return <h2 key={i}>{el.text}</h2>
                        } else if (el.type === "image") {
                            return <img key={i} height={el.image?.height} width={el.image?.width} src={el.image?.url} />
                        } else if (el.type === "preformatted") {
                            return <div key={i} dangerouslySetInnerHTML={{__html: el.text}} />
                        } else {
                        return <b key={i}>{el.text}</b>
                }
                })}
                </div>
            </Container>
        </Layout>
    ) 
}

export default BlogPage