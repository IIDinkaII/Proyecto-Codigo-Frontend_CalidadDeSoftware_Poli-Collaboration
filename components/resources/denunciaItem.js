import React from 'react';
import { Box, Text, VStack, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import RevisionDenuncia from '../denuncias/RevisionDenuncia';

export default function DenunciaItem({ titulo, fecha, autor, tipo, estado, hechos }) {
    
    const { isOpen, onOpen, onClose } = useDisclosure();

    return(
        <>
        <Box shadow="md" background="white" borderWidth="1px" width="80%" alignItems="center" onClick={onOpen}>
            <VStack pt={5} px={10} align="start">
                {/* Titulo Denuncia */}
                <Text as="b" fontSize="xl">{titulo}</Text>
                {/* Datos Denuncia */}
                <SimpleGrid columns={4} width="100%" spacingX={"10%"} pb={5}>
                    <Text color="gray.500">{fecha}</Text>
                    <Text color="gray.500">{autor}</Text>
                    <Text color="gray.500">{tipo}</Text>
                    <Text color="gray.500">{estado}</Text>
                </SimpleGrid>
            </VStack>
        </Box>
        <RevisionDenuncia isOpen={isOpen} onClose={onClose} titulo={titulo} fecha={fecha} autor={autor} tipo={tipo} estado={estado} hechos={hechos}/>
        </>
    )
}