import React from 'react';
import './Home.css';
import Product from './Product.js';

function Home() {
    return (
        <div className = "home">
            <div className="home__container">
                
                <img className="home__image" src="https://m.media-amazon.com/images/I/71ZBHazSvIL._SX3000_.jpg">
                </img>
                <div className="home__row">
                <Product
                  id="01"
                  title="See U in C by Ali Karim Sayed (Author)"
                  price={4450}
                  image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
                  rating={5}/>
                <Product  id="02"
                title="Noise ColorFit Pro 2 Full Touch Control Smart Watch"
                price={2799}
                image="https://m.media-amazon.com/images/I/61xzuXWWozS._SL1200_.jpg"
                rating={5}
                />
                    {/* product*/}
                    {/* product*/}

                </div>
                <div className="home__row">
                <Product
                 id="03"
                 title="Apple iPhone 13 Mini (256GB)"
                 price={10}
                 image="https://m.media-amazon.com/images/I/61KeIxmldLL._SL1500_.jpg" 
                 rating={5}/>
                <Product
                 id="04"
                 title="2019 Apple MacBook Pro (16-inch/40.65 cm, 16GB RAM, 1TB)"
                 price={125000}
                 image="https://m.media-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg" 
                 rating={5}/>
                <Product
                  id="05"
                  title="realme Buds Q2 Active Noise Cancellation (ANC)"
                  price={1999}
                  image="https://m.media-amazon.com/images/I/61QyKqCvQIS._SL1500_.jpg://m.media-amazon.com/images/I/61KeIxmldLL._SL1500_.jpg" 
                  rating={5}/>
                    {/* product*/}
                    {/* product*/}
                     {/* product*/}
                </div>
                <div className="home__row">
                    {/* product*/}
                    <Product id="06"
                title="Redmi 126 cm (50 inches) 4K Ultra HD Android Smart LED"
                price={38999}
                image="https://m.media-amazon.com/images/I/81sscKjSPiL._SL1500_.jpg"
                rating={5}/>
                </div>

                </div>

        </div>
    )
}

export default Home
