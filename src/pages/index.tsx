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
          {/* background */}
          The founder Matthew has acquired, transacted and managed everything from Multifamily, Residential and Commercial Real 
          Estate since early 2014. Over the years, a great relationship has been build up with lenders across 
          the country due to our excellent investment reputation. The key to our success is keeping it simple, we do 
          not waste time searching for the best deals on a property but rather, we find good deals at a fair 
          price that we see long-term and growth potential, close quickly and move on to the next.
        </p>
        <p>
          {/* tech developed */}
          Tross Capital takes a lot of pride in its technology team. It is one of the 
          only Real Estate firms to also compete in the Financial Technology space. Our engineering team works 
          extensively on developing advanced algorithms using Artificial Intelligence and Machine Learning to help the company 
          forecast investments for the long-term. This is a very important aspect, as it analyzes terabytes of demographics 
          data to detect areas on the rise and with tremendous growth potential. It is a crucial component for our decision making 
          process.
        </p>
        <p>
          {/* profits */}
          The company is always open to taking on new project and investors.  does not target specifi
          After recognizing the profit potential on properties 
          discovered using his algorithm, Matthew began his Real Estate investing career transacting
          properties with large cap rates and low maintenance. <b>Tross Capital LLC</b> The company was then partnered with his 
          father who is also a long time real estate investor. The company is a multi-generation family operation, over the years has 
          has developed a great reputation and relationship with lenders which allow us to move 
          very quickly when finding investments that match our buying criteria. 
        </p>
        <h5><i>Mission</i></h5>
        <p>We provide use our technology and financial abilities to provide excellent ROI for our investors. We priorities long term,
          stable properties with high capital rates and 
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
                  <b>Pennsylvania State University Graduate</b> - Financial Engineering
                </li>
                <li>
                  <b>Pennsylvania Manufactured Housing Association</b> - Active Member
                </li>
                <li>
                  <b>Product Engineer at Mastercard</b> - Payment Transactions
                </li>
              </ul>
              </div>
      </Col>
      </Row>
    </Container>
    <Container style={{marginTop: "24px"}}>
      <Row>
      <Col sm={12} md={4}>
          <Card style={{marginTop: "16px"}}>
            <CardBody>
              <div className="AboutMore">
                <h2>$2MM+</h2>
                <span><i>Equity Capital Invested</i></span>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card style={{marginTop: "16px"}}>
            <CardBody>
              <div className="AboutMore">
                <h2>$3MM+</h2>
                <span><i>Transactions Closed</i></span>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card style={{marginTop: "16px"}}>
            <CardBody>
              <div className="AboutMore">
                <h2>17%</h2>
                <span><i>Average Yearly ROI</i></span>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default AboutPage
