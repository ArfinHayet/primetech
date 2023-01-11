import {useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar'

function Home(){

	const [productList,setProductList] = useState([])
  const [clist,setClist] = useState([])
  const [submenu,setSubmenu] = useState(false);


  function getCategory(){
    fetch('https://sowdaapp.com/prime/getCategory',{
      method:'GET'
    })
    .then(res=> res.json())
    .then(res=>{
      setClist(res.message)
    })
    .catch(err=>{
      console.log(err)
    })
  }


  function getProduct(){
     fetch('https://sowdaapp.com/prime/fetchproduct',{
      method:'GET'
    })
    .then(res=> res.json())
    .then(res=>{
      setProductList(res.message)
    })
    .catch(err=>{
      console.log(err)
    })
  }

	useEffect(()=>{
    getProduct();
    getCategory();
	},[]);


  function scrollLeft(){
    document.getElementById("carous").scrollBy(-400, 0);
  }

  function scrollRight(){
    document.getElementById("carous").scrollBy(400, 0);
  }
	return(
	  <div>

      <Navbar/>

  
         <div class="container-fluid" style={{marginTop:60}}>
          <div class="row" style={{backgroundColor:'#f5f5f5'}}>



            <div class={submenu ? "submenu-active" : "submenu"} onMouseLeave={()=> setSubmenu(false)}>

              <div class="list-group">
                {clist.map(item=>(
                  <Link to={'/category/'+item.id} class="clink m-2">{item.cname}</Link>
                ))}
              </div>
              
            </div>





            <div class="col-sm-2" style={{backgroundColor:'#f5f5f5'}}>
              <ul class="list-group">
                <li class="" aria-current="true">
                  <Link class="clink" 
                  onMouseEnter={() => setSubmenu(true)}
                  >
                  <div class="d-flex justify-content-between m-2">
                   <b>Smartphone</b>
                   <i class="fa fa-angle-right" style={{marginTop:3}}></i>
                  </div>
                  </Link>
                </li>
                <li class="" aria-current="true">
                  <Link class="clink" onMouseEnter={() => setSubmenu(true)}
                  >
                  <div class="d-flex justify-content-between m-2">
                   <b>Smartphone</b>
                   <i class="fa fa-angle-right" style={{marginTop:3}}></i>
                  </div>
                  </Link>
                </li>

                <li class="" aria-current="true">
                  <Link class="clink" onMouseEnter={() => setSubmenu(true)}
                  >
                  <div class="d-flex justify-content-between m-2">
                   <b>Lifestyle</b>
                   <i class="fa fa-angle-right" style={{marginTop:3}}></i>
                  </div>
                  </Link>
                </li>

                <li class="" aria-current="true">
                  <Link class="clink" onMouseEnter={() => setSubmenu(true)}
                  >
                  <div class="d-flex justify-content-between m-2">
                   <b>Electronics & Appliances</b>
                   <i class="fa fa-angle-right" style={{marginTop:3}}></i>
                  </div>
                  </Link>
                </li>

                <li class="" aria-current="true">
                  <Link class="clink" onMouseEnter={() => setSubmenu(true)}
                  >
                  <div class="d-flex justify-content-between m-2">
                   <b>Mobile Accessories</b>
                   <i class="fa fa-angle-right" style={{marginTop:3}}></i>
                  </div>
                  </Link>
                </li>

                <li class="" aria-current="true">
                  <Link class="clink" onMouseEnter={() => setSubmenu(true)}
                  >
                  <div class="d-flex justify-content-between m-2">
                   <b>Computers</b>
                   <i class="fa fa-angle-right" style={{marginTop:3}}></i>
                  </div>
                  </Link>
                </li>
              </ul>
            </div>


            <div class="col-sm-10">
               
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={require('./assets/cover1.jpg')} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={require('./assets/cover2.jpg')} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={require('./assets/cover3.jpg')} class="d-block w-100" alt="..."/>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
           </div>




            </div>

              </div>
          
        
        
      </div>


      <div class="container" style={{marginTop:80,marginBottom:200,display:'grid',gridTemplateColumns:'auto auto auto'}}>
         <div class="card m-2">
           <img src={require('./assets/tv.jpg')}/>

           <div class="m-2 p-2">
             <h3>TV</h3>
             12 Months 0% EMI + up to 30% discount or flat 8% checkout discount
           </div>
         </div>

         <div class="card m-2">
           <img src={require('./assets/watch.jpg')}/>
           <div class="m-2 p-2">
             <h3>TV</h3>
             12 Months 0% EMI + up to 30% discount or flat 8% checkout discount
           </div>
         </div>

         <div class="card m-2">
           <img src={require('./assets/phone.jpg')}/>
           <div class="m-2 p-2">
             <h3>TV</h3>
             12 Months 0% EMI + up to 30% discount or flat 8% checkout discount
           </div>
         </div>
      </div>

      <div class="container">
        <div class="d-flex">
          <img src={require('./assets/deals.jpg')} style={{width:60,marginRight:20}}/>
          <h3>Deals of the day</h3>
        </div>
        <hr/>
        
      </div>


      <div class="inBar">

        <i onClick={()=>{
            scrollLeft();
           }} class="fa fa-angle-left cusLeft"></i>

            <i onClick={()=>{
            scrollRight();
           }}
           class="fa fa-angle-right cusRight"></i>
        <div class="pCon" id="carous"> 
           {productList.map((item) => (

                  <div>
                  <Link
                    to={"/product/" + item.id}
                    class="clink productBox"
                  >
                    <div>
                      
                        <div>
                        <img
                          src={
                            "https://sowdaapp.com/sandweep/image/" + item.pimage
                          }
                        />
                        
                        <p>
                          {item.pname.substring(0, 35)}...
                        </p>

                     
                        <p>
                          {item.offer == 1 ? (
                            <>
                              <span
                                style={{
                                  textDecoration: "line-through",
                                  marginRight: 8,
                                  color: "#565656",
                                  fontWeight: 300,
                                  fontSize: 15,
                                }}
                              >
                                ৳ {item.price}
                              </span>
                              <span>৳ {item.oprice}</span>
                            </>
                          ) : (
                            <span>৳ {item.price}</span>
                          )}
                        </p>

                        <p>
                          <span>
                            <i class="fa-solid fa-star mx-1 text-warning"></i>
                          </span>
                          {item.star.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </Link>
                  </div>
                ))}
      </div>
      </div>
	 
	    
	  </div>
	)
}

export default Home