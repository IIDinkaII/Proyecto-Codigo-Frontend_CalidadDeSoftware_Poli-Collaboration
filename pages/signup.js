import React, { useState } from 'react';
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
  FormErrorMessage,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Login from '../components/login/Login';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Terms from '../components/resources/Terms';
import axios from 'axios';
import environment from '../utils/environment';

const SignUp = () => {
  // Hooks in order to
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => setShowPassword(!showPassword);
  const [showPassConfirmation, setShowPassConf] = useState(false);
  const handleClickConf = () => setShowPassConf(!showPassConfirmation);

  const initialFieldValue = '';

  const SignUpSchema = Yup.object().shape({
    nombres: Yup.string().min(3, 'Prueba con un nombre más largo.').max(70, 'Tu nombre debe ser más corto.').required('Campo obligatorio'),
    apellidos: Yup.string()
      .min(2, 'Prueba con un apellido más largo.')
      .max(70, 'Tu nombre debe ser más largo.')
      .required('Campo obligatorio'),
    correoInstitucional: Yup.string().email('Dirección de correo electrónico no válida').required('Campo obligatorio'),
    sexo: Yup.string().required('Campo obligatorio'),
    carrera: Yup.string().required(),
    fechaNacimiento: Yup.date().required(),
    password: Yup.string().required('Campo obligatorio'),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
      .required('Campo obligatorio'),
  });

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('open', areFieldsValid);

  //   if (areFieldsValid) {
  //     console.log('shit', areFieldsValid);
  //     resetHooks();
  //     axios
  //       .post(`${environment.api}/usuario`, usuario, {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       })
  //       .then((res) => {
  //         alert('Usuario registrado');
  //       })
  //       .catch((error) => {
  //         if (error.response.data.statusCode == 406) {
  //           setValidEmail(false);
  //         }
  //       });
  //   } else {
  //     console.log('exit');
  //     setRegistroForm(false);
  //   }
  // };

  const formik = useFormik({
    initialValues: {
      nombres: initialFieldValue,
      apellidos: initialFieldValue,
      correoInstitucional: initialFieldValue,
      carrera: initialFieldValue,
      sexo: initialFieldValue,
      fechaNacimiento: initialFieldValue,
      password: initialFieldValue,
      passwordConfirmation: initialFieldValue,
    },
    validationSchema: SignUpSchema,
    onSubmit: (formData) => {
      console.log('me aplastaste');
      console.log(formData);
    },
  });

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
          <form onSubmit={formik.handleSubmit}>
            {/* Nombre y Apellido */}
            <HStack px={10} py={2}>
              <FormControl width="50%" id="nombreUsuario" isInvalid={formik.errors.nombres && formik.touched.nombres}>
                <Input placeholder="Nombres del estudiante *" name="nombres" onChange={formik.handleChange} />
                <FormErrorMessage>{formik.errors.nombres}</FormErrorMessage>
              </FormControl>
              <FormControl width="50%" id="apellidoUsuario" isInvalid={formik.errors.apellidos && formik.touched.apellidos}>
                <Input placeholder="Apellidos del estudiante *" name="apellidos" name="apellidos" onChange={formik.handleChange} />
                <FormErrorMessage>{formik.errors.apellidos}</FormErrorMessage>
              </FormControl>
            </HStack>

            {/* Correo */}
            <FormControl
              px={10}
              py={2}
              mt={2}
              mb={2}
              id="correoInstitucional"
              isInvalid={formik.errors.correoInstitucional && formik.touched.correoInstitucional}
            >
              <Input
                placeholder="Correo institucional (Ej.: nombre.apellido@epn.edu.ec)"
                name="correoInstitucional"
                onChange={formik.handleChange}
              />
              <FormErrorMessage>{formik.errors.correoInstitucional}</FormErrorMessage>
            </FormControl>
            {/* Carrera */}
            <FormControl id="carreraUsuario" px={10} py={2} mt={2} mb={2} isInvalid={formik.errors.carrera && formik.touched.carrera}>
              <Select id="a" placeholder="Seleccione una carrera" variant="filled" name="carrera" onChange={formik.handleChange}>
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
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>

            {/* Sexo y fecha de nacimiento */}
            <HStack px={10} py={2}>
              <FormControl width="50%" id="sexoUsuario" isInvalid={formik.errors.sexo && formik.touched.sexo}>
                <Select id="a" placeholder="Seleccione su sexo" variant="filled" name="sexo" onChange={formik.handleChange}>
                  <option id="b" value="">
                    Hombre
                  </option>
                  <option id="c" value="">
                    Mujer
                  </option>
                </Select>
                <FormErrorMessage>{formik.errors.sexo}</FormErrorMessage>
              </FormControl>
              <FormControl
                width="50%"
                id="fechaNacimientoUsuario"
                isInvalid={formik.errors.fechaNacimiento && formik.touched.fechaNacimiento}
              >
                <Input type="date" name="fechaNacimientoUsuario" onChange={formik.handleChange} />
                <FormErrorMessage>{formik.errors.fechaNacimientoUsuario}</FormErrorMessage>
              </FormControl>
            </HStack>
            {/* Contraseña */}
            <HStack mt={2} px={10} py={2}>
              <FormControl width="50%" id="passwordUsuario" isInvalid={formik.errors.password && formik.touched.password}>
                <Input placeholder="Contraseña" name="password" onChange={formik.handleChange} type={showPassword ? 'text' : 'password'} />
                <InputRightElement h="100%">
                  <Button onClick={handleClick}>{showPassword ? <ViewOffIcon /> : <ViewIcon />}</Button>
                </InputRightElement>
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              </FormControl>
              <FormControl
                width="50%"
                id="passwordConfirmacionUsuario"
                isInvalid={formik.errors.passwordConfirmation && formik.touched.passwordConfirmation}
              >
                <Input
                  placeholder="Confirmación de contraseña"
                  onChange={formik.handleChange}
                  type={showPassConfirmation ? 'text' : 'password'}
                />
                <InputRightElement h="100%">
                  <Button onClick={handleClickConf}>{showPassConfirmation ? <ViewOffIcon /> : <ViewIcon />}</Button>
                </InputRightElement>
                <FormErrorMessage>{formik.errors.passwordConfirmation}</FormErrorMessage>
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
              <Button type="submit" colorScheme="blue">
                Crear una cuenta
              </Button>
            </HStack>
          </form>
          {/* Link ingresar */}
          <Login />
        </Box>
      </Flex>
    </SimpleGrid>
  );
};

export default SignUp;
