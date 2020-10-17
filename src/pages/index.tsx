import { Container } from 'reactstrap'
import Layout from '../components/Layout'
import PropertyList from '../components/PropertyList'
import { Property} from '../interfaces'
import studentProperties from '../utils/student-properties.json' 
import mobileProperties from '../utils/mobile-properties.json'


const IndexPage = () => (
  <Layout title="Tross Capital">  
    <Container>
      <PropertyList title="Student Housing" properties={studentProperties as Property[]} />
      <PropertyList title="Mobile Home Parks" properties={mobileProperties as Property[]} />
      <PropertyList title="Recreational" properties={[]} />
    </Container>
  </Layout>
)

export default IndexPage
