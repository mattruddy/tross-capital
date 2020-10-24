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
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <SectionHeader title={title} />
        <Row>
            {properties.length > 0 ? properties.map((property, i) => (
                <Col xs={12} key={i}>
                    <PropertyCard address={property.address} imageSrc={property.image} desc={property.desc} />
                </Col>
            )) : <i>Soon to come</i>}
        </Row>
    </div>
}

export default PropertyList