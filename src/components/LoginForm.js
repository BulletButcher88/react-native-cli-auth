import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import CardSection from './common/CardSection';
import Card from './common/Card';
import Input from './common/Input';
import Button from './common/Button';
import Spinner from './common/Spinner';

import { emailChange, passwordChange, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChange(text);
  }

  onPasswordChange(text) {
    this.props.passwordChange(text);
  }
  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
  }

  render() {
    const { email, password, error } = this.props;

    return (
      <View>
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="email@email.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={email}
            />
          </CardSection>
          <CardSection>
            <Input
              secureText
              label="Password"
              placeholder="password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={password}
            />
          </CardSection>
          {error ? (
            <Text style={{ fontSize: 16, color: 'red', margin: 5, alignSelf: 'center' }}>
              ** {error}
            </Text>
          ) : null}
          <CardSection>{this.renderButton()}</CardSection>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return {
    email,
    password,
    error,
    loading,
  };
};

export default connect(mapStateToProps, { emailChange, passwordChange, loginUser })(LoginForm);
