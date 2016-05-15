import React from 'react';
import { Link } from 'react-router';
import MobileLayout from './MobileLayout';
import CreateAccountNav from '../components/CreateAccountNav';
import CreateAccount07Body from '../components/CreateAccount07Body';

export default class CreateAccount07 extends React.Component {
  render() {
    return (
      <MobileLayout>
        <CreateAccountNav routerstep="/CreateAccount06" />
        <CreateAccount07Body />
      </MobileLayout>
    );
  }
}