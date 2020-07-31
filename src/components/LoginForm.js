import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import CardSection from './common/CardSection';
import Card from './common/Card';
import Input from './common/Input';
import Button from './common/Button';

import { emailChange, passwordChange, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChange(text);
  }

  onPasswordChange(text) {
    this.props.passwordChange(text);
  }
  onButtonPress() {
    const { email, password, error } = this.props;
    this.props.loginUser({ email, password });
  }

  render() {
    const { error } = this.props;

    return (
      <View style={{ paddingTop: 50 }}>
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="email@email.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>
          <CardSection>
            <Input
              secureText
              label="Password"
              placeholder="password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>
          {error ? (
            <Text style={{ fontSize: 16, color: 'red', margin: 5, alignSelf: 'center' }}>
              ** {error}
            </Text>
          ) : null}
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Login
            </Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
  };
};

export default connect(mapStateToProps, { emailChange, passwordChange, loginUser })(LoginForm);
