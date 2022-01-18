import React from "react";
//import "./style.css";

function Wrapper({ renderPage }) {
  return (
  <main className="wrapper">
  {renderPage()}
  </main>
  )
}

export default Wrapper;