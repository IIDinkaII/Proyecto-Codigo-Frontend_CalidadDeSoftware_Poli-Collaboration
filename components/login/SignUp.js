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

      <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crear una cuenta</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <HStack>
              <FormControl width="50%" id="nombreUsuario" isRequired>
                <FormLabel>Nombres:</FormLabel>
                <Input placeholder="Ejemplo: Luis Alejandro" />
              </FormControl>
              <FormControl width="50%" id="apellidoUsuario" isRequired>
                <FormLabel>Apellidos:</FormLabel>
                <Input placeholder="Ejemplo: Llanganate Valencia" />
              </FormControl>
            </HStack>

            <FormControl mt={2} mb={2} id="otroCampo" isRequired>
                <FormLabel>Otro campo:</FormLabel>
                <Input placeholder="Ejemplo: Otro campo" />
              </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Guardar
            </Button>
            <Button colorScheme="red" onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignUp;
