import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from '../Navigation';

export class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <HeaderStyle>
        <Navigation />
      </HeaderStyle>
    );
  }
}

const HeaderStyle = styled.div`
  background-color: var(--background-dark-color);
  color: var(--background-light-color);
  position: fixed;
  width: 16.3rem;
  height: 100vh;
`;

export default Header;
