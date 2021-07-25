import React from 'react';
import { Box, Flex, HStack, Switch ,Heading, Text, VStack, SimpleGrid, FormControl, Input, Select, FormLabel, Button, InputRightElement } from '@chakra-ui/react';
import Login from './Login';
import { ViewIcon, ViewOffIcon, InfoIcon } from '@chakra-ui/icons';


const SignUp = () => {
  // Contraseña
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClick = () => setShowPassword(!showPassword);
  // Confirmar contraseña
  const [showPassConfirmation, setShowPassConf] = React.useState(false);
  const handleClickConf = () => setShowPassConf(!showPassConfirmation);
  
  return (
    <SimpleGrid columns={2} spacingX ="40px">
      {/* Terminos y condiciones */}
      <Flex px={"10%"} py={"5%"}>
        <VStack alignItems="left">
          <Heading as="h2" size="xl" pb={10}>
              Términos y condiciones
          </Heading>
          {/* Primera norma */}
          <HStack>
            <InfoIcon boxSize={7}/>
            <Heading as="h4" size="md" mb={10} pl={5}>
              Uso de lenguaje adecuado
            </Heading>
          </HStack>
          <Text pl={"8%"} pt= {5} color="gray.500">
            Mantén un vocabulario respetuoso, decente y apropiado durante tu interacción dentro de la plataforma.
          </Text>
          {/* Segunda norma */}
          <HStack pt={5}>
            <InfoIcon boxSize={7}/>
            <Heading as="h4" size="md" mb={10} pl={5}>
              Se respetuoso con los demás
            </Heading>
          </HStack>
          <Text pl={"8%"} pt= {5} color="gray.500">
            No ofender o atacar verbalmente a otros estudiantes, profesores o personal administrativo.
          </Text>
          {/* Tercera norma */}
          <HStack pt={5}>
            <InfoIcon boxSize={7}/>
            <Heading as="h4" size="md" mb={10} pl={5}>
              Involúcrate en actividades pertinentes
            </Heading>
          </HStack>
          <Text pl={"8%"} pt= {5} color="gray.500">
            Ayudar a otros estudiantes solo cuando se sepa la respuesta correcta o solicitar ayuda de temas de relevancia para toda la comunidad. 
          </Text>
          {/* Cuarta norma */}
          <HStack pt={5}>
            <InfoIcon boxSize={7}/>
            <Heading as="h4" size="md" mb={10} pl={5}>
              Evitar temas polémicos
            </Heading>
          </HStack>
          <Text pl={"8%"} pt= {5} color="gray.500">
            No generar preguntas, respuestas o denuncias que no sean adecuadas/correctas/comprobadas para mantener un ambiente sano y enriquecedor. 
          </Text>
        </VStack>
      </Flex>

      {/* Formulario de registro */}
      <Flex px={"10%"} pt={"5%"} pb={"15%"}>
        <Box shadow="md" background="white" borderWidth="1px" width="100%" borderRadius="lg" >
          {/* Titulo */}
          <VStack>
            <Heading as="h2" size="xl" py={10}>
                Crear una cuenta
            </Heading>
          </VStack>
          
          {/* Nombre y Apellido */}
          <HStack px={10} py={2}>
            <FormControl width="50%" id="nombreUsuario" isRequired>
              <Input placeholder="Nombres del estudiante *"/>
            </FormControl>
            <FormControl width="50%" id="apellidoUsuario" isRequired>
              <Input placeholder="Apellidos del estudiante *"/>
            </FormControl>
          </HStack>

          {/* Correo */}
          <FormControl px={10} py={2} mt={2} mb={2} id="correoInstitucional" isRequired>
            <Input placeholder="Correo institucional (Ej.: nombre.apellido@epn.edu.ec)" />
          </FormControl>
          {/* Carrera */}
          <FormControl px={10} py={2} mt={2} mb={2} isRequired>
            <Select placeholder="Seleccione una carrera" variant="filled">
              <option id="1" value="a">Ingeniería de Software</option>
              <option id="2" value="b">Ciencias de la Computación</option>
              <option id="33" value="c">Ingeniería en Sistemas</option>
            </Select>
          </FormControl>

          {/* Sexo y fecha de nacimiento */}
          <HStack px={10} py={2}>
            <FormControl width="50%" id="sexoUsuario" isRequired>
              <Select placeholder="Seleccione su sexo" variant="filled">
                <option value="">Hombre</option>
                <option value="">Mujer</option>
              </Select>
            </FormControl>
            <FormControl width="50%" id="fechaNacimientoUsuario" isRequired>
              <Input type="date" />
            </FormControl>
          </HStack>

          {/* Contraseña */}
          <HStack mt={2} px={10} py={2}>
            <FormControl width="50%" id="passwordUsuario" isRequired>
              <Input placeholder="Contraseña" type={showPassword? 'text' : 'password'}/>
              <InputRightElement h="100%">
                  <Button onClick={handleClick}>
                    {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  </Button>
                </InputRightElement>
            </FormControl>
            <FormControl width="50%" id="passwordConfirmacionUsuario" isRequired>
              <Input placeholder="Confirmación de contraseña" type={showPassConfirmation? 'text' : 'password'}/>
              <InputRightElement h="100%">
                  <Button onClick={handleClickConf}>
                    {showPassConfirmation ? <ViewOffIcon /> : <ViewIcon />}
                  </Button>
                </InputRightElement>
            </FormControl>
          </HStack>

          {/* Aceptar terminos y condiciones */}
          <FormControl display="flex" justifyContent = "center" py={4}>
            <Switch id="email-alerts" pr={5} />
            <FormLabel htmlFor="email-alerts" mb="0">
              Acepto los términos y condiciones
            </FormLabel>
          </FormControl>

          {/* Botón registrar */}
          <HStack justifyContent = "center" mr={3} py={2}>
            <Button colorScheme="blue" >
              Crear una cuenta
            </Button>
          </HStack>
          
          {/* Link ingresar */}
          <Login/>

        </Box>
      </Flex>
    </SimpleGrid>
  );
};

export default SignUp;