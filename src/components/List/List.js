import React , { Component } from 'react';
import Card from './Card';

class List extends Component {
  constructor (props) {
    super(props);
  }
  ;
  render () {
    const { terms } = this.props;
    return (
      <div className='list-wrapper'>
        <div className='list'>
          <div className='header-wrap'>
          </div>
          <div className='cards-wrapper'>
            { terms ? (
              terms.map((o,i) => (
                <Card
                  key = { i }
                  intervention = { o }
                 />
              ))
            ) : null
            }
          </div>
        </div>
      </div>
    )
  }
}

export default List;