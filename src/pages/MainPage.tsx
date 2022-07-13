import React from 'react'
import Layout from '../Layouts/Layout'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/actions";

export default function MainPage() {
    const counter = useSelector((state: any) => state.counter);
    const dispatch = useDispatch();
  

  return (
    <Layout>
    <div>MainPage</div>
    <h1>{counter.count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </Layout>
  )
}
