import { GetServerSideProps } from 'next'
import {useRouter } from 'next/router'
import { Button, Container } from 'reactstrap'
import Layout from '../../components/Layout'
import { Body, Image } from '../../interfaces'
import { blogUrlSlug } from '../../utils/utils'

interface DataProps {
    body: Body[]
    title: string
}

const BlogPage = ({body, title}: DataProps) => {
    const router = useRouter()

    return (
        <Layout description={body[0].text} title={title}>
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

export const getServerSideProps: GetServerSideProps<DataProps> = async (
    context: any
) => {
    if (context.params && context.params.slug && context.params.slug !== "logo.png") {
        try {
            const slug = context.params.slug
            const resp = await fetch(blogUrlSlug(slug as string), {
                method: "GET"
            })
            const json = await resp.json()
            const bod = json.results[0].data.body
            const body = bod.map((el: any) => {
                return {
                type: el.type,
                text: el.text ? el.text : null,
                image: el.type === "image" && { 
                    url: el.url,
                    height: el.dimensions.height,
                    width: el.dimensions.width
                } as Image
            } as Body})
            const title = json.results[0].data.title
            return {
                props: {
                    body: body,
                    title: title
                } as DataProps
            }

        } catch(e) {
            console.log(e)
        }
    }
    return {
        props: {} as DataProps
    }
}

export default BlogPage