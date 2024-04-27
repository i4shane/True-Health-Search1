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
          Explore our curated educational resources, offering in-depth articles
          and guides to enhance your coding expertise. Need real-time
          assistance? Our cutting-edge AI tool is here to unravel complexities
          and provide instant clarity.
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
          {" "}
          <CardBody>
            <Img src="search.png" borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md" color={text} px={3}>
                Comprehensive Search
              </Heading>
              <Text px={3}>
                Explore our extensive medical coding database. Type your query,
                and let our AI fetch the latest, relevant information for you
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW="sm" borderRadius={10} p={4} boxShadow={"md"}>
          {" "}
          <CardBody>
            <Img src="resource.png" borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md" color={text} px={3}>
                Comprehensive Search
              </Heading>
              <Text px={3}>
                Explore our extensive medical coding database. Type your query,
                and let our AI fetch the latest, relevant information for you
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW="sm" borderRadius={10} p={4} boxShadow={"md"}>
          {" "}
          <CardBody>
            <Img src="ai.png" borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md" color={text} px={3}>
                Comprehensive Search
              </Heading>
              <Text px={3}>
                Explore our extensive medical coding database. Type your query,
                and let our AI fetch the latest, relevant information for you
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </Box>
  );
}

export default WeOffer;
