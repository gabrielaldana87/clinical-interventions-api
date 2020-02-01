import React , { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  ;
  handleSubmit = (evt) => {
    this.props.onTermEntry( this.state.value );
    evt.preventDefault();
  }
  ;
  handleChange = (evt) => {
    this.setState({ value: evt.target.value });
  }
  ;
  render () {
    return (
      <form>
        <label>
          Search Term
          <input
            type='text'
            onChange={ this.handleChange }
          />
          </label>
        <input
          type='submit'
          value='Submit'
          onClick={ this.handleSubmit }
        />
      </form>
    )
  }
}

export default Search;