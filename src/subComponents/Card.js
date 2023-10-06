// import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Tilt } from "react-tilt";

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.index % 2 === 0 ? "row-reverse" : "row")};
  height: fit-content;
  width: 100%;
  color: white;
  justify-content: space-around;
  align-items: center;
  margin-top: 3rem;
`;

const Right = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div``;

const Card = (props) => {
  const { index, name, info, hostlink, githubUrl, imagePath, techStack } =
    props.data;

  return (
    <>
      <Container index={index}>
        <Left>
          <h1>{name}</h1>
          <h3>{info}</h3>
          {techStack.map((items) => {
            return (
              <div>
                <img src={items.icon} alt="" />
              </div>
            );
          })}
          <span>
            <a href={hostlink}>
              <button>See Live</button>
            </a>
            <a href={githubUrl}>
              <button>Github</button>
            </a>
          </span>
        </Left>
        <Right>
          <ImageContainer>
            <Tilt tiltMaxAngleX={0.5} tiltMaxAngleY={0.5} scale={1}>
              <img src={imagePath} width="100%" alt="" />
            </Tilt>
          </ImageContainer>
        </Right>
      </Container>
    </>
  );
};

export default Card;
