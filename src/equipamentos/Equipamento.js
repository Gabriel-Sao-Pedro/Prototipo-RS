import React, { useState} from 'react';
import Condicao from './condicao';
import'./components/CSS/equipamento.css'



function EQUIPAMENTO() {
  const [condicao, setCondicao] = useState(false)

    
  function toggleCondicao () {
      setCondicao(!condicao);
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
        <h2>Equipamentos</h2>
        <div className='mapa'>
          <ul>
              <h3>PS4</h3>
                    <li>
                      <div className='disponivel' onClick={toggleCondicao}>
                        <p>
                          Seção A<br/>
                          PS4<br/>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='disponivel' onClick={toggleCondicao}>
                        <p>
                          Seção B<br/>
                          PS4<br/>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='disponivel' onClick={toggleCondicao}>
                        <p>
                          Seção C<br/>
                          PS4<br/>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='indisponivel' onClick={toggleCondicao} >
                      <p>
                          Seção D<br/>
                          PS4<br/>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='disponivel' onClick={toggleCondicao}>
                        <p>
                          Seção E<br/>
                          PS4<br/>
                        </p>
                      </div>
                    </li>
                    <div className='info' >
                      <span className='einfo'>Total de Consoles: 5</span>
                      <span className='dinfo'>Consoles Indisponiveis: 1</span>
                    </div> 
                            
          </ul>
          <ul>
              <h3>PS5</h3>
                    <li>
                      <div className='disponivel' onClick={toggleCondicao} >
                      <p>
                          Seção A<br/>
                          PS5<br/>
                        </p>
                      </div>
                    </li>                    
                    <li>
                      <div className='disponivel' onClick={toggleCondicao}>
                        <p>
                          Seção B<br/>
                          PS5<br/>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='disponivel' onClick={toggleCondicao} >
                        <p>
                          Seção C<br/>
                          PS5<br/>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='disponivel' onClick={toggleCondicao}>
                        <p>
                          Seção D<br/>
                          PS5<br/>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='disponivel' onClick={toggleCondicao}>
                        <p>
                          Seção E<br/>
                          PS5<br/>
                        </p>
                      </div>
                    </li>       
                    <div className='info'>
                      <span className='einfo'>Total de Consoles: 5</span>
                      <span className='dinfo'> Consoles Indisponiveis: 0</span>
                    </div>                      
          </ul>
          <ul> 
            <h3>XBOX SERIES S</h3>
                  <li>
                      <div className='disponivel' onClick={toggleCondicao}>
                      <p>
                          Seção A<br/>
                          XBOX SERIES S<br/>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='disponivel' onClick={toggleCondicao}>
                      <p>
                          Seção B<br/>
                          XBOX SERIES S<br/>
                        </p>
                      </div>
                    </li>                  
                    <li>
                      <div className='disponivel' onClick={toggleCondicao}>
                        <p>
                          Seção C<br/>
                          XBOX SERIES S<br/>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='disponivel' onClick={toggleCondicao} > 
                        <p>
                          Seção D<br/>
                          XBOX SERIES S<br/>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='disponivel' onClick={toggleCondicao}>
                        <p>
                          Seção E<br/>
                          XBOX SERIES S<br/>
                        </p>
                      </div>
                    </li>         
                    <div className='info'>
                      <span className='einfo'>Total de Consoles: 5</span>
                      <span className='dinfo'> Consoles Indisponiveis: 0</span>
                    </div> 
          </ul>
          <ul>
                <h3>XBOX SERIES X</h3>
                    <li>
                      <div className='disponivel' onClick={toggleCondicao}  >
                      <p>
                          Seção A<br/>
                          XBOX SERIES X<br/>
                        </p>
                      </div>
                    </li> 
                    <li>
                      <div className='disponivel' onClick={toggleCondicao}>
                        <p>
                          Seção B<br/>
                          XBOX SERIES X<br/>
                        </p>
                      </div>
                    </li>  
                    <li>
                      <div className='disponivel' onClick={toggleCondicao}>
                        <p>
                          Seção C<br/>
                          XBOX SERIES X<br/>
                        </p>
                      </div>
                    </li>    
                    <li>
                      <div className='disponivel' onClick={toggleCondicao}>
                        <p>
                          Seção D<br/>
                          XBOX SERIES X<br/>
                        </p>
                      </div>
                    </li>    
                    <li>
                      <div className='indisponivel' onClick={toggleCondicao}>
                        <p>
                          Seção E<br/>
                          XBOX SERIES X<br/>
                        </p>
                      </div>
                    </li>    
                    <div className='info'>
                      <span className='einfo'>Total de Consoles: 5</span>
                      <span className='dinfo'>Consoles Indisponiveis: 1</span>
                    </div>                    
          </ul>           
            {condicao? <Condicao toggle={toggleCondicao}></Condicao> : null}
        </div>
        <div>
          <div className='fim'>
            <h2>Adicionar Console</h2>
              <form>
                      <h3>Consoles
                            <select name="Consoles" >
                                <option value=""></option>
                                <option value="PS4">PS4</option>
                                <option value="PS5">PS5</option>
                                <option value="XBOX X">XBOX X</option>
                                <option value="XBOX S">XBOX S</option>
                            </select>
                      </h3>
                            <h3><label for="ad">Quantidade de equipamentos</label> <input type="number"  placeholder='0' id='ad' min={1} max={5}/></h3>
                    <br/>
                    <input type="submit" value="confirmar"/>
              </form> 
          </div>
          <div className='fim'>
            <h2>Remover Console</h2>
            <form>
                      <h3>Consoles
                            <select name="Consoles" >
                                <option value=""></option>
                                <option value="PS4">PS4</option>
                                <option value="PS5">PS5</option>
                                <option value="XBOX X">XBOX X</option>
                                <option value="XBOX S">XBOX S</option>
                            </select>
                      </h3>
                      <h3>Seção
                            <select name="Seção" >
                                <option value=""></option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                            </select>
                      </h3>
                    <input type="submit" value="confirmar"/>
            </form>      
          </div>
        </div>
        <div class="rodape">
                <h4>TODOS OS DIREITOS RESERVADOS</h4>
        </div>
    </div>
  );
}

export default EQUIPAMENTO;
