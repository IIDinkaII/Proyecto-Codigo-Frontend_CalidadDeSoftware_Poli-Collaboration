import React from "react";
import { Heading, Flex } from "@chakra-ui/react";
    
const Header = (props) => {
  return (
    <Flex
      justify="space-between"
      justifyContent = "center"
      px={5} pt={4} pb={6}
      bg="blue.700"
      color="white"
      {...props}
    >
        <Heading as="h1" size="lg" height="3vh" letterSpacing={"wider"}>
            POLI COLLABORATION
        </Heading>
    </Flex>
  );
};

export default Header;