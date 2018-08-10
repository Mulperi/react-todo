import React from 'react';

import Header from '../presentational/Header';
import List from './List';
import Input from '../presentational/Input';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: this.props.items, input: '' };

    this.onSave = this.onSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const input = event.target.value;

    this.setState(prevState => ({
      input
    }));
  }

  onDelete(id) {
    const deleted = id;
    this.setState(prevState => ({
      items: [...prevState.items.filter(item => item.id != deleted)]
    }));
  }

  onSave(event) {
    event.preventDefault();
    this.setState(prevState => ({
      items: [
        ...prevState.items,
        { title: this.state.input, id: this.state.items.length + 1 }
      ]
    }));
  }

  render() {
    return (
      <main>
        <Header />
        <Input onSave={this.onSave} onChange={this.onChange} />
        <List items={this.state.items} onDelete={this.onDelete} />
      </main>
    );
  }
}

export default App;
