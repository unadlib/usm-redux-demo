import React from 'react';

export default ({ count, increase, decrease }) => 
  <div>
    <button onClick={increase}>+</button> 
    {count}
    <button onClick={decrease}>+</button> 
  </div>