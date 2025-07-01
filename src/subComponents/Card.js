import React from "react";
import styled from "styled-components";
import Parallax from "react-parallax-tilt";

const MainContainer = styled.div`
  margin: 4%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.$index % 2 === 0 ? "row-reverse" : "row"};
  height: fit-content;
  width: 100%;
  color: white;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Right = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 2.2rem;
    margin-bottom: 0.5em;
    @media (max-width: 900px) {
      font-size: 1.5rem;
    }
    @media (max-width: 600px) {
      font-size: 1.2rem;
    }
  }

  h3 {
    font-size: 1.1rem;
    @media (max-width: 900px) {
      font-size: 1rem;
    }
    @media (max-width: 600px) {
      font-size: 0.7rem;
    }
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: white;
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s, color 0.2s, font-size 0.2s, padding 0.2s;

  &:hover {
    background-color: black;
    color: white;
  }

  @media (max-width: 900px) {
    font-size: 0.9rem;
    padding: 8px 16px;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
`;

const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px 10px;

  @media (max-width: 800px) {
    justify-content: center;
  }
`;

const TechStackItem = styled.div`
  background-color: white;
  color: black;
  border-radius: 5px;
  padding: 5px 10px;
  display: flex;
  align-items: center;

  svg {
    // width: 2.5rem;
    // height: auto;
    margin: 0 2px;
    transition: width 0.2s;
  }

  @media (max-width: 900px) {
    svg {
      width: 2rem;
    }
  }

  @media (max-width: 600px) {
    svg {
      width: 1.5rem;
    }
  }
`;

const Card = (props) => {
  const { index, name, info, hostlink, githubUrl, imagePath, techStack } =
    props.data;
  return (
    <MainContainer>
      <Container $index={index}>
        <Right>
          <Parallax tiltMaxAngleX={15} tiltMaxAngleY={10}>
            <img
              src={imagePath}
              width="100%"
              alt=""
              style={{ borderRadius: "10px" }}
            />
          </Parallax>
        </Right>
        <Left>
          <h1>{name}</h1>
          <h3>{info}</h3>
          <TechStackContainer>
            {techStack.map((item, index) => {
              return (
                <TechStackItem key={index}>
                  {item.icon && <item.icon {...item.options} />}
                </TechStackItem>
              );
            })}
          </TechStackContainer>
          <ButtonsContainer>
            <a href={hostlink}>
              <Button>Check out</Button>
            </a>
            <a href={githubUrl}>
              <Button>Code</Button>
            </a>
          </ButtonsContainer>
        </Left>
      </Container>
    </MainContainer>
  );
};

export default Card;
