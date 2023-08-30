import React, { Component } from 'react';
import Icon from './Icon';
const color = {
  green: '#185E46',
  orange: '#F2990A',
  red: '#AB0A15',
}


function App() {
  return (
    <div>
        <Icon name="pin" color={color.green} size={100} />
        <Icon name="add" color={color.orange} size={100} />
        <Icon name="cancel" color={color.red} size={100} />
    </div>  );
}

export default App;
