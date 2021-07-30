import React from 'react';
import { Box, Flex, FormControl, FormLabel, Heading, HStack, Input, Select, VStack, Textarea, Button, Text, Image } from '@chakra-ui/react';
import LeftBar from '../resources/leftBar';
import { FaUser } from "react-icons/fa";
import { WarningTwoIcon } from '@chakra-ui/icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const RegistrarDenuncia = () => {

    // Validaciones FrontEnd
    const initialFieldValue = '';

    const RegistrarDenunciaSchema = Yup.object().shape({
        tipoDenuncia: Yup.string().required('Campo obligatorio'),
        modoCanal: Yup.string().required('Campo obligatorio'),
        telefonoContacto: Yup.string().required('Campo obligatorio').matches('^[0-9]+$',"Solo debe tener números").min(7, 'Muy corto.').max(10, 'Muy largo.'),
        descripcionHechos: Yup.string().required('Campo obligatorio').min(50, 'La descripción debe tener un mínimo de 50 caracteres.'),
        adjunto: Yup.string()
    });

    const formik = useFormik({
        initialValues: {
            tipoDenuncia: initialFieldValue,
            modoCanal: initialFieldValue,
            telefonoContacto: initialFieldValue,
            descripcionHechos: initialFieldValue,
            adjunto: initialFieldValue
        },
        validationSchema: RegistrarDenunciaSchema,
        onSubmit: (formData) => {
            console.log(formData);
        },
    });

    return(
        <HStack>
            <LeftBar icono = {WarningTwoIcon} listaAcciones = "Registrar Denuncias"/>
            <HStack pl="9%" pr="10%" pt="1%" pb="6%" width="80%">
                <Flex width="80%">
                    <Box shadow="md" background="white" borderWidth="1px" width="90%" borderRadius="lg" >
                    <VStack>
                        {/* Título */}
                        <Heading as="h2" size="xl" py={10}>
                            Ingresar datos de la denuncia
                        </Heading>
                        {/* Tipo de denuncia */}
                        <FormControl width="80%" id="tipoDenuncia" py={2} mt={2} mb={2} isInvalid={formik.errors.tipoDenuncia && formik.touched.tipoDenuncia}>
                            <HStack>
                                <FormLabel id="tipoDenuncia" width="30%">Tipo de denuncia:</FormLabel>
                                <Select id="tipoDenuncia" placeholder="Seleccione un tipo de denuncia"
                                        variant="filled" width="70%" height="60px" name="tipoDenuncia" onChange={formik.handleChange}
                                >
                                    <option id="1" value="1">Acoso y maltrato</option>
                                    <option id="2" value="2">Abuso de poder</option>
                                    <option id="3" value="3">Otros</option>
                                </Select>
                            </HStack>
                        </FormControl>
                        
                        <HStack width="30%" pl={15}>
                            <Text justifyContent="left" fontSize="xs" color="red.500">{formik.errors.tipoDenuncia}</Text>
                        </HStack>
                        
                        {/* Modo canal */}
                        <FormControl width="80%" id="modoCanal" py={2} mt={2} mb={2} isInvalid={formik.errors.modoCanal && formik.touched.modoCanal}>
                            <HStack>
                                <FormLabel width="30%">Modo del canal:</FormLabel>
                                <Select id="modoCanal" placeholder="Seleccione un modo de denuncia"
                                        variant="filled" width="70%" height="60px" name="modoCanal" onChange={formik.handleChange}
                                >
                                    <option value="1">Confidencial</option>
                                    <option value="2">No confidencial</option>
                                </Select>
                            </HStack>
                        </FormControl>
                        <HStack width="30%" pl={15}>
                            <Text fontSize="xs" color="red.500">{formik.errors.modoCanal}</Text>
                        </HStack>

                        {/* Teléfono */}
                        <FormControl width="80%" id="telefonoContacto" py={2} mt={2} mb={2} isInvalid={formik.errors.telefonoContacto && formik.touched.telefonoContacto}>
                            <HStack>
                                <FormLabel width="30%">Teléfono de contacto:</FormLabel>
                                <Input placeholder="(Ej.: 0993568456)" width="70%" height="60px" name="telefonoContacto" onChange={formik.handleChange}></Input>
                            </HStack>
                        </FormControl>
                        <HStack width="30%" pl={15}>
                            <Text fontSize="xs" color="red.500">{formik.errors.telefonoContacto}</Text>
                        </HStack>

                        {/* Descripción de los hechos */}
                        <FormControl width="80%" id="descripcionHechos" py={2} mt={2} mb={2} isInvalid={formik.errors.descripcionHechos && formik.touched.descripcionHechos}>
                            <HStack>
                                <FormLabel width="30%">Descripción de los hechos:</FormLabel>
                                <Textarea
                                    name="descripcionHechos"
                                    placeholder="Detalle los actores, la situación y la posible solución que propone"
                                    size = "sm"
                                    width = "70%"
                                    height = "150px"
                                    onChange={formik.handleChange}
                                ></Textarea>
                            </HStack>
                        </FormControl>
                        <HStack width="30%" pl={15}>
                            <Text fontSize="xs" color="red.500">{formik.errors.descripcionHechos}</Text>
                        </HStack>
                        
                        {/* Subir evidencia */}
                        <FormControl width="80%" id="adjunto" py={2} mt={2} mb={2} isInvalid={formik.errors.adjunto && formik.touched.adjunto}>
                            <HStack>
                                <FormLabel width="30%">Información adjunta:</FormLabel>
                                <Input
                                    name="adjunto"
                                    pt={2}
                                    type="file"
                                    placeholder="Ningún archivo subido"
                                    width="70%"
                                    height="60px"
                                    onChange={formik.handleChange}
                                ></Input>
                            </HStack>
                        </FormControl>
                        <HStack px={10}>
                            <Text fontSize="xs" color="red.500">{formik.errors.adjunto}</Text>
                        </HStack>

                        {/* Botón */}
                        <HStack justifyContent = "center" mr={3} pt={2} pb={8}>
                            <Button type="submit" colorScheme="blue" >
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
        </HStack>
    );
};

export default RegistrarDenuncia;