import React from 'react';


class SearchBar extends React.Component {
  state = {term: ''};

  onInputChange = (event) => {
    this.setState({term: event.target.value})
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.term);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label className="font-weight-bold">Video Search</label>
            <input
            className= "form-control"
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
