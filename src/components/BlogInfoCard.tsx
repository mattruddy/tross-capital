import Link from "next/link"
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap"

interface Props {
    title: string
    body: string
    slug: string
}

const BlogInfoCard = ({ title, body, slug}: Props) => {
    return (
        <Card style={{height: "250px", width: "300px"}}>
            <CardHeader>
                <CardTitle><Link href={`/blogs/${slug}`}>{title}</Link></CardTitle>
            </CardHeader>
            <CardBody>
                {body}
            </CardBody>
        </Card>
    )
}

export default BlogInfoCard