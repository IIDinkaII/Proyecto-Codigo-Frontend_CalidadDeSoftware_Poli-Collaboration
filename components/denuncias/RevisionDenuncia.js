import React from 'react';
import { Text, VStack, SimpleGrid, Modal,  ModalOverlay,  ModalHeader,  ModalBody
    , ModalCloseButton,  ModalContent, ModalFooter, FormControl, Button, Heading,
    RadioGroup, Stack, Radio, HStack, FormLabel, Textarea } from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


export default function RevisionDenuncia({ isOpen, onClose, titulo, fecha, autor, tipo, estado, hechos }) {

    const initialRef = React.useRef();
    const finalRef = React.useRef();
    const [value, setValue] = React.useState(estado)

    // Validaciones FrontEnd
    const initialFieldValue = '';

    const RevisionDenunciaSchema = Yup.object().shape({
        // Denuncia
        estadoDenuncia: Yup.string().required('Campo obligatorio'),
        // Revision
        observacion: Yup.string()
    });

    const formik = useFormik({
        initialValues: {
            estado: initialFieldValue,
            observacion: initialFieldValue,
        },
        validationSchema: RevisionDenunciaSchema,
        onSubmit: (formData) => {
          console.log(formData);
        },
      });
    

    return(
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

                        {/* Estado de la denuncia */}
                        <FormControl width="100%" mt={2} mb={2} px={8} pt={5} id="estadoDenuncia" isInvalid={formik.errors.estadoDenuncia && formik.touched.estadoDenuncia} onChange={formik.handleChange}>
                            <HStack>
                                <FormLabel width="30%">Estado de la denuncia:</FormLabel>
                                <RadioGroup id="estadoDenuncia" onChange={setValue} value={value} name="estadoDenuncia">
                                    <Stack direction="row">
                                        <Radio id="1" value="EN REVISIÓN">En Revisión</Radio>
                                        <Radio id="2" value="FINALIZADO">Finalizado</Radio>
                                    </Stack>
                                </RadioGroup>
                                {
                                    estado === "GENERADO" ?
                                    <Text fontSize="xs" color="red.500">{formik.errors.estadoDenuncia}</Text>
                                    :
                                    ""
                                }
                            </HStack>
                        </FormControl>
                        

                        {/* Observaciones */}
                        <FormControl width="100%" id="observacion" pt={5} pb={2} mt={2} mb={2} px={8} isInvalid={formik.errors.observacion && formik.touched.observacion}>
                            <HStack>
                                <FormLabel width="30%">Observaciones:</FormLabel>
                                <Textarea 
                                    name = "observacion"
                                    size = "sm" 
                                    width = "70%" 
                                    height = "150px"
                                    onChange={formik.handleChange}
                                ></Textarea>
                            </HStack>
                        </FormControl>
                        <HStack width="30%" pl={15}>
                            <Text fontSize="xs" color="red.500">{formik.errors.observacion}</Text>
                        </HStack>
                        
                    </VStack>
                </ModalBody>
                <ModalFooter justifyContent="center">
                    {/* Botón para iniciar sesión */}
                    <Button type="submit" colorScheme="blue" mr={3}>
                        Registrar Gestión
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}