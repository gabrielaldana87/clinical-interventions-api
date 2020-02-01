import React , { Component } from 'react';

class Card extends Component {
  constructor (props) {
    super (props);
    this.state ={
    }
  }
  ;
  render () {
    const {
      name,
      codes,
      synonyms,
      category,
      count
    } = this.props.intervention ;
    return(
      <div
        className = 'card-title'
        style={{
          background: 'grey',
          color: 'black'
        }}
      >
        <div className='text-identifier'>
          <span className='title-header' style={{ background: 'lightgrey '}}>
            <span className='fullname'><strong> { name } </strong></span>
          </span>
          <br></br>
          <div className='context'>
            <span><strong>Codes:</strong>&nbsp;{ codes }</span>
            <br></br>
            <span><strong>Synonyms:</strong>&nbsp;{ synonyms }</span>
            <br></br>
            <span><strong>Category:</strong>&nbsp;<strong>{ category }</strong></span>
            <br></br>
            <strong>Count:</strong>&nbsp;{ count }
          </div>
        </div>
        <div
          className='card-title-html'
        />
      </div>
    )
  }
}

export default Card;