/**
 * Created by Karan on 6/20/2017.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';

class UserList extends Component {

    createListItems(){
    return this.props.users.map((user) => {
        return(
            <li key={user.id}>{user.first} {user.last}</li>
        )
    });
    }

    render (){
        return (
            <div>
                <ul>
                    {/*<li>One</li>*/}
                    {/*<li>Two</li>*/}
                    {/*<li>Three</li>*/}
                    {this.createListItems()}


                </ul>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {

}

function mapStateToProps(state) {
   return{
       users: state.users
   };
}

export default connect(mapStateToProps)(UserList);

