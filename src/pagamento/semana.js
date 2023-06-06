import'./components/CSS/semana.css'


function Semana(props) {

    function handleLogin(e) {
        e.preventDefault()
        props.toggle()
    }
    return (
        <div className="popups">
            <div className="popup-inners">
                <div className='titulo'>
                    <h2>Caixa da Semana</h2>
                </div>
                    <form onSubmit={handleLogin}>
                    
                           <table border="1">
                               <tr>
                                   <th >Dia</th>
                                   <th>Turno</th>              
                                   <th>Valor </th>
                               </tr>
               
                               <tr>
                                <th rowSpan="3">Dia 1</th>
                                   <td>Matutino</td>
                                   <th>R$ 118,00</th>
                               </tr>
                               <tr>
                                   <td>Vespertino </td>
                                   <th>R$ 118,00</th>
                               </tr>
                               <tr>
                                   <td>Noturno </td>
                                   <th>R$ 120,00</th>
                               </tr>
                               <tr>
                                <th rowSpan="3">Dia 2</th>
                                   <td>Matutino</td>
                                   <th>R$ 118,00</th>
                               </tr>
                               <tr>
                                   <td>Vespertino </td>
                                   <th>R$ 118,00</th>
                               </tr>
                               <tr>
                                   <td>Noturno </td>
                                   <th>R$ 120,00</th>
                               </tr>
                               <tr>
                                <th rowSpan="3">Dia 3</th>
                                   <td>Matutino</td>
                                   <th>R$ 118,00</th>
                               </tr>
                               <tr>
                                   <td>Vespertino </td>
                                   <th>R$ 118,00</th>
                               </tr>
                               <tr>
                                   <td>Noturno </td>
                                   <th>R$ 120,00</th>
                               </tr>
                               <tr>
                                <th rowSpan="3">Dia 4</th>
                                   <td>Matutino</td>
                                   <th>R$ 118,00</th>
                               </tr>
                               <tr>
                                   <td>Vespertino </td>
                                   <th>R$ 119,00</th>
                               </tr>
                               <tr>
                                   <td>Noturno </td>
                                   <th>R$ 119,00</th>
                               </tr>
                               <tr>
                                <th rowSpan="3">Dia 5</th>
                                   <td>Matutino</td>
                                   <th>R$ 119,00</th>
                               </tr>
                               <tr>
                                   <td>Vespertino </td>
                                   <th>R$ 118,00</th>
                               </tr>
                               <tr>
                                   <td>Noturno </td>
                                   <th>R$ 119,00</th>
                               </tr>
                               <tr>
                                <th rowSpan="3">Dia 6</th>
                                   <td>Matutino</td>
                                   <th>R$ 118,00</th>
                               </tr>
                               <tr>
                                   <td>Vespertino </td>
                                   <th>R$ 119,00</th>
                               </tr>
                               <tr>
                                   <td>Noturno </td>
                                   <th>R$ 119,00</th>
                               </tr>
                               <tr>
                                <th rowSpan="3">Dia 7</th>
                                   <td>Matutino</td>
                                   <th>R$ 119,00</th>
                               </tr>
                               <tr>
                                   <td>Vespertino </td>
                                   <th>R$ 118,00</th>
                               </tr>
                               <tr>
                                   <td>Noturno </td>
                                   <th>R$ 119,00</th>
                               </tr>
                               <tr>
                                   <th>Total </th>
                                   <th colspan="2">R$ 2.492,00</th>
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
export default Semana