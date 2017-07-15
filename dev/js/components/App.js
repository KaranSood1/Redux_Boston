/**
 * Created by Karan on 6/20/2017.
 */

import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user_detail';
require('../../scss/style.scss');

const App = () => (
  <div>
        <h2>Username List:</h2>
      <UserList/>
        <hr/>
      <h2>User Details:</h2>
      <UserDetail/>
  </div>
);
export default App;