import {useState,useEffect} from 'react'
import { withRouter } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import Navbar from './Navbar'


function Product(props){

	var id = props.match.params.id;

	const [primaryimg,setPrimaryImg] = useState('')
	const [productInfo,setProductinfo] = useState([])


	const [html, setHTML] = useState({ __html: "" });
   

  

    useEffect(()=>{
       const data = new FormData()
       data.append("id",id);
       fetch('https://sowdaapp.com/prime/fetchproductById',{
					method:'POST',
					body:data
				})
				.then(res=> res.json())
		    .then(res=>{
			  setPrimaryImg(res.message[0].pimage)
			  setProductinfo(res.message)
			  const backendHtmlString = res.message[0].des;
        setHTML({ __html: backendHtmlString });
				})
				.catch(err=>{
					console.log(err)
				})
    },[])
    

    function addtoCart(pname,pprice,quantity,pimage){
      var productData = {
      	'name':pname,
      	'price':pprice,
      	'quantity':quantity,
      	'pimage':pimage
      }



      if(localStorage.getItem("cart") == null){
      	var data = [];
      	data.push(productData)
      	localStorage.setItem("cart",JSON.stringify(data))
      } else {
      	var data = JSON.parse(localStorage.getItem("cart"));
         data.push(productData);
         localStorage.setItem("cart",JSON.stringify(data))
      }

      alert('Product Added to Cart')
    }


	return(
	  <div>
      <Navbar/>
      <div class="d-flex" style={{marginTop:120}}>
        <div class="w-50">
          <div class="imgBox">
            <div class="d-flex">
              <div class="w-25">
                {productInfo.map(item=>(
		               	<>
		               	<img
		               	  onClick={()=>{
		               	  	setPrimaryImg(item.pimage)
		               	  }}
				              style={{ width: "50%" }}
				              class="m-2"
				              src={"https://sowdaapp.com/sandweep/image/" + item.pimage
				             }
		                  />

		                  <img
		                    onClick={()=>{
		               	  	setPrimaryImg(item.pimage2)
		               	  }}
		                    class="m-2"
				              style={{ width: "50%" }}
				              src={"https://sowdaapp.com/sandweep/image/" + item.pimage2
				             }
		                  />

		                  <img
		                    onClick={()=>{
		               	  	setPrimaryImg(item.pimage3)
		               	  }}
		                    class="m-2"
				              style={{ width: "50%" }}
				              src={"https://sowdaapp.com/sandweep/image/" + item.pimage3
				             }
		                  />
		                  </>
		               ))}
              </div>
              <div class="w-75" style={{position:'relative',height:'75vh'}}>
                 <div style={{position:'absolute',right:0}}>
                 <ReactImageMagnify
                        {...{
                          smallImage: {
                            height: 400,
                            width: 430,
                            sizes: "cover",
                            alt: "Wristwatch by Ted Baker London",
                            src:
                              "https://sowdaapp.com/sandweep/image/" +
                              primaryimg,
                          },
                          largeImage: {
                            src:
                              "https://sowdaapp.com/sandweep/image/" +
                              primaryimg,
                            width: 800,
                            height: 800,
                          },
                        }}
                      />
                    </div>
                  

			            {productInfo.map(item=>(
			              <div class="cartBox">
			              <button onClick={()=>{
			              	addtoCart(item.pname,item.price,item.quan,item.pimage)
			              }}>Add To Cart</button>
			              <button style={{backgroundColor:'#ff5722',color:'white'}}>Buy Now</button>
			            </div>
			            ))}
              </div>
            </div>

          
          </div>
        </div>
        <div class="w-50">
           <div class="card imgBox p-4" style={{overflow:'auto'}}>
             {productInfo.map(item=>(
		         <div>
		          <h5>{item.pname}</h5>

              <div class="d-flex">
                <div style={{backgroundColor:'#ff5722',padding:10,marginRight:5,marginBottom:5,color:'white',borderRadius:4}}>
                <i class="fa fa-star"></i>0</div>
                <p>(0)</p>
                <p style={{color:'#ff5722',marginLeft:15}}> | Add our review</p>
              </div>



		          <div class="d-flex">
		           <div class="card p-2" style={{width:50,marginRight:10}}>
		             <img src={require('./assets/fast.png')} style={{width:'100%'}}/>
		           </div>
		           <small>| Get Same Day Delivery by choosing FastPick at Checkout</small>
		          </div>
		          <p>Brand : <span style={{color:'#1299e8'}}>{item.brand}</span> | Sold by: <span style={{color:'#1299e8'}}>Motion View</span></p>
		          <p style={{fontSize:30,color:'#1299e8',fontWight:'bold'}}>৳{item.price}</p>
              <p style={{color:'#ff5722'}}>Earn 25 Club Points</p>
              

              <hr/>
              <div class="d-flex">
                <div style={{marginRight:20}}>Quantity</div>
                <div class="d-flex">
                 <button class="btn btn-light card">+</button>
                 <input value="1" type="text" style={{width:30,border:'1px solid #ddd','textAlign':'center'}}/>
                 <button class="btn btn-light card">-</button>
                </div>
              </div>

              <hr/>


              <div class="d-flex">
                <div style={{marginTop:40}}>Color</div>
                <div class="card p-2 m-2" style={{width:100}}>
                  <img style={{width:'100%'}} src={"https://sowdaapp.com/sandweep/image/" + primaryimg}/>
                </div>
              </div>

              <hr/>

              <p><i class="fa fa-check-circle" style={{marginRight:10}}></i>Warranty : 3 Months warranty (Please preserve your box to claim warranty)</p>

		          <b>More Information</b>
                     <div
                        class=" mx-4 pb-4"
                        dangerouslySetInnerHTML={html}></div>
		                 </div>
		        ))}
           </div>
        </div>
      </div>
	    
	  </div>
	)
}

export default withRouter(Product)