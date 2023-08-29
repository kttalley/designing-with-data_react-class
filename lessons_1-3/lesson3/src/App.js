import React from 'react';
import UserProfile from './UserProfile';
import userData from './data.js';
import './App.css';

function App() {
  return (
    <div style={{ marginTop: 2 }}>
      {
        userData.map(function(User, i) {
          console.log(User);
          return <UserProfile user={User} key={i}/>
        })
      }
    </div>
  )
}

export default App;
