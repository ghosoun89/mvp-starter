import React from 'react';

const ListItem = (props) => (
  <div>
    { props.item.name :
    props.item.price }
  </div>
)

export default ListItem;