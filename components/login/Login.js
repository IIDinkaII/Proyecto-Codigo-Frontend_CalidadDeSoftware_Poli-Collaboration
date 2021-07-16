import React from 'react';
import { Button, ButtonGroup, Flex, Icon, InputGroup, InputLeftAddon, Input, Heading, InputRightElement, Checkbox } from '@chakra-ui/react';
import { MdSettings, MdEmail, MdLock, MdView } from 'react-icons/md';
import { ViewIcon, ViewOffIcon, WarningIcon, EmailIcon, LockIcon } from '@chakra-ui/icons';

const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Flex direction="column" p={12}>
      <Flex rounded={3} justifyContent="center" alignItems="center">
        <Heading size="lg">Inicio de sesión</Heading>
      </Flex>
      <InputGroup mt={4}>
        <InputLeftAddon>
          <EmailIcon />
        </InputLeftAddon>
        <Input type="email" placeholder="Correo electrónico"></Input>
      </InputGroup>
      <InputGroup mt={4}>
        <InputLeftAddon>
          <LockIcon />
        </InputLeftAddon>
        <Input pr="4.5rem" type={show ? 'text' : 'password'} placeholder="Ingrese su contraseña" />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? <ViewOffIcon /> : <ViewIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Flex justifyContent="flex-end">
        <Checkbox mt={4} mb={4} flex="left" defaultIsChecked>
          Recordar credenciales
        </Checkbox>
      </Flex>
      <Flex direction="row" justifyContent="center">
        <Button colorScheme="green" m={4}>
          Registrarse
        </Button>
        <Button colorScheme="blue" m={4}>
          Ingresar
        </Button>
      </Flex>
    </Flex>
  );
};

export default Login;
