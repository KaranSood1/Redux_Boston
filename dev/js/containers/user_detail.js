import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {

    render () {
        if(!this.props.user){
            return (<h1>Select a User</h1>);
        }
        return(
            <div>
                <h1>Description: {this.props.user.description}</h1>
             </div>
        );

    }
}

function mapStateToProps(state) {
 return {
     user : state.activeUser
 }
}

export default connect(mapStateToProps)(UserDetail);