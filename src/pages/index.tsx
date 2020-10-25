import Link from 'next/link'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import Layout from '../components/Layout'
import { mission } from '../utils/utils'

const AboutPage = () => (
  <Layout title="Tross Capital" metaTitle="Tross Capital - Who We Are" description={mission}>
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
          The founder Matthew has acquired, transacted and managed everything from Multifamily, Residential and Commercial Real 
          Estate since early 2014. Over the years, a great relationship has been build up with lenders across 
          the country due to our excellent investment reputation. The key to our success is keeping it simple, we do 
          not waste time with long negotiations and trying to get the best price for a property, 
          but rather, developed a curtain buying criteria for properties and hold them for the long-term. If a property matches our 
          criteria at a fair price, we will close quickly and move on to the next.
        </p>
        <p>
          At Tross Capital, we take a lot of pride in our technology team. It is one of the 
          only Real Estate firms to also compete in the Financial Technology space. Our engineering team works 
          extensively on building advanced algorithms using <b>Artificial Intelligence</b> and 
          <b> Machine Learning</b> to help the company 
          forecast investments for its long-term investments. This is a very important aspect, as it analyzes terabytes of demographics 
          data to detect areas on the rise with tremendous growth potential. It is a crucial component in the decision making 
          process.
        </p>
        <p>
          This company is always open to taking on new project and investors. The passion of members 
          on the team is off the charts as they often host local events 
          to discuss upcoming trends, growing industries and guest speakers. The company enjoys 
          helping and connecting with people all around the country with similar interests. Tross Capital 
          takes a lot of pride in their diverse portfolio
          and is never afraid to take on any project that catches their eye. Feel free to  
          <Link href="/contact" passHref> contact us</Link> if you have a property you would like to sell or 
          are a potential investor.
        </p>
        <h5><i>Mission</i></h5>
        <p>{mission} 
        </p>
        </div>
      </Col>
      <Col sm={12} lg={4}>
        <div style={{padding: "16px"}}>

          <h4>Matthew Ruddy</h4>
          <h6 style={{fontSize: "18px"}}><i>President</i></h6>
          <img height="230" width="220" className="CardImage" src={"portrait.png"} />
              <ul style={{listStyleType: "square"}}>
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
