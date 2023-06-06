import'./components/CSS/reserva.css'


function Reserva(props) {

    function handleLogin(e) {
        e.preventDefault()
        props.toggle()
    }
    return (
        <div className="popup">
            <div className="popup-inner">
                <div className='titulo'>
                    <h2>Reserva</h2>
                </div>
                    <form onSubmit={handleLogin}>
                       
                        <div>
                            <div>
                                <h3>Escolha o período de tempo a ser reservado:</h3>
                
                                <select name="Consoles" >
                                    <option value="60">60</option>
                                    <option value="120">120</option>
                                    <option value="180">180</option>
                                    <option value="240">240</option>
                                    <option value="300">300</option>
                                    <option value="360">360</option>
                                </select>Minutos
                            </div>
                        </div>
                            
                    </form>
                
                    <div className='edicao1'>
                            <a className='bot1' href="/pagar">Reservar</a>
                            <a className='bot1' href="" onClick={props.toggle}>Cancelar</a>
                    </div>
   
            </div>
            
        </div>
    )
    
}
export default Reserva