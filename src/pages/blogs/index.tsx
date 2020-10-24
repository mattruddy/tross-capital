import { GetServerSideProps } from "next"
import { Col, Container, Row } from "reactstrap"
import BlogInfoCard from "../../components/BlogInfoCard"
import Layout from "../../components/Layout"
import { Landing } from "../../interfaces"
import { blogUrl } from "../../utils/utils"

interface DataProps {
    items: Landing[]
}

const BlogsPage = ({items}: DataProps) => {

    return (
        <Layout title="Tross Capital | Blogs">
            <div className="spacer" />
            {items && <Container>
                <h1>Blogs</h1>
                <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                }}>
                <Row>
            {items.map((item, i) => 
            <Col xs={12} md={6} lg={4} key={i}>
                <BlogInfoCard title={item.title} body={item.desc} slug={item.slug} />
            </Col>)}
            </Row>
                </div>

            </Container>}
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps<DataProps> = async () => {
    try {
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
        return {
            props: {items: initItems} as DataProps
        }
    } catch (e) {
        console.log(e)
    }
    return {
        props: {} as DataProps
    }
}

export default BlogsPage