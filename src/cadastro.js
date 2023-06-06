import './components/CSS/cadastro.css'

export default function Cadastro() {

    return (
  
      <div >
           <div className='mapa'>
            <h1 id='titu'>Cadastro</h1>
                <h2>Digite os seus dados de acesso no campo abaixo.</h2>
      
                <label for="nome">Nome</label> <input  className='cadastro' id='nome' placeholder='Informe seu nome' type='text'/><br/><br/>
                <label for='email'>Email</label><input className='cadastro' type='email' placeholder='Informe seu email' id='email'/>
                
                <div>
                    <h2>Cadastro do funcionario</h2>
                    <label for='senha'>Senha</label><input className='cadastro' type='password' placeholder='Crie uma senha' id='senha'/> <br/><br/>
                    <label for='login'>Login</label><input className='cadastro' type='email' placeholder='Crie seu login' id='login'/><br/> 
                    <br/><br/>Sexo:<br/>
                    <input type='radio' name='sexo' value='M'/>Masculino<br/>
                    <input type='radio' name='sexo' value='F'/>Feminino
                </div>
                <a className='bot2' href="/login">CADASTRAR</a>
            </div>
            
            <div class="rodape">
                <h4>TODOS OS DIREITOS RESERVADOS</h4> 
            </div>
    
      </div>
  
    );
  
  }