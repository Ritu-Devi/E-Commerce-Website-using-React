import { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
function Products() {
    
    const[products, setproducts]=useState([]);



    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((d)=>{
     setproducts(d.products)
        });
        
}, []);


console.log(products)
    return ( 
        <>
        <Header/>
       <h1>Products</h1>
       
       <section className="furniture_section layout_padding">
  <div className="container">
    <div className="heading_container">
   
    </div>
    <div className="row">
     {products.map((ty)=>(
        <>
      <div className="col-md-6 col-lg-4">
        <div className="box">
          <div className="img-box">
            <img src={ty.images} alt="" />
            
            
          </div>
          <div className="detail-box">
            <h5>{ty.title}</h5>
            <p>{ty.description}</p>
            <p>{ty.category}</p>
           <p> {ty.prices}</p>
            <div className="price_box">
              <h6 className="price_heading">
                <span>$</span> 100.00
              </h6>
              <a href="">Buy Now</a>
            </div>
          </div>
        </div>
      </div>
      


        </>
     ))}
     
     </div>
        </div>
        </section>
        <Footer/>
        </>
     )}

export default Products;