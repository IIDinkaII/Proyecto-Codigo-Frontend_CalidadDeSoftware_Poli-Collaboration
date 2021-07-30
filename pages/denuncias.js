
import RegistrarDenuncia from "../components/denuncias/RegistrarDenuncia";
import ListarDenuncia from "../components/denuncias/ListarDenuncias"
import Header from '../components/resources/header'

const Denuncias = () => {
    let usuario = {
        correoElectronico: '',
        role: 'estudiante'
    };

    return(
        <>
        <Header />
        {
            usuario.role === 'estudiante' ?
                <RegistrarDenuncia />
            :
                <ListarDenuncia /> 
        }
        </>
    )
}

export default Denuncias