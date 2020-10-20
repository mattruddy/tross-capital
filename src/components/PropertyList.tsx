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
            {properties.length > 0 ? properties.map((property, i) => (
                <Col xs={12} md={6} lg={4} key={i}>
                    <PropertyCard address={property.address} imageSrc={property.image} desc={property.desc} />
                </Col>
            )) : <i style={{marginLeft: "32px"}}>Coming soon</i>}
        </Row>
    </div>
}

export default PropertyList