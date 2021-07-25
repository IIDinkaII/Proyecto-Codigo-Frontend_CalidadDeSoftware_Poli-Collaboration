import React from 'react';
import { Box, Text, VStack, Heading, Flex, HStack } from '@chakra-ui/react';
import LeftBar from '../resources/leftBar';
import {FaClipboardList} from 'react-icons/fa';
import DenunciaItem from '../resources/denunciaItem';

const ListarDenuncias = () => {
    
    //state = {}

    return(
        <>
        <LeftBar icono = {FaClipboardList} listaAcciones="Gestionar Denuncias"/>
        <VStack p={20} width="100%">
            <Heading as="h1" pb={20}>Seleccione una denuncia</Heading>
            {/* Denuncia */}
            <DenunciaItem titulo={"titulo"} fecha={"12/12/2000"} autor={"autor"} tipo={"tipo"} estado={"estado"} hechos={"hechos"}/>
        </VStack>
        </>
    )
}

export default ListarDenuncias;