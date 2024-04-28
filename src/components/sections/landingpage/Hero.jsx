"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function Hero() {
  const text = useColorModeValue("#fff", "#000");

  return (
    <Box>
      <Flex
        direction={{ base: "column", lg: "row" }}
        justifyContent={{ base: "center", md: "space-evenly" }}
        alignItems={{ base: "center", md: "center" }}
        p={{ base: 5, md: 10 }}
        m={{ base: 3, md: 5 }}
        gap={{ base: "30px", lg: "25px" }}
      >
        <VStack
          justify={"center"}
          alignItems={{ base: "center", lg: "flex-start" }}
          gap={{ base: "20px", lg: "10px" }}
        >
          <Heading
            size={{ base: "2xl", md: "4xl" }}
            mb={4}
            textAlign={{ base: "center", lg: "left" }}
          >
            Get <br />
            <Box color={"primary"} as="span">
              Accurate Answers 
            </Box>
            <br />
            Faster
          </Heading>
          <Text mb={4} textAlign={{ base: "center", lg: "left" }}>
            Welcome to{" "}
            <Box as="span" color={"primary"}>
              TrueHealthSearch
            </Box>{" "}
            – Your trusted hub,
            <br /> for effortless access to up-to-date, accurate healthcare information
            
          </Text>
          <Link href={"/chat"}>
            <Button
              bg={"primary"}
              color={text}
              _hover={{ bg: "transparent", color: "primary", border: "2px" }}
            >
              Get Answered
            </Button>
          </Link>
        </VStack>
        <Img
          src="Hero.png"
          alt="Hero Image"
          boxSize={{ base: "100%", md: "auto" }}
          mb={{ base: 4, md: 0 }}
        />
      </Flex>
    </Box>
  );
}

export default Hero;
