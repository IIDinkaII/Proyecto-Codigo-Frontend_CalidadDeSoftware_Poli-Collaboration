import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Switch,
  Heading,
  VStack,
  SimpleGrid,
  FormControl,
  Input,
  Select,
  FormLabel,
  Button,
  InputRightElement,
} from '@chakra-ui/react';
import Login from './Login';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Terms from '../resources/Terms';

const SignUp = () => {
  // Contraseña
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClick = () => setShowPassword(!showPassword);
  // Confirmar contraseña
  const [showPassConfirmation, setShowPassConf] = React.useState(false);
  const handleClickConf = () => setShowPassConf(!showPassConfirmation);

  return (
    <SimpleGrid columns={2} spacingX="40px">
      <Terms />
      {/* Formulario de registro */}
      <Flex px={'10%'} pt={'5%'} pb={'15%'}>
        <Box shadow="md" background="white" borderWidth="1px" width="100%" borderRadius="lg">
          {/* Titulo */}
          <VStack>
            <Heading as="h2" size="xl" py={10}>
              Crear una cuenta
            </Heading>
          </VStack>
          {/* Nombre y Apellido */}
          <HStack px={10} py={2}>
            <FormControl width="50%" id="nombreUsuario" isRequired>
              <Input placeholder="Nombres del estudiante *" />
            </FormControl>
            <FormControl width="50%" id="apellidoUsuario" isRequired>
              <Input placeholder="Apellidos del estudiante *" />
            </FormControl>
          </HStack>

          {/* Correo */}
          <FormControl px={10} py={2} mt={2} mb={2} id="correoInstitucional" isRequired>
            <Input placeholder="Correo institucional (Ej.: nombre.apellido@epn.edu.ec)" />
          </FormControl>
          {/* Carrera */}
          <FormControl id="carreraUsuario" px={10} py={2} mt={2} mb={2} isRequired>
            <Select id="a" placeholder="Seleccione una carrera" variant="filled">
              <option id="b" value="a">
                Ingeniería de Software
              </option>
              <option id="c" value="b">
                Ciencias de la Computación
              </option>
              <option id="d" value="c">
                Ingeniería en Sistemas
              </option>
            </Select>
          </FormControl>

          {/* Sexo y fecha de nacimiento */}
          <HStack px={10} py={2}>
            <FormControl width="50%" id="sexoUsuario" isRequired>
              <Select id="a" placeholder="Seleccione su sexo" variant="filled">
                <option id="b" value="">
                  Hombre
                </option>
                <option id="c" value="">
                  Mujer
                </option>
              </Select>
            </FormControl>
            <FormControl width="50%" id="fechaNacimientoUsuario" isRequired>
              <Input type="date" />
            </FormControl>
          </HStack>
          {/* Contraseña */}
          <HStack mt={2} px={10} py={2}>
            <FormControl width="50%" id="passwordUsuario" isRequired>
              <Input placeholder="Contraseña" type={showPassword ? 'text' : 'password'} />
              <InputRightElement h="100%">
                <Button onClick={handleClick}>{showPassword ? <ViewOffIcon /> : <ViewIcon />}</Button>
              </InputRightElement>
            </FormControl>
            <FormControl width="50%" id="passwordConfirmacionUsuario" isRequired>
              <Input placeholder="Confirmación de contraseña" type={showPassConfirmation ? 'text' : 'password'} />
              <InputRightElement h="100%">
                <Button onClick={handleClickConf}>{showPassConfirmation ? <ViewOffIcon /> : <ViewIcon />}</Button>
              </InputRightElement>
            </FormControl>
          </HStack>
          {/* Aceptar terminos y condiciones */}
          <FormControl id="confirmacionTerminos" display="flex" justifyContent="center" py={4}>
            <Switch id="emailAlerts" pr={5} />
            <FormLabel htmlFor="email-alerts" mb="0">
              Acepto los términos y condiciones
            </FormLabel>
          </FormControl>
          {/* Botón registrar */}
          <HStack justifyContent="center" mr={3} py={2}>
            <Button colorScheme="blue">Crear una cuenta</Button>
          </HStack>
          {/* Link ingresar */}
          <Login />
        </Box>
      </Flex>
    </SimpleGrid>
  );
};

export default SignUp;
