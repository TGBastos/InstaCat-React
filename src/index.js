import React from "react";


import Post from "./components/Post";
import Logo from "./components/Logo";

const Main = () => {
  return (
    <>
    <Logo/>
    <Post file={require("./assets/images/cat1.jpg")} count={5}/>
    <Post file={require("./assets/images/cat2.jpg")} count={0}/>
    </>
    )
}



export default Main;