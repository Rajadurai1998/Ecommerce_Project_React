import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Home.css';
function Home(){
    return(
        <div>
            <h2 className="customer-heading">What our customers have to say...</h2>
          <CardGroup>
      <Card>
        {/* <Card.Img variant="top" src={"holder.js/100px160"} /> */}
        <Card.Body>
          <Card.Title>Great Saving at Medkart Online Medical Store</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Shruti Patel</small>
        </Card.Footer>
      </Card>
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body>
          <Card.Title>Best Online Medical Services and OTC Products</Card.Title>
          <Card.Text>
          I've recently begun using Medkart Pharmacy, and I'm already impressed.
           They offer a wide range of products at affordable prices, providing a 
           significant relief for my wallet. Their delivery is consistently prompt,
            and their customer service is excellent. Thank you!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Rajesh Joshi</small>
        </Card.Footer>
      </Card>
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body>
          <Card.Title>Great Saving at Medkart Online Medical Store</Card.Title>
          <Card.Text>
          Every visit to Medkart means saving a substantial 45-50%, 
          a remarkable difference from other typical pharmacies. 
          For me, nothing is more important than maximizing savings.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Raju Prajapati</small>
        </Card.Footer>
      </Card>
    </CardGroup>
        </div>
    );

}
export default Home;