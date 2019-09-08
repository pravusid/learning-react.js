import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onInputChage(term) {
    this.setState({ term });
    this.props.onSearchTermChage(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={evt => this.onInputChage(evt.target.value)}
        />
      </div>
    )
  }
}

export default SearchBar;
