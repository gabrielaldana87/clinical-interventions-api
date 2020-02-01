import React , { Component } from 'react';
import Search from './Input/Search';
import Categories from './Categories/Categories';
import List from './List/List';

class Trials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      terms: [],
      categories: [],
      filter: null
    }
  }
  ;
  onTermEntry = value => {
    this.setState({value: value })
  }
  ;
  onCategoryFilter = (category, status) => {
    const terms = this.state.terms;
    if (!status) {
      const filter = terms.filter(o => o.category !== category);
      this.setState({
        terms: filter
      });
    } else {
      this.setState({
        terms: this.state.fullTerms
      });
    }
  }
  ;
  uniqueValues (value, i , self) {
    return self.indexOf(value) === i;
  }
  ;
  componentDidUpdate (prevProps, prevState) {
    const term = this.state.value;
    if( prevState.value !== term ) {
      const term = this.state.value;
      fetch(`/api/trials/${ term }`)
        .then(res => res.json() )
        .then( terms => this.setState({
          terms : terms ,
          fullTerms: terms,
          categories: terms.map(o => o.category ).filter( this.uniqueValues  )
        }))
    }
  }
  ;
  render () {
    const { terms , categories } = this.state;
    return (
      <div>
        <div>
          <Search
            term = { this.state.value }
            onTermEntry={ this.onTermEntry }
          />
          <Categories
            categories={ categories }
            onCategoryFilter={ this.onCategoryFilter }
          />
        </div>
        <List
          terms = { terms }
        />
      </div>
    )
  }
}

export default Trials;