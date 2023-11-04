import React from "react";
import { useSelector } from "react-redux";
import { getTotal } from "../Redux/reducers/cartReducers";
import { useDispatch } from "react-redux";
import { removeFromCart, reset } from "../Redux/actions/cartActions";
import { useNavigate } from "react-router-dom";


const Cart = ()=>{
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function checkOut(){
        alert("All Items are added successfully\nPlease Confirm below to navigate to Home Page");
        navigate("/")
        window.location.reload();
    }
    return(
        <div className="cartPage">
            {cart.cart.length>0 &&
            <div className="items">
            { cart.cart.map((item)=>{
                return(
                    <div className="itemCard">
                        <img src={item.image} style={{width:"340px",height:"453px"}} alt={item.title}></img>
                        <p>Title: {item.title}</p>
                        <p>Price: ${item.price}</p>
                        <button onClick={()=>{dispatch(removeFromCart(item.id))}}>REMOVE FROM CART</button>
                    </div>
                )
            })}
            </div>
            }
            <div className="cartItems">
                {
                   cart.cart.length>0 &&
                   <div className="list">
                        <p style={{textAlign:"center",fontSize:"24px"}}>Checkout List</p>
                        <hr style={{width:"100%"}}/>
                        <table>
                        <tr>
                        {
                            cart.cart.map((item)=>{
                                return(
                                    <div className="itemList">
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>${item.finalPrice}</td>
                                    </div>
                                )
                            })
                        }
                        </tr>
                        </table>
                        <hr style={{width:"100%"}}/>
                        <li>Total: <strong>${getTotal(cart.cart).toFixed(4)}</strong></li>
                        <button onClick={()=>{checkOut()}}>PROCEED TO CHECKOUT</button>
                   </div> 
                }
            </div>
        </div>
    )
}

export default Cart;