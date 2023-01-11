import {useState} from 'react'
import {Link} from 'react-router-dom'
function Navbar(){
	const [catebar,setCatebar] = useState(false)
  const [middlebar,setMiddlebar] = useState(false)
	return(

		 <nav class="navbar navbar-expand-lg cusNav fixed-top">
         <div class="container">
          <i class="fa fa-bars" style={{color:'white'}} onClick={()=>{
          	setCatebar(!catebar)
          }}></i>
          <Link to={'/'} style={{textDecoration:'none'}}>
          <h2 style={{color:'white',marginLeft:8}}>pickaboo</h2>
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:200}}>
            <div class="d-flex">
              <input type="text" placeholder="Search Here"/>
              <div style={{backgroundColor:'#e2f4ff',width:35,textAlign:'center',padding:2,paddingTop:8}}><i class="fa fa-search"></i></div>
            </div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to={'/cart'} style={{border:'1px solid white',width:100,marginLeft:20,textAlign:'center',color:'white',padding:8,textDecoration:'none',borderRadius:6}}>Login</Link>
              <Link to={'/cart'} style={{width:100,marginLeft:20,textAlign:'center',color:'white',padding:8,textDecoration:'none',borderRadius:6}}>
              <i class="fa fa-shopping-cart" style={{color:'white',marginRight:4}}></i>Cart</Link>
            </ul>
          </div>
          </div>

         


        

        </nav>

        
	)
}

export default Navbar;