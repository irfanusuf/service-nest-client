import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Store";
import { useParams } from "react-router-dom";
import "./OrderPayment.scss";
const OrderPayment = () => {
  const { orderId } = useParams();
  const { cancelOrder, getOrder, order , handleSubmitReview , loadComment} = useContext(Context);

  useEffect(() => {
   getOrder(orderId);
  }, [orderId , loadComment]);

 

  const { service, customer, orderCost } = order || {};
  const { serviceTitle, picUrls, serviceCost, discount, description ,reviews , _id } = service || {};
  const { username, email , address } = customer || {};


  const [localaddress, setAddress] = useState(address);

  const [comment , setComment] = useState("")

 const fromData = {
  comment : comment
 }

  return (
    <div className="order-container">
      <h2> Check the Service and proceed For Payment </h2>

      <div className="order-upper-container">

        <div className="order-left">
          <h3> Order Details </h3>

          <em>You are booking a service for</em>

          <h4>{serviceTitle}</h4>

          <img src={picUrls} alt={serviceTitle} />

          <p>
            <b> Service Cost : </b>
            <span>{serviceCost} Rs </span>
          </p>

          <p>
            <b> Discount : </b>
            <span> -{discount} % </span>
          </p>

          <p>
            <b> Total Order Cost : </b>
            <span> {orderCost} Rs</span>
          </p>
        </div>

        <div className="order-right">
          <div className="upper">
            <h3>Your Personal Details </h3>

            <div>
              <p>
                <b>Your Username :</b> <i>{username} </i>{" "}
              </p>
            </div>

            <div>
              <p>
                <b>Your Email : </b> <i>{email} </i>
              </p>
            </div>

            <div>
              <b> Enter your Address here : </b>
              <input
                value={localaddress}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>

            <div className="buttons">
              <button> Update Address</button>
            </div>
          </div>

          <div className="bottom"></div>
        </div>

      </div>

      <div className="buttons">
        <button
          onClick={() => {
            cancelOrder(orderId);
          }}
        >
          Cancel
        </button>

        <button> Procced For the Payment</button>
      </div>


      <div className="container-bottom">
        <h3>Service Description</h3>

        <div className="order-description">
          <p> {description} </p>
        </div>
      </div>


      <div className="container-bottom">
        <h3>Reviews ({reviews && reviews.length})</h3>

        <div className="order-description">
          <p>
          {reviews && reviews.length === 0 && "No Reviews"}
          </p>

          {reviews && reviews.map((element)=>(


            <div className="comments">
                  
               <div>{element.username}</div>  <p>   {element.review}  </p>

            </div>
          
          ))}
         
        </div>


        
        <form>
        <input
         placeholder="Write your Review here " 
         value={comment}
         onChange={(e)=>{setComment(e.target.value)}}/>
        <button onClick={(e)=>{
          handleSubmitReview (e , fromData , _id) 
          setComment("")

        }}> Add review </button>
        </form>
       
      </div>

    </div>
  );
};

export default OrderPayment;
