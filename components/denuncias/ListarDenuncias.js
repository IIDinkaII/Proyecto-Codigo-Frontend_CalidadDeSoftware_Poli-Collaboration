import React from 'react';
import { Box, Text, VStack, Heading, Flex, HStack } from '@chakra-ui/react';
import LeftBar from '../resources/leftBar';
import {FaClipboardList} from 'react-icons/fa';
import DenunciaItem from '../resources/denunciaItem';

const ListarDenuncias = ({user}) => {
    return(
        <>
        <LeftBar icono = {FaClipboardList} user={user} listaAcciones="Gestionar Denuncias"/>
        <VStack p={20} width="100%">
            <Heading as="h1" pb={20}>Seleccione una denuncia</Heading>
            {/* Denuncia */}
            <DenunciaItem titulo={"titulo"} fecha={"12/12/2000"} autor={"autor"} tipo={"tipo"} estado={"GENERADO"} hechos={"hechos"}/>
            <DenunciaItem titulo={"titulo2"} fecha={"13/12/2000"} autor={"autor2"} tipo={"tipo2"} estado={"FINALIZADO"} hechos={"hechos2"}/>
            <DenunciaItem titulo={"titulo3"} fecha={"14/12/2000"} autor={"autor3"} tipo={"tipo3"} estado={"EN REVISIÓN"} hechos={"hechos3"}/>
        </VStack>
        </>
    )
}

export default ListarDenuncias;