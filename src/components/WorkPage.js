import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import BigTitle from "../subComponents/BigTitle";
import Card from "../subComponents/Card";
import { Work } from "../data/WorkData";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
`;

const WorkPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton theme="dark" />

        {Work.map((d) => (
          <Card key={d.id} data={d} />
        ))}

        <BigTitle text="PROJECTS" top="10%" right="10%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
