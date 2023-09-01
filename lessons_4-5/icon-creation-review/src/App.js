import React, { Component } from "react";
import Icon from "./Icon";

const iconColor = {
  blue: '#0099FF',
  green: '#6AED76'
}

function App() {
  return (
    <div>
      <Icon name="add" color="#000000" size={100}></Icon>
      <Icon name="pin" color="#000000" />
      
    </div>
  );
}

export default App;
