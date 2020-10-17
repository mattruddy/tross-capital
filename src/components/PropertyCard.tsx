import React from 'react'
import { Card, CardBody, CardHeader, CardImg, CardSubtitle, CardTitle } from 'reactstrap'

interface Props {
    address: string
    imageSrc: string
}

const PropertyCard = ({address, imageSrc}: Props) => {
    return (
        <Card style={{
            height: "280px",
            width: "300px",
            marginBottom: "16px",
            border: "none"
        }}>
            <CardHeader className="main-b" style={{
                border: "none",
                paddingBottom: 0
            }}>
                <CardTitle className="sec-c" style={{fontWeight: "bold"}}>
                    {address}
                </CardTitle>
                <CardSubtitle className="sec-c"><i>Student</i></CardSubtitle>
            </CardHeader>
            <CardBody className="main-b" style={{
                paddingTop: 5
            }}>
                <CardImg className="CardImage" height="180" src={imageSrc} />
            </CardBody>
        </Card>
    )
}

export default PropertyCard