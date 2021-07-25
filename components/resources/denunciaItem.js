import React from 'react';
import { Box, Text, VStack, SimpleGrid, useDisclosure, Modal,  ModalOverlay,  ModalHeader,  ModalBody
, ModalCloseButton,  ModalContent, ModalFooter, FormControl, Button, Heading,
RadioGroup, Stack, Radio, Input, HStack, FormLabel, Textarea } from '@chakra-ui/react';

export default function DenunciaItem({ titulo, fecha, autor, tipo, estado, hechos }) {
    
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef();
    const finalRef = React.useRef();
    const [value, setValue] = React.useState("1")

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

        <Modal p={5} initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size="5xl" isCentered>
            <ModalOverlay />
            <ModalContent p={5}>
                <ModalHeader>
                    {/* Titulo denuncia */}
                    <VStack align="stretch">
                        <Heading as="h2" size="xl" px={8} pt={5} pb={2}>{titulo}</Heading>
                    </VStack>
                    
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <VStack alignItems="start">
                        {/* Fecha-Autor-Tipo */}
                        <SimpleGrid columns={3} width="100%" spacingX={"30%"} pb={5} px={8}>
                            <Text color="gray.500">{fecha}</Text>
                            <Text color="gray.500">{autor}</Text>
                            <Text color="gray.500">{tipo}</Text>
                        </SimpleGrid>

                        {/* Descripción de los hechos */}
                        <FormControl width="100%" id="descripcionHechos" py={2} mt={2} mb={2} px={8} isReadOnly>
                            <HStack>
                                <FormLabel width="30%">Descripción de los hechos:</FormLabel>
                                <Textarea size = "sm" width = "70%" height = "150px">{hechos}</Textarea>
                            </HStack>
                        </FormControl>

                        {/* Responsables */}
                        <FormControl width="100%" mt={2} mb={2} px={8} pt={5} id="responsables" isRequired>
                            <HStack>
                                <FormLabel width="30%">Responsables de la gestión:</FormLabel>
                                <Input height={"60px"} width="70%" placeholder="Nombres de los responsables" />
                            </HStack>
                        </FormControl>

                        {/* Estado de la denuncia */}
                        <FormControl width="100%" mt={2} mb={2} px={8} pt={5} id="estado" isRequired>
                            <HStack>
                                <FormLabel width="30%">Estado de la denuncia:</FormLabel>
                                <RadioGroup onChange={setValue} value={value}>
                                    <Stack direction="row">
                                        <Radio value="1">En Revisión</Radio>
                                        <Radio value="2">Finalizado</Radio>
                                    </Stack>
                                    </RadioGroup>
                            </HStack>
                        </FormControl>

                        {/* Observaciones */}
                        <FormControl width="100%" id="observaciones" pt={5} pb={2} mt={2} mb={2} px={8}>
                            <HStack>
                                <FormLabel width="30%">Observaciones:</FormLabel>
                                <Textarea size = "sm" width = "70%" height = "150px"></Textarea>
                            </HStack>
                        </FormControl>
                    </VStack>
                </ModalBody>
                <ModalFooter justifyContent="center">
                    {/* Botón para iniciar sesión */}
                    <Button colorScheme="blue" mr={3}>
                        Registrar Gestión
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}