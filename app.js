import React from "react";
import ReactDOM from "react-dom/client";

// React Create Element Method
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React Learning 🚀"
);

const HeadingUsingJSX = () => (
  <h1 id="heading" tabIndex="5" className="myclass">
    Namaste React using JSX 🚀
  </h1>
);

// React Component
// Component Composition => A component inside a component is called Component Composition
const HeadingComponent = () => (
  <div className="container">
    <HeadingUsingJSX />
    {HeadingUsingJSX()}
    {
    /* You can also write JS inside JSX using { curly braces } 
    this is very powerfull as you can wirte any JS and will get executed over here 
    and JSX automatically stops CORS (cross site scripting attack) when it gets transpiled
    */}
    <HeadingUsingJSX></HeadingUsingJSX>
    {/* This is one another way of calling component insisde component */}
    <h1 id="heading" tabIndex="5" className="myclass">
      This is React Functional Component
    </h1>
  </div>
);

const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
/*
            ☝☝☝☝ 
            This is how you call a component to render usirng ReactDom 
*/
