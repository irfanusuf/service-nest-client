import React, { useContext } from 'react'
import { Context } from '../../context/Store'
import { useParams } from 'react-router-dom'

const OrderPayment = () => {

 const {orderId} = useParams()
 const {cancelOrder} = useContext(Context)

  return (
    <div>OrderPayment





        <button onClick={()=>{
            cancelOrder(orderId)}}> Cancel </button>
    </div>
  )
}

export default OrderPayment