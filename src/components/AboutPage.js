import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";
import astronaut from "../assets/Images/spaceman.png";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
  0% { transform: translateY(-10px) }
  50% { transform: translateY(15px) translateX(15px) }
  100% { transform: translateY(-10px) }
`;

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  z-index: 3;
  line-height: 1.5;
  display: inline-block;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  word-wrap: break-word;

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>

        <Main>
          I'm a full stack developer based in India with a passion for crafting
          elegant and user-centric websites. My expertise covers the entire
          spectrum of web development, particularly within the frontend domain.
          <br /> <br />
          As an independent developer, I am eager to collaborate with
          opportunities that align with my skills and vision. I am currently in
          the early stages of my journey into the world of blogging, which you
          can find on Medium. When I'm not immersed in the digital world, I
          enjoy watching films, playing basketball, and contemplating the
          complexities of existence.
          <br /> <br />I believe that every endeavor becomes an art form when
          approached with mindfulness. You can reach out to me through my social
          media profiles. I eagerly anticipate the exchange of ideas and
          experiences.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
