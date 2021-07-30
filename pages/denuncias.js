import RegistrarDenuncia from '../components/denuncias/RegistrarDenuncia';
import ListarDenuncia from '../components/denuncias/ListarDenuncias';
import Header from '../components/resources/header';
import environment from '../utils/environment';
import { useState, useEffect } from 'react';

const Denuncias = () => {
  const [user, setUsuario] = useState({});

  useEffect(() => {
    (async function () {
      const token = document.cookie.split('=')[1];
      const resp = await fetch(environment.api + '/auth/getuser', {
        headers: new Headers({
          Authorization: 'Bearer ' + token,
        }),
      });
      const user = await resp.json();
      setUsuario(user);
      console.log(user);
    })();
  }, []);

  if (user) {
    return (
      <>
        <Header />
        {user.rol === 'estudiante' ? <RegistrarDenuncia user={user} /> : user.rol === 'moderador' ? <ListarDenuncia /> : ''}
      </>
    );
  } else {
    return <h1>Cargando tus datos</h1>;
  }
};

export default Denuncias;
