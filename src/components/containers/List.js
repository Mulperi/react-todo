import React from 'react';
import Item from './../presentational/Item';

const List = props => (
    <div>
        {props.items.map(item => (<Item item={item} key={item.id} delete={props.onDelete} />))}
    </div>
);

export default List;
