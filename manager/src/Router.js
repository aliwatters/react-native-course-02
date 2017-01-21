import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';

import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import EmployeeList from './components/EmployeeList';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  return (
    <Router sceneStyle={globalStyles}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>
      <Scene key="main">
        <Scene
          key="employeeList"
          component={EmployeeList}
          title="Employees"
          initial
          rightTitle="Add"
          onRight={() => Actions.employeeCreate()}
        />
        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="Create Employee"
        />
        <Scene
          key="employeeEdit"
          component={EmployeeEdit}
          title="Edit Employee"
        />
      </Scene>
    </Router>
  );
};

const globalStyles = { paddingTop: 60 };

export default RouterComponent;
