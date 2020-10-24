import { Col, Container, Row } from 'reactstrap'
import Layout from '../components/Layout'
import PropertyList from '../components/PropertyList'
import { Property} from '../interfaces'
import studentProperties from '../utils/student-properties.json' 
import mobileProperties from '../utils/mobile-properties.json'
import commercialProperties from '../utils/commercial-properties.json'


const Portfolio = () => (
  <Layout title="Tross Capital">  
    <div className="spacer" />
    <Container>
      <h1>Portfolio</h1>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <PropertyList title="Student Housing" properties={studentProperties as Property[]} />
        </Col>
        <Col sm={12} md={6} lg={4}>
          <PropertyList title="Mobile Home Parks" properties={mobileProperties as Property[]} />
        </Col>
        <Col sm={12} md={6} lg={4}>
          <PropertyList title="Commercial" properties={commercialProperties as Property[]} />
        </Col>
        <Col sm={12} md={6} lg={4}>
          <PropertyList title="Recreational" properties={[]} />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default Portfolio
