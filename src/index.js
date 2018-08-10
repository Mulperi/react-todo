import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/presentational/Header';
import List from './components/containers/List';
import Input from './components/presentational/Input';

import './styles/styles.scss';

const items = [
  { title: 'Eka', id: 1 },
  { title: 'Toka', id: 2 },
  { title: 'Kolkki', id: 3 }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items, input: '' };

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

ReactDOM.render(<App />, document.getElementById('react-app'));
