import React from 'react'
import { Card, CardBody, CardHeader, CardImg, CardSubtitle, CardTitle } from 'reactstrap'

interface Props {
    address: string
    imageSrc: string
}

const PropertyCard = ({address, imageSrc}: Props) => {
    return (
        <Card style={{
            height: "400px",
            width: "350px"
        }}>
            <CardHeader>
                <CardTitle>
                    {address}
                </CardTitle>
                <CardSubtitle>Student</CardSubtitle>
            </CardHeader>
            <CardBody>
                <CardImg height="280" src={imageSrc} />
            </CardBody>
        </Card>
    )
}

export default PropertyCard