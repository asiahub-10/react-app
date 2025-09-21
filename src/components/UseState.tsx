// import { baselink } from "./Config";
// import Demo from "./Config";
// import {SocialLink} from "./SocialLink";
import { useState, useEffect } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function UseState() {
  // let like = 0;
  const [like, setLike] = useState(0);
  useEffect(()=>{
    console.log("UseState is working");
  },[like]);

  return (
    <>
      <div className="container text-center">
        <div>UseState</div>
        {/* {baselink.link}
        <h3>{Demo}</h3> */}
        {/* <SocialLink /> */}
        <h2>Like: {like}</h2>
        <button onClick={() => setLike(like + 1)}>👍</button>
        {/* {like > 0 ? 
          <button onClick={() => setLike(like - 1)}>👎</button>
        : null
        } */}
        {like > 0 && 
          <button onClick={() => setLike(like - 1)}>👎</button>
        }
      </div>
    </>
  )
}
export default UseState;