import './Medicine.css';
import image1 from './image1.webp'; 
import image2 from './image2.webp'; 
import image3 from './image3.webp'; 
import image4 from './image4.webp'; 
import image5 from './image5.webp'; 
import image6 from './image6.webp';
import image7 from './image7.webp'; 
import image8 from './image8.webp'; 
import image9 from './image9.webp'; 
import image10 from './image10.webp'; 
import image11 from './image11.webp'; 
import image12 from './image12.webp';
// import wishlisticon from './wishlisticon.png';  
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate } from 'react-router-dom';

function Medicine(){
   // Check if username is present in session storage
  const username = sessionStorage.getItem('username');
  
  // If username is not present, redirect user to login page
  if (!username) {
    return <Navigate to="/login" />;
  }
    return(
        <div>
            <section>
    <div class="section">
      
      <div class="section2">
        <div class="container">
          <div class="items">
            <div class="img img1"><img src={image1} alt=""></img></div>
            <div class="name">himalaya wellness herbs</div>
            <div class="price">Rs 185</div>
            {/* <div class="info">packet of 60 tablets</div> */}
            {/* <div><img src={wishlisticon} alt=""></img></div> */}
            <button type="button" class="btn btn-success">Add to cart</button>

          </div>
          <div class="items">
            <div class="img img2"><img src={image2} alt=""></img></div>
            <div class="name">Zingavita Ayurveda</div>
            <div class="price">Rs 661</div>
            {/* <div class="info">bottle of 30 capsules</div> */}
            <button type="button" class="btn btn-success">Add to cart</button>
          </div>
          <div class="items">
            <div class="img img3"><img src={image3} alt=""></img></div>
            <div class="name">Dabur Ashvagandhadi</div>
            <div class="price">Rs 400</div>
            {/* <div class="info">jar of 400 gms paste</div> */}
            <button type="button" class="btn btn-success">Add to cart</button>
          </div>
          <div class="items">
            <div class="img img1"><img src={image4} alt=""></img></div>
            <div class="name">Vansaar Ashwagandha</div>
            <div class="price">Rs 200</div>
            {/* <div class="info">Bottle of 60 tablets</div> */}
            <button type="button" class="btn btn-success">Add to cart</button>
          </div>
          <div class="items">
            <div class="img img1"><img src={image5} alt=""></img></div>
            <div class="name">Ashwagandha Capsule</div>
            <div class="price">Rs 205</div>
            {/* <div class="info">Bottle of 60 vegicaps.</div> */}
            <button type="button" class="btn btn-success">Add to cart</button>
          </div>
          <div class="items">
            <div class="img img1"><img src={image6} alt=""></img></div>
            <div class="name">Baidyanath Ashwagandha</div>
            <div class="price">rs 220</div>
            {/* <div class="info">Bottle of 450ml liquid</div> */}
            <button type="button" class="btn btn-success">Add to cart</button>
          </div>
          <div class="items">
            <div class="img img1"><img src={image7} alt=""></img></div>
            <div class="name">Volini</div>
            <div class="price">rs 457</div>
            {/* <div class="info">combo of 2 packs</div> */}
            <button type="button" class="btn btn-success">Add to cart</button>
          </div>
          <div class="items">
            <div class="img img1"><img src={image8} alt=""></img></div>
            <div class="name">MuscleBlaze</div>
            <div class="price">Rs1889</div>
            {/* <div class="info">combo pack of 2 units</div> */}
            <button type="button" class="btn btn-success">Add to cart</button>
          </div>
          <div class="items">
            <div class="img img1"><img src={image9} alt=""></img></div>
            <div class="name">Cetaphil</div>
            <div class="price">Rs 802</div>
            {/* <div class="info">combo pack of 2 Packs</div> */}
            <button type="button" class="btn btn-success">Add to cart</button>
          </div>
          <div class="items">
            <div class="img img1"><img src={image10} alt=""></img></div>
            <div class="name">Flamingo Knee Cap</div>
            <div class="price">Rs 492</div>
            {/* <div class="info">combo pack of 2 Packs</div> */}
            <button type="button" class="btn btn-success">Add to cart</button>
          </div>
          <div class="items">
            <div class="img img1"><img src={image11} alt=""></img></div>
            <div class="name">Active Glucometer</div>
            <div class="price">Rs 2001</div>
            {/* <div class="info">combo pack of 2 Packs</div> */}
            <button type="button" class="btn btn-success">Add to cart</button>
          </div>
          <div class="items">
            <div class="img img1"><img src={image12} alt=""></img></div>
            <div class="name">Diabetes Care</div>
            <div class="price">Rs 569</div>
            {/* <div class="info">combo pack of 3 Packs.</div> */}
            <button type="button" class="btn btn-success">Add to cart</button>
          </div>
         
        </div>

      </div>
    </div>

  </section>
        </div>
    );
}
export default Medicine;