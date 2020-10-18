import { Container } from 'reactstrap'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="Tross Capital | About">
    <Container>
      <div>
        <h1>About</h1>
        <p>
        The wave crashed and hit the sandcastle head-on. The sandcastle began to melt under the waves force and as the wave receded, half the sandcastle was gone. The next wave hit, not quite as strong, but still managed to cover the remains of the sandcastle and take more of it away. The third wave, a big one, crashed over the sandcastle completely covering and engulfing it. When it receded, there was no trace the sandcastle ever existed and hours of hard work disappeared forever.
        </p>
      </div>
      <div>
          <img height="230" width="220" className="CardImage" src={"portrait.png"} />
              <ul>
                <li>
                  Engineer - Mastercard
                </li>
                <li>
                  Member - Mobile Home Park Association
                </li>
                <li>
                  Pennsylvania State University Graduate - Financial Engineering
                </li>
                <li>
                </li>
                <li>
                </li>
              </ul>
      </div>
    </Container>
  </Layout>
)

export default AboutPage
