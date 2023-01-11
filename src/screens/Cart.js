import {useState,useEffect} from 'react';
import Navbar from './Navbar'
function Cart(){
     
    const [cartData,setCartData] = useState([])
    const [update,setUpdate] = useState(0)
    const [total,setTotal] = useState(0)
    useEffect(()=>{
      if (localStorage.getItem("cart") != null) {
      setCartData(JSON.parse(localStorage.getItem("cart")));
      var i = 0;
      JSON.parse(localStorage.getItem("cart")).map((item) => {
        i = i + item.quantity * item.price;
      });

      setTotal(i.toFixed(2));
    }
    },[update])


    function delProduct(index){
      var data= JSON.parse(localStorage.getItem("cart"))

      data.splice(index,1)
      localStorage.setItem("cart",JSON.stringify(data))
      setUpdate(update+1)
    }
	return(
	 <div>
       
       <Navbar/>
	   <div class="container" style={{marginTop:150}}>

         <div class="row">
	     <div class="col-sm-6">
	       {cartData.map((item,index)=>(
           
           <div class="card m-2">


	       	 <div class="d-flex">
	       	   <div>
	       	     <img
	       	      style={{width:120}}
                  src={"https://sowdaapp.com/sandweep/image/" + item.pimage}/>
	       	   </div>

	       	   <div class="p-2">
	       	     <p>
                 {item.name.substring(0, 35)}...
                <br></br>quantity : {item.quantity}
                <br></br>Price : {item.price}</p>

               	<div>
			       	   <i class="fa fa-trash" onClick={()=>{
			       	   	 delProduct(index);
			       	   }}></i>
	       	 </div>
	       	   </div>
	       	 </div>
                        
                
	       	 </div>
	       	))}
	     </div>


	     <div class="col-sm-6">
	       <div class="card m-2 p-2">
             <div>
               <p>Customer Name : Syed Arfin Hayet</p>
               <p>Address : Greenview R/A , Oxygen , Chittagong</p>
             </div>
	       </div>
	       <div class="card m-2 p-2">
             <div>
               <p>Sub Total : {total} BDT</p>
               <p>Total : {total}</p>
             </div>
	       </div>

	       <button class="w-100 m-2 p-4" style={{backgroundColor:'#ff5722',border:'none',outline:'none',color:'white',borderRadius:6}}>Proceed to Checkout</button>
	     </div>
	   </div>
	   </div>


	   
	 </div>
	)
}

export default Cart;