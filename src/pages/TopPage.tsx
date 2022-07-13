import React, { useState } from "react";
import Layout from "../Layouts/Layout";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  changeMessage,
  sagaChangeMessage,
} from "../redux/actions";

import { fsaActions } from "../redux/actions/fsaAction";

export default function TopPage() {
  const counter = useSelector((state: any) => state.counter);
  const sagaState = useSelector((state: any) => state.sagaCounter);
  const fsa = useSelector((state: any) => state.fsa);
  //console.log(fsaSate);
  const dispatch = useDispatch();

  const [newText, setNewText] = useState("");
  const [sagaNewText, setSagaNewText] = useState("");
  const [fsaNewText, setFsaNewText] = useState("");
  return (
    <Layout>
      <div>TopPage</div>
      <h1>{counter.count}</h1>
      <h2>{counter.message}</h2>
      <h1 style={{ color: "blue" }}>{sagaState.sagaMessage}</h1>
      <h1 style={{ color: "red" }}>{fsa.fsaMessage}</h1>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      <input
        type="text"
        onChange={(e) => {
          setNewText(e.target.value);
        }}
        value={newText}
      />
      <br />
      <button
        onClick={() => {
          dispatch(changeMessage(newText));
          setNewText("");
        }}
      >
        Change Message
      </button>
      <br />
      <input
        type="text"
        onChange={(e) => {
          setSagaNewText(e.target.value);
        }}
        value={sagaNewText}
      />

      <button
        style={{ backgroundColor: "blue" }}
        onClick={() => {
          dispatch(sagaChangeMessage(sagaNewText));
          setSagaNewText("");
        }}
      >
        SAGA Message
      </button>

      <br />
      <input
        type="text"
        onChange={(e) => {
          setFsaNewText(e.target.value);
        }}
        value={fsaNewText}
      />
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => {
          dispatch(fsaActions.setFsaMessage(fsaNewText));
        }}
      >
        FSA Message
      </button>
    </Layout>
  );
}
