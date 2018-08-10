import React from 'react';

const Input = props => (
  <section>
    <form onSubmit={props.onSave}>
      <input type="text" onChange={props.onChange}/>
      <input type="submit" value="Save" />
    </form>
  </section>
);

export default Input;
