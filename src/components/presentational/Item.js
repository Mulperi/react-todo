import React from 'react';

const Item = props => (
  <div>
    {props.item.title}
    <button
      onClick={() => {
        props.delete(props.item.id);
      }}
    >&times;</button>
  </div>
);

export default Item;
