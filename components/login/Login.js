import React from 'react';
import { useDisclosure, ModalOverlay,  ModalHeader,  ModalBody,  Input,
  ModalCloseButton,  ModalContent,  ModalFooter, Modal,  FormControl,  HStack,
  Button, Link, VStack, Heading, Checkbox, InputRightElement } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';

const Login = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClick = () => setShowPassword(!showPassword);
  

  const LoginSchema = Yup.object().shape({
    correoInstitucional: Yup.string().email('Dirección de correo electrónico no válida').required('Campo obligatorio').matches('^[a-z]{3,15}.[a-z]{3,15}[0-9]{0,2}(@epn.edu.ec)$'),
    password: Yup.string().required('Campo obligatorio'),
  });

  return (
    <>
      {/* Apertura de la ventana de LogIn */}
      <HStack justifyContent = "center" mr={3} py={2}>
        <Link color="blue.400" onClick={onOpen}>
          ¿Tienes cuenta? Ingresa aquí
        </Link>
      </HStack>

      {/* Cuadro modal */}
      <Modal p={5} initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent p={5}>
          {/* Titulo */}
          <ModalHeader>
            <VStack>
              <Heading as="h2" size="xl" pt={5} pb={10}>
                  Iniciar Sesión
              </Heading>
            </VStack>
          </ModalHeader>
          
          <ModalCloseButton />
          <ModalBody pb={6}>

            {/* Correo institucional */}
            <FormControl mt={2} mb={2} px={8} id="correoUsuario" isRequired>
              <Input height={"60px"} placeholder="Correo institucional (Ej. : nombre.apellido@epn.edu.ec)" />
            </FormControl>
            
            {/* Contraseña de usuario */}
            <HStack mt={4}>
              <FormControl mt={2} mb={2} px={8} id="passwordUsuario"  isRequired>
                <Input height={"60px"} type={showPassword? 'text' : 'password'} placeholder="Contraseña" />
                <InputRightElement h="100%" pr={10}>
                  <Button onClick={handleClick}>
                    {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  </Button>
                </InputRightElement>
              </FormControl>
            </HStack>

            {/* Recordar Credenciales */}
            <HStack mt={5} mb={3} px={8}>
              <Checkbox flex="left" defaultIsChecked>
                Recordar mis credenciales
              </Checkbox>
            </HStack>

          </ModalBody>

          <ModalFooter justifyContent="center">
            {/* Botón para iniciar sesión */}
            <Button colorScheme="blue" mr={3}>
              Ingresar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
