import './components/CSS/reserva.css'
function Indisponivel(props) {

    function handleLogin(e) {
        e.preventDefault()
        props.toggle()
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                    <form onSubmit={handleLogin}>
                        <div className='titulo'>
                            <h2>Console Indisponivel</h2>
                        </div>
                        <div className="infor">
                            <h1>O console esta quebrado</h1>
                        </div>
                    </form>
                    <div className="edicao4">
                        <button onClick={props.toggle} className="cancelar">cancelar</button>
                    </div>
                        
            </div>
        </div>
    )
}
export default Indisponivel