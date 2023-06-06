import'./components/CSS/semana.css'


function Mes(props) {

    function handleLogin(e) {
        e.preventDefault()
        props.toggle()
    }
    return (
        <div className="popupm">
            <div className="popup-innerm">
                <div className='titulo'>
                    <h2>Caixa do Mês</h2>
                </div>
                    <form onSubmit={handleLogin}>
                       
                    <table border="1">
                               <tr>
                                   <th>Semana</th>             
                                   <th>Valor </th>
                               </tr>
               
                               <tr>
                                <th>Semana 1</th>
                                <th>R$ 2.492,00</th>
                               </tr>
                              
                               <tr>
                                <th >Semana 2</th>
                                   <th>R$ 2.492,00</th>
                               </tr>   
                               <tr>
                                <th>Semana 3</th>
                                <th>R$ 2.492,00</th>
                               </tr>
                              
                               <tr>
                                <th >Semana 4</th>
                                   <th>R$ 2.492,00</th>
                               </tr>                    
                               <tr>
                                   <th>Total </th>
                                   <th colspan="2">R$ 9.968,00</th>
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
export default Mes