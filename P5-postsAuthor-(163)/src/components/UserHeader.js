import React from 'react';
import {connect} from 'react-redux';

class UserHeader extends React.Component{

  render(){
    // const user = this.props.user;
    const {user} = this.props;

    if(!user){
      return null;
    }

    return (
       <div className="header"> A {user.name} </div>
    );
  }
}

const mapStateToProp = (state, ownProps) => {
  return {user: state.users.find(user => user.id === ownProps.userId)};
}

export default connect(mapStateToProp) (UserHeader);