import React from "react";
import Login from "./Login";
import Register from "./Register";

// var isLoggedin = true;
var isRegistered = false;

function App() {
  return <div>{isRegistered ? <Login /> : <Register />}</div>;
}

export default App;
{
  /* <div>{isLoggedin ? <h1>Hello User</h1> : <Login />}</div>; */
}
