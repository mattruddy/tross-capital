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
            height: "300px",
            width: "300px",
            marginBottom: "16px",
            border: "none"
        }}>
            <CardBody>
            <CardImg className="CardImage" height="180" src={imageSrc} />
                <CardTitle style={{fontWeight: "bold", marginTop: "8px"}}>
                    {address}
                </CardTitle>
        <CardSubtitle><i>{desc}</i></CardSubtitle>
            </CardBody>
        </Card>
    )
}

export default PropertyCard