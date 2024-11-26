import React, { useState } from "react";
import Reducer from "../../components/reducer";
import App1 from "../../components/app1";

const Home = () => {
  const [state, setState] = useState("Olim");
  return (
    <>
      <Reducer />
      <App1 state={state} />
    </>
  );
};

export default Home;
