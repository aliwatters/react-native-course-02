import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardSection } from './common';
import { employeeCreate, employeeUpdate } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'mon' });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(null, { employeeUpdate, employeeCreate })(EmployeeCreate);
