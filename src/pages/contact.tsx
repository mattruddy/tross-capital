import { FormEvent, useState } from "react"
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap"
import Layout from "../components/Layout"
import * as emailjs from 'emailjs-com'


const ContactPage = () => {
    const [email, setEmail] = useState<string>()
    const [name, setName] = useState<string>()
    const [subject, setSubject] = useState<string>()
    const [message, setMessage] = useState<string>()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        emailjs.
    }

    return (
        <Layout title="Tross Capital | Contact">
            <Container fluid>
            <div>
                <Form>
                <FormGroup>
                        <Label>Email</Label>
                        <Input type="email" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Full Name</Label>
                        <Input />
                    </FormGroup>
                    <FormGroup>
                        <Label>Subject</Label>
                        <Input />
                    </FormGroup>
                    <FormGroup>
                        <Label>Message</Label>
                        <Input type="textarea" />
                    </FormGroup>
                    <Button>Send</Button>
                </Form>
            </div>
            </Container>

        </Layout>
    )
}

export default ContactPage