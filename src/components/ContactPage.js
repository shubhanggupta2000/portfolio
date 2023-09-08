import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import AnchorComponent from "../subComponents/Anchor";
import BigTitle from "../subComponents/BigTitle";
import { motion } from "framer-motion";
import {
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import {
  BsGithub,
  BsPerson,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsFacebook,
} from "react-icons/bs";

const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;
const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  height: auto;

  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const ContactPage = () => {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
  }, []);

  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 },
  };

  return (
    <MainContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
    >
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <AnchorComponent number={numbers} />
        <Center>
          <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: "easeInOut" }}
          >
            <Container
              maxW="container.xl"
              mt={0}
              centerContent
              overflow="hidden"
            >
              <Flex>
                <Box
                  borderRadius="lg"
                  m={{ sm: 4, md: 16, lg: 10 }}
                  p={{ sm: 5, md: 5, lg: 16 }}
                >
                  <Box p={4}>
                    <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                      <WrapItem>
                        <Box>
                          <Heading as="h1" variants="section-title">
                            Contact
                          </Heading>
                          <Text mt={{ sm: 5, md: 8, lg: 10 }}>
                            Fill the below form to connect
                          </Text>
                          <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                            <Flex
                              flexDirection="column"
                              pl={1}
                              spacing={10}
                              alignItems="flex-start"
                              justifyContent="flex-start"
                            >
                              <Button
                                size="md"
                                height="50px"
                                width="300px"
                                variant="ghost"
                                justifyContent="flex-start"
                                padding="10px"
                                leftIcon={<MdPhone size="20px" />}
                              >
                                +91-7976224204
                              </Button>
                              <Button
                                height="50px"
                                width="300px"
                                justifyContent="flex-start"
                                padding="10px"
                                leftIcon={<MdEmail size="20px" />}
                              >
                                guptashubhang2000@gmail.com
                              </Button>
                              <Button
                                height="50px"
                                width="300px"
                                justifyContent="flex-start"
                                padding="10px"
                                leftIcon={<MdLocationOn size="20px" />}
                              >
                                Jaipur, Rajasthan
                              </Button>
                            </Flex>
                          </Box>
                          <HStack
                            mt={{ lg: 10, md: 10 }}
                            spacing={20}
                            px="auto"
                            py={10}
                            alignItems="flex-start"
                          >
                            <a
                              target="_blank"
                              href="https://www.linkedin.com/in/shubhang-gupta-a081ab201/"
                              rel="noopener noreferrer"
                            >
                              <IconButton
                                aria-label="linkedin"
                                variant="ghost"
                                size="lg"
                                isRound={true}
                                icon={<BsLinkedin size="28px" />}
                              />
                            </a>
                            <a
                              target="_blank"
                              href="https://github.com/shubhanggupta2000"
                              rel="noopener noreferrer"
                            >
                              <IconButton
                                aria-label="github"
                                variant="ghost"
                                size="lg"
                                isRound={true}
                                icon={<BsGithub size="28px" />}
                              />
                            </a>
                            <a
                              target="_blank"
                              href="https://twitter.com/ShubhangGupta13"
                              rel="noopener noreferrer"
                            >
                              <IconButton
                                aria-label="twitter"
                                variant="ghost"
                                size="lg"
                                isRound={true}
                                icon={<BsTwitter size="28px" />}
                              />
                            </a>
                            <a
                              target="_blank"
                              href="https://www.facebook.com/shubhang.agarwal.71"
                              rel="noopener noreferrer"
                            >
                              <IconButton
                                aria-label="facebook"
                                variant="ghost"
                                size="lg"
                                isRound={true}
                                icon={<BsFacebook size="28px" />}
                              />
                            </a>
                            <a
                              target="_blank"
                              href="https://www.instagram.com/guptashubhang2000/"
                              rel="noopener noreferrer"
                            >
                              <IconButton
                                aria-label="Instagram"
                                variant="ghost"
                                size="lg"
                                isRound={true}
                                icon={<BsInstagram size="28px" />}
                              />
                            </a>
                          </HStack>
                        </Box>
                      </WrapItem>
                      <WrapItem>
                        <Box bg="white" borderRadius="lg">
                          <Box m={8}>
                            <VStack spacing={5}>
                              <FormControl id="name">
                                <FormLabel>Your Name</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                  <InputLeftElement pointerEvents="none">
                                    <BsPerson color="gray.800" />
                                  </InputLeftElement>
                                  <Input type="text" size="md" />
                                </InputGroup>
                              </FormControl>
                              <FormControl id="name">
                                <FormLabel>Mail</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                  <InputLeftElement pointerEvents="none">
                                    <MdOutlineEmail color="gray.800" />
                                  </InputLeftElement>
                                  <Input type="text" size="md" />
                                </InputGroup>
                              </FormControl>
                              <FormControl id="name">
                                <FormLabel>Message</FormLabel>
                                <Textarea
                                  borderColor="gray.300"
                                  _hover={{ borderRadius: "gray.300" }}
                                  placeholder="message"
                                />
                              </FormControl>
                              <FormControl id="name" float="right">
                                <Button variant="solid">Send Message</Button>
                              </FormControl>
                            </VStack>
                          </Box>
                        </Box>
                      </WrapItem>
                    </Wrap>
                  </Box>
                </Box>
              </Flex>
            </Container>
          </motion.div>
        </Center>
        <BigTitle text="CONTACT" top="5rem" left="5rem" />
      </Container>
    </MainContainer>
  );
};

export default ContactPage;
