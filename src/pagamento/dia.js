import'./components/CSS/semana.css'


function Dia(props) {

    function handleLogin(e) {
        e.preventDefault()
        props.toggle()
    }
    return (
        <div className="popupd">
            <div className="popup-innerd">
                <div className='titulo'>
                    <h2>Caixa do Dia </h2>
                </div>
                    <form onSubmit={handleLogin}>
                        <table border="1">
                            <tr>
                                <th>Turno</th>
                                <th>Console</th>              
                                <th>Valor </th>
                            </tr>
            
                            <tr>
                                <td>Matutino</td>
                                <th>PS4</th>
                                <th>R$ 31,50</th>
                            </tr>
                            <tr>
                                <td>Vespertino </td>
                                <th>PS4</th>
                                <th>R$ 35,00</th>
                            </tr>
                            <tr>
                                <td>Noturno </td>
                                <th>PS4</th>
                                <th>R$ 27,00</th>
                            </tr>
                            <tr>
                                <td>Matutino</td>
                                <th>PS5</th>
                                <th>R$ 35,00</th>
                            </tr>
                            <tr>
                                <td>Vespertino </td>
                                <th>PS5</th>
                                <th>R$ 40,00</th>
                            </tr>
                            <tr>
                                <td>Noturno </td>
                                <th>PS5</th>
                                <th>R$ 40,00</th>
                            </tr>
            
                            <tr>
                                <td>Matutino</td>
                                <th>XBOX Serie S</th>
                                <th>R$ 22,50</th>
                            </tr>
                            <tr>
                                <td>Vespertino </td>
                                <th>XBOX Serie S</th>
                                <th>R$ 27,00</th>
                            </tr>
                            <tr>
                                <td>Noturno </td>
                                <th>XBOX Serie S</th>
                                <th>R$ 18,00</th>
                            </tr>
                            <tr>
                                <td>Matutino</td>
                                <th>XBOX Serie X</th>
                                <th>R$ 30,00</th>
                            </tr>
                            <tr>
                                <td>Vespertino </td>
                                <th>XBOX Serie X</th>
                                <th>R$ 25,00</th>
                            </tr>
                            <tr>
                                <td>Noturno </td>
                                <th>XBOX Serie X</th>
                                <th>R$ 35,00</th>
                            </tr>
                            <tr>
                                <td>Total </td>
                                <th colspan="2">R$ 366,00</th>
                            </tr>
                        </table>
                    </form>
                    <div className='edicao1'>
                        <input className='editar' type="submit" value="Imprimir"/>
                      <button onClick={props.toggle}>Cancelar</button>
                    </div>
            </div>
        </div>
    )
    
}
export default Dia