import Dia from './dia';
import Semana from './semana';
import Mes from './mes';
import'./components/CSS/pagamento.css'
import React, { useState} from 'react';




function Pagamento() {

    const [dia, setDia] = useState(false)
    const [semana, setSemana] = useState(false)
    const [mes, setMes] = useState(false)
    
    function toggleDia () {
      setDia(!dia);
    };
    function toggleSemana () {
        setSemana(!semana);
    };
    function toggleMes () {
        setMes(!mes);
    };


  return (
    <div>
      <div id="cabecalho">
            <div className="logo">
                <p id="titulo">LAN PLAY</p>
            </div>

            <div className="menu">
            <ul>
                    
                    <li><a href="/">HOME</a></li>
                    <li><a href="/equipamento">EQUIPAMENTOS</a></li>
                    <li><a href="/jogo">JOGOS</a></li>
                    <li><a href="/pagamento">PAGAMENTOS</a></li>
                    <li><img id="imag" src={require('./components/assets/WhatsApp Image 2023-05-21 at 03.16.52.jpeg')}/></li>
                    <li><a href="/login">SAIR</a></li>
                </ul>
            </div>
        </div>

        <div>
            <h2>Tabela de Preço</h2>
                <table>
                    <tr>
                        <th></th>
                        <th>PS4</th>
                        <th>PS5</th>
                        <th>XBOX SERIE S</th>
                        <th>XBOX SERIE X</th>
                    </tr>
                    <tr>
                        <th>Valor/Hora</th>
                        <td>R$ 4,50</td>
                        <td>R$ 5,00</td>
                        <td>R$ 4,50</td>
                        <td>R$ 5,00</td>
                    </tr>
                
                    
                </table>
            </div>
        <div>
            <h2>Caixa da Lan House </h2>
            <table border="1">
                <tr>
                    <th>SEÇÃO</th>
                    <th>Console</th>
                    <th>Tempo resesvado</th>              
                    <th>Valor Pago</th>
                    <th>Forma de Pagamento</th>
                </tr>

                <tr>
                    <td>A</td>
                    <th>PS4</th>
                    <th>180 Minutos</th>
                    <th>R$ 13,50</th>
                    <th>Cartão de Debito</th>
                </tr>

                <tr>
                    <td>A</td>
                    <th>XBOX Serie S</th>
                    <th>60 Minutos</th>
                    <th>R$ 4,50</th>
                    <th>PIX</th>
                </tr>
                <tr>
                    <td>B</td>
                    <th>PS4</th>
                    <th>180 Minutos</th>
                    <th>R$ 13,50</th>
                    <th>Cartão de Debito</th>
                </tr>
                <tr>
                    <td>B</td>
                    <th>PS5</th>
                    <th>120 Minutos</th>
                    <th>R$ 10,00</th>
                    <th>Cartão de Debito</th>
                </tr>

                <tr>
                    <td>B</td>
                    <th>XBOX Serie S</th>
                    <th>120 Minutos</th>
                    <th>R$ 9,00</th>
                    <th>PIX</th>
                </tr>


                <tr>
                    <td>B</td>
                    <th>XBOX Serie X</th>
                    <th>120 Minutos</th>
                    <th>R$ 10,00</th>
                    <th>PIX</th>
                </tr>

                <tr>
                    <td>C</td>
                    <th>PS4</th>
                    <th>60 Minutos</th>
                    <th>R$ 4,50</th>
                    <th>Dinheiro</th>
                </tr>
                <tr>
                    <td>C</td>
                    <th>XBOX Serie S</th>
                    <th>120 Minutos</th>
                    <th>R$ 9,00</th>
                    <th>PIX</th>
                </tr>
                <tr>
                    <td>C</td>
                    <th>XBOX Serie X</th>
                    <th>240 Minutos</th>
                    <th>R$ 20,00</th>
                    <th>Cartão de Credito</th>
                </tr>
              

                <tr>
                    <td>D</td>
                    <th>PS5</th>
                    <th>180 Minutos</th>
                    <th>R$ 15,00</th>
                    <th>Dinheiro</th>
                </tr>            

                <tr>
                    <td>E</td>
                    <th>PS5</th>
                    <th>240 Minutos</th>
                    <th>R$ 20,00</th>
                    <th>PIX</th>
                </tr>
            </table>
        </div>
        <div>
                        <h2>Caixa do Dia </h2>
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
                                <th>R$ 30,00</th>
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
                    </div>
                    <h2>Relatorios do Caixa</h2>
                    <div className='relatorio'>
                        
                        <div className='dia'>
                            
                            <h3>Diario</h3>
                            <div className='espaco'>
                                Relatorio do 
                                <select>
                                    <option value="Dia 1">Dia 1</option>
                                    <option value="Dia 2">Dia 2</option>
                                    <option value="Dia 3">Dia 3</option>
                                    <option value="Dia 4">Dia 4</option>
                                    <option value="Dia 5">Dia 5</option>
                                    <option value="Dia 6">Dia 6</option>
                                    <option value="Dia 7">Dia 7</option>
                                </select>
                            </div>
                            
                            <input type="submit" onClick={toggleDia} value="Cofirmar"/>
                        </div>
                        <div className='dia'>
                        
                            <h3>Semanal</h3>
                           <div className='espaco'>
                            Relatorio da
                                <select>
                                    <option value="Semana 1">Semana 1</option>
                                    <option value="Semana 2">Semana 2</option>
                                    <option value="Semana 3">Semana 3</option>
                                    <option value="Semana 4">Semana 4</option>
                                </select>
                            </div>
                            <input type="submit" onClick={toggleSemana} value="Cofirmar"/>
                        </div>
                        <div className='dia'>
                            <h3>Mensal</h3>
                            <div className='espaco'>
                                Relatorio do 
                                <select>
                                    <option value="mes 1">Mês 1</option>
                                    <option value="mes 2">Mês 2</option>
                                    <option value="mes 3">Mês 3</option>
                                    <option value="mes 4">Mês 5</option>
                                    <option value="mes 5">Mês 5</option>
                                    <option value="mes 6">Mês 6</option>
                                    <option value="mes 7">Mês 7</option>
                                    <option value="mes 8">Mês 8</option>
                                    <option value="mes 9">Mês 9</option>
                                    <option value="mes 10">Mês 10</option>
                                    <option value="mes 11">Mês 11</option>
                                    <option value="mes 12">Mês 12</option>
                                </select>
                            </div>
                            
                            <input  onClick={toggleMes} type="submit" value="Cofirmar"/>                           
                        </div>
                        {dia ? <Dia toggle={toggleDia}></Dia> : null} 
                        {semana ? <Semana toggle={toggleSemana}></Semana> : null}
                        {mes ? <Mes toggle={toggleMes}></Mes> : null}
                    </div>
                    
                    
                    
            <div class="rodape">
                <h4>TODOS OS DIREITOS RESERVADOS</h4>
            </div>
    </div>
  );
}

export default Pagamento;

                    