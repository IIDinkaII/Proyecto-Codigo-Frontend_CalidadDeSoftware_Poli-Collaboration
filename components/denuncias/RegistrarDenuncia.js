import React from 'react';
import { Box, Flex, FormControl, FormLabel, Heading, HStack, Input, Select, VStack, Textarea, Button, Text, Image } from '@chakra-ui/react';
import LeftBar from '../resources/leftBar';
import { FaUser } from "react-icons/fa";
import { WarningTwoIcon } from '@chakra-ui/icons';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';

const RegistrarDenunciaSchema = Yup.object().shape({
    tipoDenuncia: Yup.string().required('Campo obligatorio'),
    modoCanal: Yup.string().required('Campo obligatorio'),
    telefonoContacto: Yup.string().required('Campo obligatorio').regex('^\d+$').min(7, 'Muy corto.').max(10, 'Muy largo.'),
    descripcionHechos: Yup.string().required('Campo obligatorio').min(50, 'La descripción debe tener un mínimo de 50 caracteres.'),
    adjunto: Yup.string()
  });

const RegistrarDenuncia = () => {
    return(
        <>
            <LeftBar icono = {WarningTwoIcon} listaAcciones = "Registrar Denuncias"/>
            <HStack pl="9%" pr="10%" pt="1%" pb="6%" width="100%">
                <Flex width="80%">
                    <Box shadow="md" background="white" borderWidth="1px" width="90%" borderRadius="lg" >
                    <VStack>
                        {/* Título */}
                        <Heading as="h2" size="xl" py={10}>
                            Ingresar datos de la denuncia
                        </Heading>
                        {/* Tipo de denuncia */}
                        <FormControl width="80%" id="tipoDenuncia" isRequired py={2} mt={2} mb={2}>
                            <HStack>
                                <FormLabel width="30%">Tipo de denuncia:</FormLabel>
                                <Select placeholder="Seleccione un tipo de denuncia" variant="filled" width="70%" height="60px">
                                    <option value="">Acoso y maltrato</option>
                                    <option value="">Abuso de poder</option>
                                    <option value="">Otros</option>
                                </Select>
                            </HStack>
                        </FormControl>
                        {/* Modo canal */}
                        <FormControl width="80%" id="modoCanal" isRequired py={2} mt={2} mb={2}>
                            <HStack>
                                <FormLabel width="30%">Modo del canal:</FormLabel>
                                <Select placeholder="Seleccione un modo de denuncia" variant="filled" width="70%" height="60px">
                                    <option value="">Confidencial</option>
                                    <option value="">No confidencial</option>
                                </Select>
                            </HStack>
                        </FormControl>
                        {/* Teléfono */}
                        <FormControl width="80%" id="telefono" isRequired py={2} mt={2} mb={2}>
                            <HStack>
                                <FormLabel width="30%">Teléfono de contacto:</FormLabel>
                                <Input placeholder="(Ej.: 0993568456)" width="70%" height="60px"></Input>
                            </HStack>
                        </FormControl>
                        {/* Descripción de los hechos */}
                        <FormControl width="80%" id="descripcionHechos" isRequired py={2} mt={2} mb={2}>
                            <HStack>
                                <FormLabel width="30%">Descripción de los hechos:</FormLabel>
                                <Textarea
                                    placeholder="Detalle los actores, la situación y la posible solución que propone"
                                    size = "sm"
                                    width = "70%"
                                    height = "150px"
                                ></Textarea>
                            </HStack>
                        </FormControl>
                        {/* Subir evidencia */}
                        <FormControl width="80%" id="informacionAdjunta" isRequired py={2} mt={2} mb={2}>
                            <HStack>
                                <FormLabel width="30%">Información adjunta:</FormLabel>
                                <Input pt={2} type="file" placeholder="Ningún archivo subido" width="70%" height="60px"></Input>      
                            </HStack>
                        </FormControl>
                        {/* Botón */}
                        <HStack justifyContent = "center" mr={3} pt={2} pb={8}>
                            <Button colorScheme="blue" >
                                Registrar Denuncia
                            </Button>
                        </HStack>
                    </VStack>   
                    
                    </Box>
                </Flex>
                <Flex width="20%">
                    <VStack>
                        <FaUser size="100px"/>
                        <Heading as="h3" size="lg" pt={10} pb={8}>Recuerda...</Heading>
                        <Text as="b">La información proporcionada debes ser real</Text>
                        <Image src="https://i.imgur.com/agchfao.png"/>
                    </VStack>
                </Flex>
            </HStack>
        </>
    );
};

export default RegistrarDenuncia;