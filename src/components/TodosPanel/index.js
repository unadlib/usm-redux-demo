import React, { useState } from 'react';

export default ({
  visibilityFilter,
  filters,
  list,
  setVisibility,
  addTodo,
  toggleTodo,
}) =>  {
  const [state, setState] = useState('');
  return (
    <div>
      <input value={state} onChange={e => setState(e.target.value)}/>
      <button
        onClick={() => {
          addTodo(state);
          setState('');
        }}>
        Add
      </button>
      <ul>
        {filters.map((filter, index) =>
          <li
            key={index}
            style={{color: visibilityFilter === filter ? 'red' : 'black'}}
            onClick={() => setVisibility(filter)}>
            {filter}
          </li>
        )}
      </ul>
      <ul>
        {list.map(({ text, id, completed }, index) => 
          <li
            key={index}
            style={{textDecoration: completed ? 'line-through' : ''}}
            onClick={() => toggleTodo(id)}>
            {text}
          </li>
        )}
      </ul>
    </div>
  )
}