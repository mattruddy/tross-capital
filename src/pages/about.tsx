import { Col, Container, Row } from 'reactstrap'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="Tross Capital | About">
    <Container>
      <Row>

      <Col>
      <div style={{paddingLeft: "16px", paddingRight: "16px"}}>
        <h1>About</h1>
        <p>
          Back in 1986, Thomas Ruddy created Mountain Creak Partners and 
          began his investing career purchasing 
          residential and multi-family Real Estate. Thomas had a kean eye for seeing 
          potential in under developed areas. He purchased homes that have gone up in value 
          upwards to <b>850%</b>.  
          Matthew Ruddy began his career working at Mastercard as 
          Software Development Engineer working on optomizing and innovating 
          new technologies for payment networking on large transactions.
        </p>
        <p>
          Matthew grew a fascination in Real Estate and used his technological background to develop 
          an algorithm based tool to discover profitable Real Estate investments using the most advanced 
          <b> Machine Learning</b> and <b>Artificial Intelligence</b> technologies.
        </p>
        <p>
          After recognizing the profit potential on properties 
          discovered using his algorithm, Matthew began his Real Estate investing career transacting
          properties with large cap rates and low maintenance. <b>Tross Capital LLC</b> was formed in 2020 and merged 
          with Mountain Creak Partners. The company is now a multi-generation family operation, over the years we 
          have developed a great reputation and relationship with lenders which allow us to move 
          very quickly when finding investments that match our buying criteria. 
        </p>
        </div>
      </Col>
      <Col sm={12} md={4}>
        <div style={{padding: "16px"}}>

          <h4>Matthew Ruddy</h4>
          <h6><i>President</i></h6>
          <img height="230" width="220" className="CardImage" src={"portrait.png"} />
              <ul>
                <li>
                  Member - <b>Mobile Home Park Association</b>
                </li>
                <li>
                  <b>Pennsylvania State University Graduate</b> - Financial Engineering
                </li>
                <li>
                  <b>Software Engineer - Mastercard</b>, optimizing and innovating payment technologies
                </li>
              </ul>
              </div>
      </Col>
      </Row>
    </Container>
  </Layout>
)

export default AboutPage
