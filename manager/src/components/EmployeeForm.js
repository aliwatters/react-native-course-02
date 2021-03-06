import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import {connect} from 'react-redux';

import { CardSection, Input } from './common';
import { employeeUpdate, employeeDelete } from '../actions';

class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="first name"
            value={this.props.name}
            onChangeText={
              value => this.props.employeeUpdate({ prop: 'name', value })
            }
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="(123)-123-1234"
            value={this.props.phone}
            onChangeText={
              value => this.props.employeeUpdate({ prop: 'phone', value })
            }
          />
        </CardSection>
        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerLabel}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={
              value => this.props.employeeUpdate({ prop: 'shift', value })
            }
          >
            <Picker.Item label="Monday" value="mon" />
            <Picker.Item label="Tuesday" value="tue" />
            <Picker.Item label="Wednesday" value="wed" />
            <Picker.Item label="Thursday" value="thu" />
            <Picker.Item label="Friday" value="fri" />
            <Picker.Item label="Saturday" value="sat" />
            <Picker.Item label="Sunday" value="sun" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerLabel: { fontSize: 18, paddingLeft: 20, marginBottom: 5 }
};

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};


export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);
