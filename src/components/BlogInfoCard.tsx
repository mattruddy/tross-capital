import Link from "next/link"
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap"

interface Props {
    title: string
    body: string
    slug: string
}

const BlogInfoCard = ({ title, body, slug}: Props) => {
    return (
        <Card className="bs" style={{height: "350px", width: "300px", overflow: "hidden", border: "none"}}>
            <CardHeader>
                <CardTitle><b><Link href={`/blogs/${slug}`}>{title}</Link></b></CardTitle>
            </CardHeader>
            <CardBody>
                {body}
            </CardBody>
        </Card>
    )
}

export default BlogInfoCard