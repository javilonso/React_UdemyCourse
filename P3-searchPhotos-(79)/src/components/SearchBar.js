import React from 'react';

class SearchBar extends React.Component{

  // onInputChange(event){
  //   console.log(event.target.value)
  // }

  state = {term:''};

  onFormSubmit = (event) =>{
    event.preventDefault();

    // console.log(this.state.term);  //el value this se asigna a instancia SearchBar
    this.props.onSubmit(this.state.term);
  }

  render(){
      return(
          <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
              <div className="field">
                <label>Image Search</label>
                  <input 
                  type="text" 
                  value={this.state.term} 
                  onChange ={(e)=> this.setState({term: e.target.value.toUpperCase()})} 
                  />
                  {/* onChange ={this.onInputChange} */}
              </div>
            </form>
          </div>
      ); 
  }
}

export default SearchBar;