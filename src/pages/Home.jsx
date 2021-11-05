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
          <ConstentTitle>
            <Titleh1>
              welcome to my portfolio
            </Titleh1>
            <Subtitle>
              Seja bem vindo ao meu portifólio aqui tem alguns dos projetos que
              desenvolvi ou estão em desenvolvimento
            </Subtitle>
          </ConstentTitle>

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

const ConstentTitle = styled.div`
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

const Titleh1 = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2rem;
`;

const Subtitle = styled.p`
  margin-top: 2rem;
  text-align: center;
  font-size: 1rem ;
  width: 75%; 
  margin-left: auto;
  margin-right: auto;
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
