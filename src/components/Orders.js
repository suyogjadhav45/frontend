import React from "react";
import "./Orders.css";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import ViewSingleOrder from "./ViewSingleOrder";
const orders = [
  {
    orderNumber: "12345",
    details: "Vegetables",
  },
  {
    orderNumber: "23456",
    details: "Fruits",
  },
  {
    orderNumber: "34567",
    details: "Vegetables",
  },
  {
    orderNumber: "12243",
    details: "Fruits",
  },
  {
    orderNumber: "23324",
    details: "Vegetables",
  },
  {
    orderNumber: "86767",
    details: "Fruits",
  },
  {
    orderNumber: "89790",
    details: "Vegetables",
  },
  {
    orderNumber: "89790",
    details: "Vegetables",
  },
  {
    orderNumber: "89790",
    details: "Vegetables",
  },
  {
    orderNumber: "89790",
    details: "Vegetables",
  },
];

const Orders = () => {
  return (
    <div className="queue-page border-2 rounded-md bg-tailtertiary m-0">
      <div className="orders-container">
      <div className="flex pl-3 py-3 justify-between pr-20 font-poppins font-bold text-teal-200 bg-black ">
          <h2>ORDER ID</h2>
          <h2>ORDER MENU</h2>
          <h2>OPTIONS</h2>
        </div>
        {orders.map((order) => (
          <div key={order.orderNumber} className="order-card link hover:transition-all bg-white duration-300 ease-in-out font-poppins font-bold m-0 px-2 py-0">
            <h2>Order #{order.orderNumber}</h2>
            <p>{order.details}</p>
            <div className="btn flex m-0 p-0">
              <Modal btnname="DETAILS" compinfo={<ViewSingleOrder />} />
              <Modal btnname="DELETE" compinfo={<><h2 className="text-red-600 text-xl font-bold font-poppins">Are you sure you want to delete this Order??</h2></>} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
