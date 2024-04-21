"use client";
import {
  Box,
  Heading,
  Text,
  VStack,
  Img,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

function About() {
  const text = useColorModeValue("#014DB0", "#fff");

  return (
    <Box>
      <Flex
        direction={{ base: "column", lg: "row" }}
        justifyContent={{ base: "center", md: "center" }}
        alignItems={{ base: "center", md: "center" }}
        p={{ base: 5, md: 10 }}
        m={{ base: 3, md: 5 }}
        gap={{ base: "30px", lg: "" }}
      >
        <VStack
          justify={"center"}
          w={{ lg: "50%" }}
          alignItems={{ base: "center", lg: "flex-start" }}
          gap={{ base: "20px", lg: "10px" }}
        >
          <Heading
            size={{ base: "2xl", md: "4xl" }}
            mb={4}
            color={"primary"}
            textAlign={{ base: "center", lg: "left" }}
          >
            About Us
          </Heading>
          <Text
            mb={4}
            fontSize={{ base: "md", md: "xl" }}
            w={{ base: "100%", md: "80%" }}
            textAlign="justify"
          >
            At{" "}
            <Box as="span" color={"primary"}>
              TrueHealthSearch
            </Box>
            , we're dedicated to simplifying the complexities of medical coding. Our platform serves as a comprehensive resource hub, offering users access to a vast database of accurate and up-to-date information. Whether you're a seasoned professional or just starting, our AI-powered tools are designed to assist you in navigating and decoding intricate coding scenarios.
          </Text>
        </VStack>
        <Img
          src="about.png"
          alt="About Image"
          boxSize={{ base: "100%", md: "auto" }}
          mb={{ base: 4, md: 0 }}
        />
      </Flex>
    </Box>
  );
}

export default About;
