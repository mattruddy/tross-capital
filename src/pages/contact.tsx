import { FormEvent, useState } from "react"
import { Button, Card, CardBody, Container, Form, FormGroup, Input, Label } from "reactstrap"
import Layout from "../components/Layout"


const ContactPage = () => {
    const [email, setEmail] = useState<string>()
    const [name, setName] = useState<string>()
    const [subject, setSubject] = useState<string>()
    const [message, setMessage] = useState<string>()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
    }

    return (
        <Layout title="Tross Capital | Contact">
            <Container>
            <Card>
                <CardBody>
                <Form onSubmit={handleSubmit}>
                <FormGroup>
                        <Label>Email</Label>
                        <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Full Name</Label>
                        <Input placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Subject</Label>
                        <Input placeholder="Subject" value={subject} onChange={e => setSubject(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Message</Label>
                        <Input type="textarea" rows={7} placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} />
                    </FormGroup>
                    <Button type="submit">Send</Button>
                </Form>
                </CardBody>
            </Card>
            </Container>

        </Layout>
    )
}

export default ContactPage