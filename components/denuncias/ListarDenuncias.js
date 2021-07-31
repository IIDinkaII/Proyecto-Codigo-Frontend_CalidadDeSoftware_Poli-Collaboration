import React, { useState, useEffect } from 'react';
import { Box, Text, VStack, Heading, Flex, HStack } from '@chakra-ui/react';
import LeftBar from '../resources/leftBar';
import { FaClipboardList } from 'react-icons/fa';
import DenunciaItem from '../resources/denunciaItem';
import environment from '../../utils/environment';

function ListarDenuncias({ user }) {
  const [denuncias, setDenuncias] = useState(null);
  let ejemplo = 'chucasdasdsadsadsadha';
  useEffect(() => {
    (async function () {
      const token = document.cookie.split('=')[1];
      const resp = await fetch(environment.api + '/denuncia', {
        headers: new Headers({
          Authorization: 'Bearer ' + token,
        }),
      });
      const respDenuncias = await resp.json();
      setDenuncias(respDenuncias);
      console.log(respDenuncias)
    })();
  }, []);

  if (denuncias) {
    return (
      <>
        <HStack>
          <LeftBar icono={FaClipboardList} user={user} listaAcciones="Gestionar Denuncias" />
          <VStack p={20} width="80%">
            <Heading as="h1" pb={20}>
              Seleccione una denuncia
            </Heading>
            {denuncias.map((denuncia, i) => (
              <DenunciaItem
                id={i}
                titulo={`${i+1}) ${denuncia.modoCanal} - ${denuncia.estado}`}
                fecha={denuncia.fechaCreacion}
                autor={denuncia.usuario}
                tipo={denuncia.modoCanal}
                estado={denuncia.estado.toUpperCase()}
                hechos={denuncia.descripcionHechos}
              />
            ))}
          </VStack>
        </HStack>
      </>
    );
  } else {
    return <h1>No hay denuncias</h1>;
  }
}

export default ListarDenuncias;
