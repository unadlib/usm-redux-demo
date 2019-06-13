import React from 'react';

export default ({ count, increase, decrease }) => 
  <div>
    <button onClick={decrease}>-</button> 
    {count}
    <button onClick={increase}>+</button> 
  </div>