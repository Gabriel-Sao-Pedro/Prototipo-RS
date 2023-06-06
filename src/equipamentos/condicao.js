import'./components/CSS/condicao.css'


function  Condicao(props) {

    function handleLogin(e) {
        e.preventDefault()
        props.toggle()
    }
    return (
        <div className="popup">
            <div className="popup-inner">
                    <form onSubmit={handleLogin}>
                        <div className='condicao'>
                           <h2>Editar Condição do Console</h2>
                        </div>
                        <div className='condicao'>
                            <div >
                                <h3>Indorme a condição do console</h3>
                                <input type="radio" name='condicao' value="D" />Disponivel<br/>
                                <input type="radio" name='condicao' value="I"/>Indisponivel
                            </div>
                        </div>
                            
                    </form>
                
                    <div className='edicao'>
                        <ul>
                            <li><button className="editar">Confirmar</button> </li>
                            <li onClick={props.toggle}><button className="editar">Cancelar</button></li>
                        </ul>
                    </div>
   
            </div>
            
        </div>
    )
    
}
export default Condicao