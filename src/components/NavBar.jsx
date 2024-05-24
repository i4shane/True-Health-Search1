"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Link,
  useColorModeValue,
  SimpleGrid,
  IconButton,
  useColorMode,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Spacer,
  Avatar,
  Tooltip,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Portal, // Add this line
} from "@chakra-ui/react";
import "@fontsource/ibm-plex-sans/400.css";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import { useUser } from "@auth0/nextjs-auth0/client";

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);

  const background = useColorModeValue("#fff", "#1A202C");

  const handleDrawerToggle = () => {
    setIsOpen(!isOpen);
  };
  const { user, error, isLoading } = useUser();

  return (
    <>
      <Box paddingY={5}>
        <Container maxW={1400} fontFamily={"nav"}>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Box
              minWidth={"150px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <h2>True Health Search</h2>
            </Box>

            <Flex
              gap={10}
              placeItems={"center"}
              display={{ base: "none", md: "flex" }}
            >
              <Box>
                <Link
                  display={"flex"}
                  flexDir={"column"}
                  href="/"
                  justifyItems={"center"}
                  alignItems={"center"}
                  _hover={{
                    color: "primary",
                    fontWeight: 600,
                    "& .link-circle": { display: "block" },
                  }}
                >
                  Home
                  <div className="link-circle" />
                </Link>
              </Box>
              <Box>
                <Link
                  display={"flex"}
                  flexDir={"column"}
                  justifyItems={"center"}
                  alignItems={"center"}
                  _hover={{
                    fontWeight: 600,
                    color: "primary",
                    "& .link-circle": { display: "block" },
                  }}
                >
                  Services
                  <div className="link-circle" />
                </Link>
              </Box>
              <Box>
                <Link
                  display={"flex"}
                  flexDir={"column"}
                  justifyItems={"center"}
                  alignItems={"center"}
                  _hover={{
                    fontWeight: 600,
                    color: "primary",
                    "& .link-circle": { display: "block" },
                  }}
                >
                  About
                  <div className="link-circle" />
                </Link>{" "}
              </Box>
              <Box>
                <Link
                  display={"flex"}
                  flexDir={"column"}
                  justifyItems={"center"}
                  href="/pricing"
                  alignItems={"center"}
                  _hover={{
                    color: "primary",
                    fontWeight: 600,
                    "& .link-circle": { display: "block" },
                  }}
                >
                  Pricing
                  <div className="link-circle" />
                </Link>{" "}
              </Box>
            </Flex>
            <Box>
              <Flex gap={5} justifyContent={"flex-end"} fontWeight={"600"}>
                <IconButton
                  icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
                  size={"md"}
                  isRound={true}
                  onClick={toggleColorMode}
                />

                {user ? (
                  <>
                    <Popover>
                      <PopoverTrigger>
                        <Avatar
                          mt={1}
                          size="sm"
                          name={user.name}
                          src={user.picture}
                          borderRadius="full"
                        />
                      </PopoverTrigger>
                      <Portal>
                        <PopoverContent>
                          <PopoverArrow />
                          <PopoverBody>
                            <h2>{user.name}</h2>
                            <h2>{user.email}</h2>
                          </PopoverBody>
                          <PopoverFooter>
                            <Link href="/api/auth/logout">
                              <Button
                                w="100%"
                                bg={"primary"}
                                borderRadius={"50px"}
                                px={5}
                                _hover={{ bg: "primary" }}
                                size={"md"}
                                color={background}
                              >
                                Log Out
                              </Button>
                            </Link>
                          </PopoverFooter>
                        </PopoverContent>
                      </Portal>
                    </Popover>
                  </>
                ) : (
                  <>
                    <Link href="/api/auth/login">
                      <Button
                        display={{ base: "none", md: "block" }}
                        borderRadius={"50px"}
                        size={"md"}
                        px={5}
                        border={`2px solid`}
                        borderColor={"primary"}
                        color={"primary"}
                        bg={background}
                      >
                        Log in
                      </Button>
                    </Link>

                    <Link href="https://dev-m6c1jticnvbj81k5.us.auth0.com/u/signup?state=hKFo2SBjaS1qY3IycXRGcTlOc1V4cld2YlJIZjh6aUtjSnhQRKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIG9HdTBZWXg2Zk1EcGdFY0hZNmhudlJhWXBObE85MzJZo2NpZNkgNHZXWWx4dVNxTlJMVFNDSlZhRXNLcWtEM0puOEVTbmI">
                      <Button
                        display={{ base: "none", md: "block" }}
                        bg={"primary"}
                        borderRadius={"50px"}
                        px={5}
                        _hover={{ bg: "primary" }}
                        size={"md"}
                        color={background}
                      >
                        Sign up
                      </Button>
                    </Link>
                  </>
                )}

                {/* Hamburger Icon for Mobile */}
                <Box display={{ base: "block", md: "none" }}>
                  <IconButton
                    icon={<FaBars />}
                    size={"md"}
                    isRound={true}
                    onClick={handleDrawerToggle}
                  />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Drawer for Mobile */}
      <Drawer isOpen={isOpen} placement="right" onClose={handleDrawerToggle}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack
              spacing={10}
              align="center"
              width={"100%"}
              display={"flex"}
              marginY={"20%"}
            >
              <Link href="#" _hover={{ fontWeight: 600, color: "primary" }}>
                Home
              </Link>
              <Link href="#" _hover={{ fontWeight: 600, color: "primary" }}>
                Services
              </Link>
              <Link href="#" _hover={{ fontWeight: 600, color: "primary" }}>
                About
              </Link>
              <Link href="#" _hover={{ fontWeight: 600, color: "primary" }}>
                Pricing
              </Link>
              {/* Login and Signup Buttons */}

              {user ? (
                <>
                  <Popover>
                    <PopoverTrigger>
                      <a></a>
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverBody>
                          <h2>{user.name}</h2>
                          <h2>{user.email}</h2>
                        </PopoverBody>
                        <PopoverFooter>
                          <Link href="/api/auth/logout">
                            <Button
                              w="100%"
                              display={{ base: "none", md: "block" }}
                              bg={"primary"}
                              borderRadius={"50px"}
                              px={5}
                              _hover={{ bg: "primary" }}
                              size={"md"}
                              color={background}
                            >
                              Log Out
                            </Button>
                          </Link>
                        </PopoverFooter>
                      </PopoverContent>
                    </Portal>
                  </Popover>
                </>
              ) : (
                <>
                  <Link href="/api/auth/login">
                    <Button
                      width={"100%"}
                      size={"md"}
                      px={5}
                      border={`2px solid`}
                      borderColor={"primary"}
                      color={"primary"}
                      bg={background}
                    >
                      Log in
                    </Button>
                  </Link>

                  <Link href="https://dev-m6c1jticnvbj81k5.us.auth0.com/u/signup?state=hKFo2SBjaS1qY3IycXRGcTlOc1V4cld2YlJIZjh6aUtjSnhQRKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIG9HdTBZWXg2Zk1EcGdFY0hZNmhudlJhWXBObE85MzJZo2NpZNkgNHZXWWx4dVNxTlJMVFNDSlZhRXNLcWtEM0puOEVTbmI">
                    <Button
                      bg={"primary"}
                      width={"100%"}
                      px={5}
                      _hover={{ bg: "primary" }}
                      size={"md"}
                      color={background}
                    >
                      Sign up
                    </Button>
                  </Link>
                </>
              )}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NavBar;
