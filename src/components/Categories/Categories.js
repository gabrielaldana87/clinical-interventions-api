import React , { Component } from 'react';
import Category from './Category';

class Categories extends Component {
  constructor (props) {
    super(props);
    this.state = {
      enabled: false
    }
  }
  ;
  render () {
    const
      { categories , onCategoryFilter } = this.props
    ;
    return  (
      <div className='category-selection-box'>
        { categories.map( (o,index) => (
          <Category
            className='cat'
            key={ index }
            onClick={ this.onClick }
            value={ o }
            onCategoryFilter={ onCategoryFilter }
          />
        ))
        }
      </div>
    )
  }

}

export default Categories;