import RegistrarDenuncia from '../components/denuncias/RegistrarDenuncia';
import ListarDenuncia from '../components/denuncias/ListarDenuncias';
import Header from '../components/resources/header';
import environment from '../utils/environment';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const Denuncias = () => {
  const [user, setUsuario] = useState({});

  const router = useRodenunciasuter();

  useEffect(() => {
    (async function () {
      const token = document.cookie.split('=')[1];
      const resp = await fetch(environment.api + '/auth/getuser', {
        headers: new Headers({
          Authorization: 'Bearer ' + token,
        }),
      }).catch((error) => {
        router.push('signup');
        console.error('Error:', error);
      });
      const user = await resp.json();
      setUsuario(user);
    })();
  }, []);

  if (Cookies.get('token')) {
    if (user) {
      return (
        <>
          <Header />
          {user.rol === 'estudiante' ? <RegistrarDenuncia user={user} /> : user.rol === 'moderador' ? <ListarDenuncia user={user} /> : ''}
        </>
      );
    } else {
      return <h1>Cargando tus datos</h1>;
    }
  } else {
    router.push('signup')
  }
};

export default Denuncias;
