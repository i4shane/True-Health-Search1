import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  VStack,
  Heading,
  Flex,
} from "@chakra-ui/react";
import React from "react";

function FAQSection() {
  const faqs = [
    {
      question: "How reliable is the information on TrueHealthSearch.com?",
      answer: "Our content is sourced from trusted, authoritative sources and regularly updated to ensure accuracy and relevance.",
    },
    {
      question: "Is my personal information secure on your platform?",
      answer: "Yes, we take data privacy seriously. We never share your personal information with third parties.",
    },
    {
      question: "Can I access TrueHealthSearch.com on my mobile device?",
      answer: "Absolutely! Our platform is fully optimized for mobile, so you can access the information you need on the go.",
    },
  ];
  
  return (
    <Box pb={"50px"}>
      <VStack
        textAlign={"center"}
        p={{ base: 5, md: 10 }}
        m={{ base: 3, md: 5 }}
        alignItems={"center"}
        justifyContent={"center"}
        gap={{ base: "30px", lg: "25px" }}
      >
        <Heading>Frequently Asked Questions</Heading>
        <Text mb={4} w={"80%"}>
          Got questions? Find quick answers to our most common questions
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
        <VStack align="center" spacing={4} w="100%">
          <Accordion allowMultiple>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} spacing={4}>
                {" "}
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" ml={2} mr={3}>
                      {" "}
                      <Text fontWeight="bold" fontSize="xl">
                        {faq.question}
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  <Text fontSize="lg">{faq.answer}</Text>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </VStack>
      </Flex>
    </Box>
  );
}

export default FAQSection;
