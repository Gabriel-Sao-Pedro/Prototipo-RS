import'./components/CSS/home.css'

function Pagar(){
    return(
        <div >
            <div className="mapa">
                <div id='titu'>
                    <h1>Pagamento</h1>
                </div>
                
                <div> 
                    <form>
                        <div className='paga'>
                            <h2>Console selecionado: PS5</h2>
                        </div>
                                            
                        <h2>Tempo reservado: 240 Minutos</h2>
                        <div className='formp'>
                        <h3>Forma de Pagamento</h3>
                        <input type='radio' value='P'name="D"/>Pix<br/>
                        <input type='radio' value='D' name="D"/>Dinheiro<br/>
                        <input type='radio' value='CD' name="D"/>Cartão de Debito<br/>
                        <input type='radio' value='CC' name="D"/>Cartão de Credito<br/>
                       
                        </div>
                        
                    </form>
                    <div className='valor'>
                        <span>Valor total: R$20,00</span>
                    </div>
                    <div className='edicao3'>
                        <a  className='bot3' href="/pagamento">Confirmar</a>
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
export default Pagar