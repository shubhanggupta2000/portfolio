// import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: fit-content;
  width: 100%;
  color: white;
  justify-content: space-around;
  align-items: center;
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

// Framer motion configuration
// const Item = {
//   hidden: {
//     scale: 0,
//   },
//   show: {
//     scale: 1,
//     transition: {
//       type: "spring",
//       duration: 0.5,
//     },
//   },
// };

const Card = (props) => {
  const { index, name, info, hostlink, githubUrl, imagePath } = props.data;

  return (
    <>
      <Container>
        <Left>
          <h1>{name}</h1>
          <h3>{info}</h3>
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
          <img src={imagePath} width="100%" alt="" />
        </Right>
      </Container>
    </>
  );
};

export default Card;
