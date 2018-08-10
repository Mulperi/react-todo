import React from 'react';

import Header from '../presentational/Header';
import List from './List';
import Input from '../presentational/Input';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: this.props.items };

    this.onSave = this.onSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(id) {
    const deleted = id;
    this.setState(prevState => ({
      items: [...prevState.items.filter(item => item.id != deleted)]
    }));
  }

  onSave(item) {
    const title = item;
    this.setState(prevState => ({
      items: [
        ...prevState.items,
        { title, id: this.state.items.length + 1 }
      ]
    }));
  }

  render() {
    return (
      <main>
        <Header />
        <div className="content">
            <Input onSave={this.onSave} onChange={this.onChange} />
            <List items={this.state.items} onDelete={this.onDelete} />
        </div>
      </main>
    );
  }
}

export default App;
