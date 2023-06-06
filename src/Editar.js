import Tempo1 from './Tempo1'
import './components/CSS/reserva.css'

function Editar(props) {

    function handleLogin(e) {
        e.preventDefault()
        props.toggle()
    }

    return (
        <div className="popup1">
            <div className="popup-inner1">
                <div className='titulo'>
                    <h2>Reservado</h2>
                </div>
                    <form onSubmit={handleLogin}>
                        <div>
                            <div>
                                <h3>Tempo reservado</h3>
                                180 minutos
                            </div>
                            <div>
                                <h3>Tempo restante</h3>
                                <Tempo1></Tempo1>
                            </div>
                        </div>
                            
                    </form>
                
                    <div className='edicao1'>

                            <a className='bot1' href="/edicao">Editar</a>
                            <a className='bot1' href="" onClick={props.toggle}>Cancelar</a>
  
                    </div>
            </div>
        </div>
    )
}
export default Editar