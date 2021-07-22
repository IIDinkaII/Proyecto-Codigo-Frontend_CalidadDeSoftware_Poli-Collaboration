import React, {useState} from 'react';
import { Flex, Avatar, Heading, Text, IconButton } from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';
import NavItem from "../resources/navItem";

const LeftBar = (props) => {
    return(
        <Flex pos = "sticky" w = "600px" flexDir = "column" bg = "white">
            {/* Avatar */}
            <Flex p="5%" flexDir="column" w="100%" mb={4}>
                <Flex mt={4} align="center" pt={5} pl={3}>
                    <Avatar size="xl" bg="black"/>
                    <Flex flexDir="column" ml={10} display="flex">
                        <Heading as="h3" size="sm">Nombre - Apellido</Heading>
                        <Text color="gray" pt={3}>Rol del usuario</Text>
                    </Flex>
                </Flex>
                
            </Flex>

            {/* Ítems */}
            <Flex p="5%" w="100%" as="nav" flexDir="column">
                <NavItem icon={WarningTwoIcon} title="Registrar Denuncia" active />
                <NavItem icon={WarningTwoIcon} title="Otras funcionalidades"/>
            </Flex>

        </Flex>  
    );
};

export default LeftBar;