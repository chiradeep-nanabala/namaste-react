import React from 'react';
import ReactDOM from 'react-dom/client';

{/* <div id="parent">
    <div id="child">
        <h1> Sub Element h1 </h1>
        <h2> Sub Element h2 </h2>
    </div>
</div> */}

// ReactElement (Object) => HTML (Browser Understands)

const parent = React.createElement(
  "div",
  {id: "parent"},
  React.createElement(
    "div",
    {id: "child"}, [
        React.createElement("h1", {}, "Sub Element h1"), 
        React.createElement("h2", {}, "Sub Element h2 updated")
    ])  
);

const rootReact = ReactDOM.createRoot(document.getElementById("root"));
rootReact.render(parent);