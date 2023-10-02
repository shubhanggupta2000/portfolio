import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import BigTitle from "../subComponents/BigTitle";
import { YinYang } from "./AllSvgs";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Main = styled.div``;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;
    const rotate = () => {
      element.style.transform = `translateY(${-window.pageYOffset}px)`;

      return (yinyang.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)");
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton theme="dark" />

        <Main>
          <Rotate ref={yinyang}>
            <YinYang width={80} height={80} fill={DarkTheme.text} />
          </Rotate>
        </Main>

        <BigTitle text="PROJECTS" top="10%" right="10%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;

// import React, { useEffect, useRef } from "react";
// import styled, { ThemeProvider } from "styled-components";
// import { DarkTheme } from "./Themes";
// import { motion } from "framer-motion";
// import LogoComponent from "../subComponents/LogoComponent";
// import SocialIcons from "../subComponents/SocialIcons";
// import PowerButton from "../subComponents/PowerButton";
// import { Work } from "../data/WorkData";
// import { YinYang } from "./AllSvgs";
// import BigTitle from "../subComponents/BigTitle";
// import { Box, Heading, Text, Flex } from "@chakra-ui/react";
// import Section from "../primitives/section";
// import TiltProps from "react-parallax-tilt";

// const BoxItem = styled.div`
//   background-color: ${(props) => props.theme.body};
//   height: 200vh;
//   position: relative;
//   display: flex;
//   align-items: center;
// `;

// const Main = styled(motion.ul)`
//   position: fixed;
//   top: 12rem;
//   left: 5%;
//   width: 90%;
//   height: 40vh;
//   display: flex;
//   color: white;

//   @media (max-width: 768px) {
//     left: 10%;
//     width: 80%;
//   }

//   @media (max-width: 480px) {
//     left: 15%;
//     width: 70%;
//   }
// `;

// const Rotate = styled.span`
//   display: block;
//   position: fixed;
//   right: 1rem;
//   bottom: 1rem;
//   width: 80px;
//   height: 80x;
//   z-index: 1;
// `;

// // Framer-motion Configuration
// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,

//     transition: {
//       staggerChildren: 0.5,
//       duration: 0.5,
//     },
//   },
// };

// const IconItem = (props) => {
//   return (
//     <div
//       key={`${props.name}-${props.index}`}
//       className="skill_item"
//       draggable={true}
//       style={{ margin: "10px" }}
//     >
//       {React.createElement(props.icon, props.options)}
//       <div className="skill_description">
//         <h2>{props.name}</h2>
//       </div>
//     </div>
//   );
// };

// const WorkPage = () => {
//   const ref = useRef(null);
//   const yinyang = useRef(null);

//   useEffect(() => {
//     let element = ref.current;

//     const rotate = () => {
//       element.style.transform = `translateY(${-window.pageYOffset}px)`;

//       return (yinyang.current.style.transform =
//         "rotate(" + -window.pageYOffset + "deg)");
//     };

//     window.addEventListener("scroll", rotate);
//     return () => {
//       window.removeEventListener("scroll", rotate);
//     };
//   }, []);

//   return (
//     <ThemeProvider theme={DarkTheme}>
//       <BoxItem>
//         <LogoComponent theme="dark" />
//         <SocialIcons theme="dark" />
//         <PowerButton />

//         <Main ref={ref} animate="show" >
//           <Flex flexDirection="column" position={"absolute"} left={48}>
//             {Work.map(
//               (project, index) =>
//                 project.name && (
//                   <Section key={index}>
//                     <Box
//                       display={"flex"}
//                       flexDirection="column"
//                       justifyContent="center"
//                       mb={36}
//                     >
//                       {
//                         <Flex
//                           flexDirection={[
//                             "column",
//                             index % 2 === 0 ? "row" : "row-reverse",
//                           ]}
//                           justifyContent="center"
//                           alignItems="center"
//                         >
//                           <TiltProps tiltMaxAngleX={5} tiltMaxAngleY={5}>
//                             <Box
//                               mx={8}
//                               borderRadius="20px"
//                               overflow="hidden"
//                               w={{ lg: "45vw", sm: "100vw" }}
//                             >
//                               <img
//                                 src={project.imagePath}
//                                 alt="project"
//                                 height={313}
//                                 width={556}
//                               />
//                             </Box>
//                           </TiltProps>
//                           <Flex
//                             flexDirection="column"
//                             justifyContent="center"
//                             alignItems="center"
//                             marginX={20}
//                           >
//                             <Heading
//                               as="h2"
//                               fontSize="2em"
//                               mb={0}
//                               mt={{ md: 8 }}
//                             >
//                               {project.name}
//                             </Heading>
//                             <Text textAlign="center" my={6} fontSize="1em">
//                               {project.info}
//                             </Text>

//                             <Box display={["flex"]}>
//                               {project.techStack.map(
//                                 ({ name, icon, options, index }) => {
//                                   return (
//                                     <IconItem
//                                       key={index}
//                                       icon={icon}
//                                       options={options}
//                                       name={name}
//                                       index={index}
//                                     ></IconItem>
//                                   );
//                                 }
//                               )}
//                             </Box>

//                             <Flex>
//                               {project.hostlink ? (
//                                 <a
//                                   href={project.hostlink}
//                                   target="_blank"
//                                   rel="noreferrer"
//                                   style={{
//                                     marginRight: "16px", // Adjust the margin as needed
//                                     textDecoration: "none",
//                                   }}
//                                 >
//                                   <button
//                                     style={{
//                                       borderRadius: "5px",
//                                       backgroundColor: "#e7e7e7",
//                                       color: "black", // Text color for the button
//                                       border: "none",
//                                       padding: "8px 16px", // Adjust padding as needed
//                                       cursor: "pointer",
//                                     }}
//                                   >
//                                     Hostlink
//                                   </button>
//                                 </a>
//                               ) : (
//                                 ""
//                               )}

//                               <a
//                                 href={project.githubUrl}
//                                 target="_blank"
//                                 rel="noreferrer"
//                                 style={{
//                                   textDecoration: "none",
//                                 }}
//                               >
//                                 <button
//                                   style={{
//                                     borderRadius: "5px",
//                                     backgroundColor: "#e7e7e7",
//                                     color: "black", // Text color for the button
//                                     border: "none",
//                                     padding: "8px 16px", // Adjust padding as needed
//                                     cursor: "pointer",
//                                   }}
//                                 >
//                                   Code
//                                 </button>
//                               </a>
//                             </Flex>
//                           </Flex>
//                         </Flex>
//                       }
//                     </Box>
//                   </Section>
//                 )
//             )}
//           </Flex>
//         </Main>
//         <Rotate ref={yinyang}>
//           <YinYang width={80} height={80} fill={DarkTheme.text} />
//         </Rotate>
//       </BoxItem>
//       <BigTitle text="PROJECTS" top="10%" right="20%" />
//     </ThemeProvider>
//   );
// };

// export default WorkPage;
