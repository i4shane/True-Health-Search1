"use client";

import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Img,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function WeOffer() {
  const text = useColorModeValue("#014DB0", "#fff");

  return (
    <Box bg={"rgb(3, 96, 217, 16%)"} pb={"50px"}>
      <VStack
        textAlign={"center"}
        p={{ base: 5, md: 10 }}
        m={{ base: 3, md: 5 }}
        alignItems={"center"}
        justifyContent={"center"}
        gap={{ base: "30px", lg: "25px" }}
      >
        <Heading color={"primary"}>Our Features</Heading>
        <Text mb={4} w={"80%"}>
          True Health Search is your ultimate ally in navigating the complexities of medical coding. Our AI-powered platform offers a seamless, intuitive experience that adapts to your needs. Say goodbye to time-consuming searches and hello to instant, accurate answers. With our comprehensive educational resources and real-time AI assistance, you'll gain the knowledge and confidence to excel in your role.
        </Text>
      </VStack>
      <Flex
        justifyContent={"space-evenly"}
        alignItems={"center"}
        p={5}
        px={{ base: "", md: 20 }}
        flexDirection={{ base: "column", md: "row" }}
        gap={30}
      >
        <Card maxW="sm" borderRadius={10} p={4} boxShadow={"md"}>
          <CardBody>
            <Img src="search.png" borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md" color={text} px={3}>
                Unparalleled Accuracy
              </Heading>
              <Text px={3}>
                True Health Search's cutting-edge AI technology ensures you always have access to the most precise and current medical coding information. Make decisions with unwavering confidence, knowing our platform is your reliable partner.
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW="sm" borderRadius={10} p={4} boxShadow={"md"}>
          <CardBody>
            <Img src="resource.png" borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md" color={text} px={3}>
                Comprehensive Resources
              </Heading>
              <Text px={3}>
                Unlock a wealth of knowledge with our extensive library of clinical calculators, CDI tip sheets, and lab values tables. These carefully curated resources are at your fingertips, empowering you to work smarter, not harder.
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW="sm" borderRadius={10} p={4} boxShadow={"md"}>
          <CardBody>
            <Img src="ai.png" borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md" color={text} px={3}>
                Intuitive Chat UI
              </Heading>
              <Text px={3}>
                Our user-friendly chat interface is designed to integrate effortlessly into your workflow. Ask questions in natural language and receive instant, trustworthy answers, allowing you to focus on what matters most: delivering exceptional patient care.
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </Box>
  );
}

export default WeOffer;
