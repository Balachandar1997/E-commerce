//import logo from './logo.svg';
import './App.css';
import React from "react"

function App() {

  const[data,setData]=React.useState("")

  function fetchApi(){
    fetch("https://fakestoreapi.com/products")
       .then((res)=>res.json())
        .then((res)=>setData(res))

  }
  React.useEffect(()=>{
    fetchApi()


  },[])
  console.log("data",data)
  return (
    <div className="container">
      
      {
         data?.map((item)=>(
          
          <div className="data-item" key={data.id}>
            <div> {item.title}</div>
            <div className='img-div mt-20'><img src={item.image} alt={item.title} /></div>
            <div className='price'>₹{item.price}</div>
            <button className='add-cart mt-20'>Add to card</button>
           
             
          </div>
         ))
      }
   
    </div>
  );
}

export default App;
