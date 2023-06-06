import React, { useState} from 'react';
import Reserva from './reserva';
import Indisponivel from './Indisponivel';
import Editar from './Editar';
import'./components/CSS/home.css'




function Home() {



  const [reserva, setReserva] = useState(false)
  const [editar, setEditar] = useState(false)
  const [indisponivel, setIndisponivel] = useState(false)
    
  function toggleEditar () {
      setEditar(!editar);
  };
  function toggleReserva () {
    setReserva(!reserva);
  };
  function toggleIndisponivel () {
    setIndisponivel(!indisponivel);
  };
  return (
    <div className='Corpo'>
      <div id="cabecalho">
            <div className="logo">
                <p id="titulo">LAN PLAY</p>
            </div>

            <div className="menu">
          
                  <ul>
                    
                      <li><a href="/">HOME</a></li>
                      <li><a href="/equipamento">EQUIPAMENTOS</a></li>
                      <li><a href="/jogos">JOGOS</a></li>
                      <li><a href="/pagamentos">PAGAMENTOS</a></li>
                      <li><img id="imag" src={require('./components/assets/WhatsApp Image 2023-05-21 at 03.16.52.jpeg')}/></li>
                      <li><a href="/login">SAIR</a></li>
                  </ul>

            </div>
        </div>
        <h2>Mapa da Lan House</h2>
        <div className='mapa'>
          <ul>
                    <li>
                      <div className='ocupado1' onClick={toggleEditar}>
                        <p>
                          Seção A<br/>
                          PS4<br/>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='disponivel1' onClick={toggleReserva} >
                      <p>
                          Seção A<br/>
                          PS5<br/>
                        </p>
                      </div>
                      
                    </li>
                    
                    <li>
                      <div className='ocupado1' onClick={toggleEditar}>
                      <p>
                          Seção A<br/>
                          XBOX SERIES S<br/>
                        </p>
                      </div>
                      
                    </li>
                    <li>
                      <div className='disponivel1' onClick={toggleReserva}  >
                      <p>
                          Seção A<br/>
                          XBOX SERIES X<br/>
                        </p>
                      </div>
                    </li> 
                                     
          </ul>
          <ul>
                    <li>
                      <div className='ocupado1' onClick={toggleEditar}>
                        <p>
                          Seção B<br/>
                          PS4<br/>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='ocupado1' onClick={toggleEditar}>
                        <p>
                          Seção B<br/>
                          PS5<br/>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='ocupado1' onClick={toggleEditar}>
                      <p>
                          Seção B<br/>
                          XBOX SERIES S<br/>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='ocupado1' onClick={toggleEditar}>
                        <p>
                          Seção B<br/>
                          XBOX SERIES X<br/>
                        </p>
                      </div>
                    </li>                    
          </ul>
          <ul>
                    <li>
                      <div className='ocupado1' onClick={toggleEditar}>
                        <p>
                          Seção C<br/>
                          PS4<br/>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='disponivel1' onClick={toggleReserva} >
                        <p>
                          Seção C<br/>
                          PS5<br/>
                        </p>
                      </div>
                    </li>
                    
                    <li>
                      <div className='ocupado1' onClick={toggleEditar}>
                        <p>
                          Seção C<br/>
                          XBOX SERIES S<br/>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='ocupado1' onClick={toggleEditar}>
                        <p>
                          Seção C<br/>
                          XBOX SERIES X<br/>
                        </p>
                      </div>
                    </li>                    
          </ul>
          <ul>
                    <li>
                      <div className='indisponivel1' onClick={toggleIndisponivel} >
                      <p>
                          Seção D<br/>
                          PS4<br/>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='ocupado1' onClick={toggleEditar}>
                        <p>
                          Seção D<br/>
                          PS5<br/>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='disponivel1' onClick={toggleReserva} > 
                        <p>
                          Seção D<br/>
                          XBOX SERIES S<br/>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='disponivel1' onClick={toggleReserva}>
                        <p>
                          Seção D<br/>
                          XBOX SERIES X<br/>
                        </p>
                      </div>
                    </li>                    
          </ul>
          <ul>
                    <li>
                      <div className='disponivel1' onClick={toggleReserva}>
                        <p>
                          Seção E<br/>
                          PS4<br/>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='ocupado1' onClick={toggleEditar}>
                        <p>
                          Seção E<br/>
                          PS5<br/>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='disponivel1' onClick={toggleReserva}>
                        <p>
                          Seção E<br/>
                          XBOX SERIES S<br/>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='indisponivel1' onClick={toggleIndisponivel}>
                        <p>
                          Seção E<br/>
                          XBOX SERIES X<br/>
                        </p>
                      </div>
                    </li>                    
          </ul>
            {editar ? <Editar toggle={toggleEditar}></Editar> : null} 
            {reserva ? <Reserva toggle={toggleReserva}></Reserva> : null}
            {indisponivel ? <Indisponivel toggle={toggleIndisponivel}></Indisponivel> : null}
        </div>
        <div class="rodape">
                <h4>TODOS OS DIREITOS RESERVADOS</h4>
    
          </div>
    </div>
  );
}

export default Home;
