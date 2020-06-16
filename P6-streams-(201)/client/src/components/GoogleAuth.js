import React from 'react';
import {connect} from  'react-redux';
import {signIn, signOut} from '../actions';

class GoogleAuth extends React.Component{

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '66564640797-neg4v6k4r8b4nqqmdhon7uupp4icec96.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => { //finish initialization google library
        //nos devuelve auth
        this.auth = window.gapi.auth2.getAuthInstance();


        this.onAuthChange(this.auth.isSignedIn.get());

        this.auth.isSignedIn.listen(this.onAuthChange) //returns true or false, listener
      });
    });
  }

  onAuthChange = (isSignedIn) =>{
    if (isSignedIn){
      this.props.signIn(this.auth.currentUser.get().getId());
    }
    else{
      this.props.signOut();
    }
  }

  onSignInClick = () =>{
    this.auth.signIn();
  }

  onSignOutClick = () =>{
    this.auth.signOut();
  }

  renderAuthButton(){
    if(this.props.isSignedIn === null){
      return null;
    }
    else if(this.props.isSignedIn) {
      return (
      <button onClick = {this.onSignOutClick} className="ui red google button" >
        <i className="google icon" />
        Sign Out
      </button>
      );
    }
    else{
      return (
        <button onClick = {this.onSignInClick} className="ui red google button" >
          <i className="google icon" />Sign in
        </button>
      );
    }
  }

  render(){
    return <div>{this.renderAuthButton()}</div>
  }
}

const mapStateToProp = (state) => {;
  return {isSignedIn: state.auth.isSignedIn}
};

export default connect(mapStateToProp, {signIn, signOut}) (GoogleAuth);