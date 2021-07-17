import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import {
  Button,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  Input,
  FormLabel,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  Modal,
  FormControl,
  HStack,
  Select,
} from '@chakra-ui/react';

const SignUp = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  return (
    <>
      <Button colorScheme="green" onClick={onOpen}>
        Crear una cuenta
      </Button>

      <Modal p={5} initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent p={5}>
          <ModalHeader>Crear una cuenta</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <HStack>
              <FormControl width="50%" id="nombreUsuario" isRequired>
                <FormLabel>Nombres:</FormLabel>
                <Input placeholder="Ejemplo: Carla Daniela" />
              </FormControl>
              <FormControl width="50%" id="apellidoUsuario" isRequired>
                <FormLabel>Apellidos:</FormLabel>
                <Input placeholder="Ejemplo: Lema López" />
              </FormControl>
            </HStack>

            <FormControl mt={2} mb={2} id="Correo institucional" isRequired>
              <FormLabel>Correo institucional:</FormLabel>
              <Input placeholder="Ejemplo: nombre.apellido@epn.edu.ec" />
            </FormControl>

            <FormControl mt={2} mb={2} isRequired>
              <FormLabel>Carrera universitaria:</FormLabel>
              <Select placeholder="Seleccione una carrera" variant="filled">
                <option value="">Ingeniería de Software</option>
                <option value="">Ciencias de la Computación</option>
                <option value="">Ingeniería en Sistemas</option>
              </Select>
            </FormControl>

            <HStack>
              <FormControl width="50%" id="sexoUsuario" isRequired>
                <FormLabel>Sexo:</FormLabel>
                <Select placeholder="Seleccione su sexo" variant="filled">
                  <option value="">Hombre</option>
                  <option value="">Mujer</option>
                </Select>
              </FormControl>
              <FormControl width="50%" id="apellidoUsuario" isRequired>
                <FormLabel>Fecha de nacimiento:</FormLabel>
                <Input type="date" />
              </FormControl>
            </HStack>
            <HStack mt={4}>
              <FormControl width="50%" id="passwordUsuario" isRequired>
                <FormLabel>Contraseña:</FormLabel>
                <Input placeholder="Ingrese una contraseña" />
              </FormControl>
              <FormControl width="50%" id="passwordConfirmacionUsuario" isRequired>
                <FormLabel>Confirmación de contraseña:</FormLabel>
                <Input placeholder="Vuelva a ingresar su contraseña" />
              </FormControl>
            </HStack>
          </ModalBody>

          <ModalFooter justifyContent="center">
            <Button colorScheme="blue" mr={3}>
              Crear una cuenta
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignUp;