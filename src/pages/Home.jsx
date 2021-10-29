import React, { Component } from 'react';
import styled from 'styled-components';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <HomePageStyle />
      </>
    );
  }
}
const HomePageStyle = styled.header`
  position: relative;
`;

export default Home;
