import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="Tross Capital">
    <div className="b-img main-photo fade-in">
    </div>
    <div className="main-text">
      <h1 className="fade-in-md">About Us</h1>
      <h5 className="fade-in-lg"><i>Who We Are</i></h5>
    </div>
    <div className="spacer" />
    <Container>
      <Row>
      <Col>
      <div style={{paddingLeft: "16px", paddingRight: "16px"}}>
        <h1>About</h1>
        <h5><i>Who We Are</i></h5>
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
      <Col sm={12} lg={4}>
        <div style={{padding: "16px"}}>

          <h4>Matthew Ruddy</h4>
          <h6 style={{fontSize: "18px"}}><i>President</i></h6>
          <img height="230" width="220" className="CardImage" src={"portrait.png"} />
              <ul>
                <li>
                  <b>Pennsylvania Manufactured Housing Association</b> - Active Member
                </li>
                <li>
                  <b>Product Engineer at Mastercard</b> - Payment Transactions
                </li>
                <li>
                  <b>Pennsylvania State University Graduate</b> - Financial Engineering
                </li>
              </ul>
              </div>
      </Col>
      </Row>
    </Container>
    <Container style={{marginTop: "24px"}}>
      <Row>
      <Col sm={12} md={4}>
          <Card>
            <CardBody>
              <div className="AboutMore">
                <h2>$2MM</h2>
                <span><i>Equity Capital Invested</i></span>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card>
            <CardBody>
              <div className="AboutMore">
                <h2>$3MM</h2>
                <span><i>Transactions Closed</i></span>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card>
            <CardBody>
              <div className="AboutMore">
                <h2>110%</h2>
                <span><i>Property Value Increase</i></span>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default AboutPage
