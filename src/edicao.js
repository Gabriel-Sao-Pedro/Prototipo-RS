import'./components/CSS/home.css'
import Tempo from './Tempo'

function Edicao(){
    return(
        <div >
            <div className="mapa" >
            <div id='titu'>
                    <h1>Edição de tempo</h1>
                </div>
                    <div className='b'>
                        
                        <div>
                            <div>
                                <h3>Tempo reservado</h3>
                                180 minutos
                            </div>
                            <div>
                                <h3>Tempo restante</h3>
                                <Tempo></Tempo>
                            </div>
                        </div>
                    </div>

                            <div className="mapa">
                                <h3 className='a'>Adicionar tempo</h3>
                                   
                                <h3>Escolha o período de tempo a ser adicionado: 
                                    <select name="Consoles" >
                                        <option value="60">60</option>
                                        <option value="120">120</option>
                                        <option value="180">180</option>
                                        <option value="240">240</option>
                                        <option value="300">300</option>
                                        <option value="360">360</option>
                                    </select>minutos
                                </h3>
                                <div className='edicao2'>
                                
                                    <a href="/pagamento" className='bot3'>Confirmar</a>
                                    <a href="/" className='bot3'>Cancelar</a>
                                </div>

                            </div>
                                    
                                                                     
                                <div className="mapa">
                                    <h3 className='a'>Remover tempo</h3>
                                        
                                    <h3>Escolha o período de tempo a ser removido: 
                                        <select name="Consoles" >
                                            <option value="60">60</option>
                                            <option value="120">120</option>
                                            <option value="180">180</option>
                                            <option value="240">240</option>
                                            <option value="300">300</option>
                                            <option value="360">360</option>
                                        </select>minutos
                                    </h3>
                                    <div className='edicao2'>
                                        <a className='bot3' href="/pagamento">Confirmar</a>
                                        <a href="/" className='bot3'>Cancelar</a>
                                    </div>

                                </div>
                                <div className="mapa">
                                    <h3 className='a'>Problemas com o tempo</h3>
                                        <input type='radio' value='P'name="D"/><span>Cancelar Tempo</span><br/>
                                        <input type='radio' value='D' name="D"/><span>Reiniciar Tempo</span><br/><br/>
                                   
                                         <div>
                                            Motivo <br/>
                                            <textarea name="" id="" cols="60" rows="10"></textarea>
                                        </div>
                                    <div className='edicao2'>
                                        <a className='bot3' href="/pagamento">Confirmar</a>
                                        <a href="/" className='bot3'>Cancelar</a>
                                    </div>

                                </div> 
                                        
            </div>
            <div class="rodape">
                <h4>TODOS OS DIREITOS RESERVADOS</h4>
          </div>
        </div>
    )
}
export default Edicao