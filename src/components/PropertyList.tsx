import React from 'react'
import { Col, Row } from 'reactstrap'
import { Property } from '../interfaces'
import PropertyCard from './PropertyCard'
import SectionHeader from './SectionHeader'

interface Props {
    title: string
    properties: Property[]
}

const PropertyList = ({title, properties}: Props) => {
    return <div>
        <SectionHeader title={title} />
        <Row>
            {properties.map((property, i) => (
                <Col key={i}>
                    <PropertyCard address={property.address} imageSrc={property.image} />
                </Col>
            ))}
        </Row>
    </div>
}

export default PropertyList