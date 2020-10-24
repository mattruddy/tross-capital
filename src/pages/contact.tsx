import {  useState } from "react"
import { Button, Card, CardBody, Container, Form, FormGroup, Input, Label } from "reactstrap"
import Layout from "../components/Layout"


const ContactPage = () => {
    const [subject, setSubject] = useState<string>()
    const [message, setMessage] = useState<string>()

    return (
        <Layout title="Tross Capital | Contact">
            <div className="spacer" />
            <Container>
                <h1>Contact</h1>
                <div style={{padding: "16px"}}>
                <h5><i>If you would like to send us information on property that meats our criteria, please 
                    send us information</i></h5>
                </div>

            <Card>
                <CardBody>
                <Form action={`mailto: mjruddy94@gmail.com?subject=${subject}&body=${message}`} method="POST">
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