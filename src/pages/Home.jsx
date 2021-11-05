import React, { Component } from 'react';
import styled from 'styled-components';
import Video from '../videos/bk-home.mp4';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <HomePageStyle>
          <TitleHome>
            <h1>
              welcome to my profile
            </h1>
          </TitleHome>

          <Videohome>
            <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
          </Videohome>
        </HomePageStyle>

      </>
    );
  }
}
const HomePageStyle = styled.main`
  color: var(--background-light-color);
  display: flex;
  width: 100%;
  justify-content: center;
  `;

const TitleHome = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: var(--background-dark-color-A);
  overflow: hidden;
  z-index: 2;
`;

const Videohome = styled.div`
  position: absolute;
  /* width: 100vw; */
  height: 100%;
`;

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default Home;
