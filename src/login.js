
import'./components/CSS/login.css'



export default function Login() {



  return (

    <div className='page'>

        <form   className="formLogin">
            <h1>Login</h1>
            <p>Digite os seus dados de acesso no campo abaixo.</p>
            <label for="email">Login</label>
              <input type="email" id='email'placeholder="Criar Login" autofocus="true"/>
              <label for="password">Senha</label>
              <input type="password" id='password' placeholder="Criar senha senha"/>
            <a href="">Esqueci minha senha</a>
            <a href="/cadastro">Cadatrar-se</a>
            <a className='bot' href="/">ACESSAR</a>
        </form>
    </div>

  );

}