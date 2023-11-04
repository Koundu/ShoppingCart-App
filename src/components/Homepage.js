import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/actions/cartActions";

const Home = ()=>{
    const url = "https://dummyjson.com/products";
    const [products,setProduct] = useState([]);

    const fetchData = ()=>{
        return axios.get(url).then((res) => setProduct(res.data.products));
    };

    useEffect(()=>{
        fetchData();
    },[]);

    const dispatch = useDispatch();


    return(
        <div className="Homepage">
                <h1>All Items</h1>
                <div className="productItem">
                    {products.map((element)=>{
                        return(
                            <div className="itemCard">
                                <img src={element.thumbnail} style={{width:"340px",height:"453px"}} alt={element.title}></img>
                                <p>Title: {element.title}</p>
                                <p>Price: ${element.price}</p>
                                <button onClick={()=>{dispatch(addToCart(element))}}>ADD TO CART</button>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}

export default Home;