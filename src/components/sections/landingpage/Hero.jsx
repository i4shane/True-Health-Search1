import { Stack, useColorModeValue, Button, VStack, Text, Img } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function Hero() {
  const text = useColorModeValue("#fff", "#000");

  return (
    <Stack direction={{ base: "column", md: "row" }} spacing={20}>
      <VStack align="start" spacing={8}>
        <Text fontSize={{ base: "4xl", md: "6xl" }} fontWeight="bold" color={text}>
          Unifying Medical Coding
          <br /> Knowledge, and Growth Unite to Elevate Medical Coding
          Standards!
        </Text>
        <Link href="/chat">
          <Button
            bg={"primary"}
            color={text}
            _hover={{ bg: "transparent", color: "primary", border: "2px" }}
          >
            Get Answered
          </Button>
        </Link>
      </VStack>
      <Img src="Hero.png" />
    </Stack>
  );
}

export default Hero;
