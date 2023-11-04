import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";

/*This Page is the Javascript for the Navbar*/

const Navbar = ()=>{
    const navigate = useNavigate();
    useEffect(()=>{
        navigate("/")
    },[])
    return(
        <div className="Navbar">
            <div id="left"><p onClick={()=>navigate('/',{replace:true})}>Shopping Cart</p></div>  
            <div id="right">
                <button onClick={()=>navigate('/',{replace:true})} type="submit">Home Page</button>
                <button onClick={()=>navigate('/cart',{replace:true})} type="submit">Cart Page</button>
            </div>     
        </div>
    )
}

export default Navbar;