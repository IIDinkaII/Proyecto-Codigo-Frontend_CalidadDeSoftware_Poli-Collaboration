import React, {useState} from 'react';
import { Flex, Avatar, Heading, Text, IconButton } from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';
import NavItem from "../resources/navItem";

export default function LeftBar({ icono, listaAcciones }) {
    return(
        <Flex pos = "sticky" w = "20%" flexDir = "column" bg = "white">
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
                <NavItem icon={icono} title={listaAcciones} active/>
                <NavItem icon={icono} title={listaAcciones}/>
            </Flex>

        </Flex>  
    );
};