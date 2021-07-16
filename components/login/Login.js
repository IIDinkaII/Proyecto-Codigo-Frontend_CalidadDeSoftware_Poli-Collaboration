import React from 'react';
import { Button, Flex, InputGroup, InputLeftAddon, Input, Heading, InputRightElement, Checkbox, VStack, HStack } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon, EmailIcon, LockIcon } from '@chakra-ui/icons';
import SignUp from './SignUp';

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClick = () => setShowPassword(!showPassword);
  return (
    <Flex direction="column" p={12}>
      <VStack spacing={5} justify="flex-end">
        <Flex rounded={3}>
          <Heading size="lg">Inicio de sesión</Heading>
        </Flex>
        {/* Correo electronico */}
        <InputGroup>
          <InputLeftAddon>
            <EmailIcon />
          </InputLeftAddon>
          <Input type="email" placeholder="Correo electrónico"></Input>
        </InputGroup>
        {/* Password */}
        <InputGroup>
          <InputLeftAddon>
            <LockIcon />
          </InputLeftAddon>
          <Input pr="4.5rem" type={showPassword ? 'text' : 'password'} placeholder="Ingrese su contraseña" />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {showPassword ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </VStack>
      {/* Recordar Credenciales */}
      <HStack mt={5} mb={3} justify="flex-end">
        <Checkbox flex="left" defaultIsChecked>
          Recordar credenciales
        </Checkbox>
      </HStack>
      {/* Botones  */}
      <HStack mt={5} justify="center" spacing={5}>
        <SignUp />
        <Button colorScheme="blue">Ingresar</Button>
      </HStack>
    </Flex>
  );
};

export default Login;
