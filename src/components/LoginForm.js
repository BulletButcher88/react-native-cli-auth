import React, { Component } from 'react';
import { Text, View } from 'react-native';
import CardSection from './common/CardSection';
import Card from './common/Card';
import Input from './common/Input';
import Button from './common/Button';

class LoginForm extends Component {
  render() {
    return (
      <View style={{ paddingTop: 50 }}>
        <Card>
          <CardSection>
            <Input label="Email" placeholder="email@email.com" />
          </CardSection>
          <CardSection>
            <Input secureText label="Password" placeholder="password" />
          </CardSection>
          <CardSection>
            <Button>
              Login
          </Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

export default LoginForm;
