import'./components/CSS/jogo.css'
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image1 from'./components/assets/Batman.jpg'
import Image2 from'./components/assets/HZD.jpg'
import Image3 from'./components/assets/Rd2.jpg'
import Image4 from'./components/assets/F23.jpg'
import Image5 from'./components/assets/UFC4.jpg'
import Image6 from'./components/assets/F4.jpg'
import Image7 from'./components/assets/FORT.jpg'
import Image8 from'./components/assets/ASSV.jpg'

import Image10 from'./components/assets/f1.jpg'
import Image11 from'./components/assets/NBA.jpg'
import Image12 from'./components/assets/TLOU2.jpg'
import Image13 from'./components/assets/GV.jpg'


const images = [Image1, Image2, Image3, Image4, Image5, Image6,Image7, Image8, Image10, Image11, Image12, Image13]
function Jogo() {
  const carrosel = useRef();
  const [width, setWidth] = useState(0)


  useEffect(() => {
      console.log(carrosel.current?.scrollWidth, carrosel.current?.offsetWidth)
      setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth)
  }, [])



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
                    <li><a href="./jogo">JOGOS</a></li>
                    <li><a href="/pagamento">PAGAMENTOS</a></li>
                    <li><img id="imag" src={require('./components/assets/WhatsApp Image 2023-05-21 at 03.16.52.jpeg')}/></li>
                    <li><a href="/login">Sair</a></li>
                </ul>

                
            </div>
        </div>
        <h2>Catálogo de jogos</h2>
          <div>
            <h3 className="ps4">PS4</h3>
            <motion.div ref={carrosel} className="carrosel" whileTap={{cursor: "grabbing"}}>
              <motion.div className="inerte" drag="x" dragConstraints = {{right: 0, left: -width}}>
                  {images.map(image => (
                    <motion.div className="item" key={image}>
                      <img src={image} alt="Texto alt"></img>
                    </motion.div>
                  ))}
              </motion.div>
            </motion.div>
          </div>
          <div>
            <h3 className="ps5">PS5</h3>
            <motion.div ref={carrosel} className="carrosel" whileTap={{cursor: "grabbing"}}>
              <motion.div className="inerte" drag="x" dragConstraints = {{right: 0, left: -width}}>
                  {images.map(image => (
                    <motion.div className="item" key={image}>
                      <img src={image} alt="Texto alt"></img>
                    </motion.div>
                  ))}
              </motion.div>
            </motion.div>
          </div>
          <div>
            <h3 className="xs">XBOX SERIES S</h3>
            <motion.div ref={carrosel} className="carrosel" whileTap={{cursor: "grabbing"}}>
              <motion.div className="inerte" drag="x" dragConstraints = {{right: 0, left: -width}}>
                  {images.map(image => (
                    <motion.div className="item" key={image}>
                      <img src={image} alt="Texto alt"></img>
                    </motion.div>
                  ))}
              </motion.div>
            </motion.div>
          </div>
          <div className='fim'>
            <h3 className="xx">XBOX SERIES X</h3>
            <motion.div ref={carrosel} className="carrosel" whileTap={{cursor: "grabbing"}}>
              <motion.div className="inerte" drag="x" dragConstraints = {{right: 0, left: -width}}>
                  {images.map(image => (
                    <motion.div className="item" key={image}>
                      <img src={image} alt="Texto alt"></img>
                    </motion.div>
                  ))}
              </motion.div>
            </motion.div>
          </div>
          <div className='fim'>
            <h2>Jogos Disponiveis</h2>
            <table border="1">
                <tr>
                    <th></th>
                    <th>PS4</th>
                    <th>PS5</th>
                    <th>XBOX SERIE S</th>
                    <th>XBOX SERIE X</th>
                </tr>
             
                
                <tr>
                    <td rowspan="12">Nome/Unidades</td>
                    <td>THE LAST OF US II (5)</td>
                    <td>RED DEAD REDEMPTION II (5)</td>
                    <td>HORIZON (5)</td>
                    <td>GTA V (5)</td>

                </tr>
                <tr>
                    <td>GTA V (5)</td>
                    <td>HORIZON (5)</td>
                    <td>RED DEAD REDEMPTION II (5)</td>
                    <td>THE LAST OF US II (5)</td>

                </tr>
                <tr>
                    <td>RED DEAD REDEMPTION II (5)</td>
                    <td>THE LAST OF US II ( 5)</td>
                    <td>GTA V (5)</td>
                    <td>HORIZON (5)</td>
                </tr>
                <tr>
                    <td>HORIZON (5)</td>
                    <td>GTA V (5)</td>
                    <td>THE LAST OF US II (5)</td>
                    <td>RED DEAD REDEMPTION II (5)</td>

                </tr>
                <tr>
                    <td>UFC 4 (5)</td>
                    <td>FORTNITE (5)</td>
                    <td>ASSASSINS CREED VALHALLA (5)</td>
                    <td>NBA 23 (5)</td>
                </tr>
                <tr>
                    <td>FORTNITE (5)</td>
                    <td>UFC 4 (5)</td>
                    <td>NBA 23 (5)</td>
                    <td>ASSASSINS CREED VALHALLA (5)</td>
                </tr>
                <tr>
                    <td>ASSASSINS CREED VALHALLA (5)</td>
                    <td>NBA 23 (5)</td>
                    <td>FORTNITE (5)</td>
                    <td>UFC 4 (5)</td>
                </tr>
                <tr>
                    <td>NBA 23 (5)</td>
                    <td>ASSASSINS CREED VALHALLA (5)</td>
                    <td>UFC 4 (5)</td>
                    <td>FORTNITE (5)</td>
                </tr>
                <tr>
                    <td>BATMAN (5)</td>
                    <td>FIFA 23 (5)</td>
                    <td>FORMULA 1 23 (5)</td>
                    <td>FORZA 4 (5)</td>
                </tr>
                <tr>
                    <td>FIFA 23 (5)</td>
                    <td>BATMAN (5)</td>
                    <td>FORZA 4  (5)</td>
                    <td>FORMULA 1 23 (5)</td>
                </tr>
                <tr>
                    <td>FORZA 4 (5)</td>
                    <td>FORMULA 1 23 (5)</td>
                    <td>FIFA 23 (5)</td>
                    <td>BATMAN (5)</td>
                </tr>
                <tr>
                    <td>FORMULA 1 23 (5)</td>
                    <td>FORZA 4 (5)</td>
                    <td>BATMAN (5)</td>
                    <td>FIFA 23 (5)</td>
                </tr>               
                <tr>
                    <th>TOTAL</th>
                    <th>60</th>
                    <th>60</th>
                    <th>60</th>
                    <th>60</th>


                </tr>
            </table>
          </div>
          <div>
          <div className='fim'>
            <h2>Adicionar Jogo</h2>
              <form>
     
                      <h3>Console
                            <select name="Consoles" >
                                <option value=""></option>
                                <option value="PS4">PS4</option>
                                <option value="PS5">PS5</option>
                                <option value="XBOX X">XBOX X</option>
                                <option value="XBOX S">XBOX S</option>
                            </select>
                      </h3>
                      <h3><label for="nm">Nome do jogo</label> <input type="text" placeholder=" Qual jogo a ser adicionado?" id="nm"></input></h3>
                            <h3><label for="ad">Quantidade de jogos</label> <input type="number"  placeholder='0' id='ad' min={1} max={5}/></h3>
                    <br/>
                    <input type="submit" value="confirmar"/>
              </form> 
          </div>
          <div className='fim'>
            <h2>Remover Jogo</h2>
            <form>
                      <h3>Console
                            <select name="Consoles" >
                                <option value=""></option>
                                <option value="PS4">PS4</option>
                                <option value="PS5">PS5</option>
                                <option value="XBOX X">XBOX X</option>
                                <option value="XBOX S">XBOX S</option>
                            </select>
                      </h3>
                      <h3><label for="nm1">Nome do jogo</label> <input type="text" placeholder=" Qual jogo a ser removido?" id="nm1"></input></h3>
                      <h3><label for="ad1">Quantidade de jogos</label> <input type="number"  placeholder='0' id='ad1' min={1} max={5}/></h3>
                    <br/>
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

export default Jogo;
