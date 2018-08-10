import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
    this.state = { input: '' };
  }

  onChange(e) {
    const input = e.target.value;
    this.setState({ input });
  }

  onSave(e) {
    e.preventDefault();
    this.state.input.length > 0 ? this.props.onSave(this.state.input) : false;
    this.setState({ input: '' });
  }

  render() {
    return (
      <section>
        <form onSubmit={this.onSave}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.onChange}
          />
          <input type="submit" value="Save" />
        </form>
      </section>
    );
  }
}

export default Input;
