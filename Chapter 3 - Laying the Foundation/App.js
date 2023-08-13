import React from "react";
import ReactDOM from "react-dom/client";

//? This is a react element
// const Heading1 = (
//     <h1 id="title" key="h1">
//       Namaste React in Heading 1
//     </h1>
// );

//? This is a functional component
const Heading1 = ()=> (
  <h1 id="title" key="h1">
    Namaste React in Heading 1
  </h1>
);

//? This is functional component
const Heading2 = () => {
  return (
    <div>
        {/* {Heading1()}  or  <Heading1 />  both can call functional component */}
        <Heading1 />

      <h1 id="title" key="h1">
        Namaste React in in Heading 2
      </h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading2 />);
