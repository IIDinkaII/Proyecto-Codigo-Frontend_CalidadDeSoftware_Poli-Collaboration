import React from "react";
import { Heading, Flex } from "@chakra-ui/react";
    
const Header = (props) => {
  return (
    <Flex
      justify="space-between"
      justifyContent = "center"
      padding={5}
      bg="blue.700"
      color="white"
      {...props}
    >
        <Heading as="h1" size="lg" letterSpacing={"wider"}>
            POLI COLLABORATION
        </Heading>
    </Flex>
  );
};

export default Header;