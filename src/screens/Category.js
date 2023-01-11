import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import Navbar from './Navbar'
function Category(props){
    
    var cate = props.match.params.cate;
    const [productList,setProductList] = useState([])
  	useEffect(()=>{
  		fetch('https://sowdaapp.com/prime/fetchAllproduct',{
  			method:'GET'
  		})
  		.then(res=> res.json())
  		.then(res=>{
  			setProductList(res.message)
  		})
  		.catch(err=>{
  			console.log(err)
  		})
	},[]);


	return(
        
        <>
        <Navbar/>
        

        <img src={require('./assets/cover.jpg')} style={{width:'100%',marginTop:60}}/>
        <div class="container" style={{marginTop:40}}>
          <div class="row">
            <div class="col-sm-2">


             <h3>Filter</h3>
             <hr/>

             <p>Processor</p>
             <hr/>

             <p>Color</p>
             <hr/>


            </div>
            <div class="col-sm-10">
              

              <div class="d-flex justify-content-between">
                <div>
                  <span><p style={{fontSize:30}}>Samsung</p>
                  <small>25 items in Samsung</small></span>
                </div>

                <div>
                  
                  <select class="form-control" style={{marginTop:10}}>
                    <option>Sort By</option>
                  </select>
                </div>
              </div>
              

              <hr/>
              <div class="cateCon">
                
                {productList.map((item) => (

                  <>
                  {item.category.includes(cate) ? 
                  <>
                  <Link
                    to={"/product/" + item.id}
                    class="clink productBox"
                    style={{margin:5,width:200}}
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
                  </> : <></>}

                  </>
                ))}
        </div>
            </div>
          </div>
        </div>
		    
	    </>
	)
}

export default withRouter(Category);