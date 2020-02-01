import React , { Component } from 'react';

class Category extends Component {
  constructor (props) {
    super (props);
    this.state = {
      enabled: false
    }
  }
  ;
  onClick  = event => {
    const filter = event.currentTarget.textContent;
    this.setState({enabled: !this.state.enabled });
    this.props.onCategoryFilter(filter, this.state.enabled );
  }
  ;
  render () {
    const
      { index , value } = this.props,
      enabled = this.state.enabled,
      background = enabled  ?  'lightgrey' : 'steelblue',
      style = { background : background }
    ;
    return (
      <p
        style={ style }
        className='cat'
        key={ index }
        onClick={ this.onClick }
      >
        { value }
      </p>
    )
  }
}

export default Category;