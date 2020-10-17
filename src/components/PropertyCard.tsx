import React from 'react'
import { Card, CardBody, CardHeader, CardImg, CardSubtitle, CardTitle } from 'reactstrap'

interface Props {
    address: string
    imageSrc: string
    desc: string
}

const PropertyCard = ({address, imageSrc, desc}: Props) => {
    return (
        <Card style={{
            height: "280px",
            width: "300px",
            marginBottom: "16px",
            border: "none"
        }}>
            <CardHeader className="main-b" style={{
                border: "none"
            }}>
                <CardImg className="CardImage" height="180" src={imageSrc} />
            </CardHeader>
            <CardBody className="main-b" style={{
                paddingTop: 5
            }}>
                                <CardTitle className="sec-c" style={{fontWeight: "bold"}}>
                    {address}
                </CardTitle>
        <CardSubtitle className="sec-c"><i>{desc}</i></CardSubtitle>
            </CardBody>
        </Card>
    )
}

export default PropertyCard