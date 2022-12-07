import "../index.css";
import {MdAnalytics} from 'react-icons/md';
import { BsBarChartFill } from 'react-icons/bs';
import {AiFillPieChart} from 'react-icons/ai';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import "./dashboard";



export default function MainDash() {
    return (
        
        <body>
        <script src="src\components\dashboard.js" defer ></script>
        <main>
        <h1></h1>

        <div class="topdiv">
            <form id="form"> 
                <input type="file" id="file_input" accept=".csv"></input>
                <label for="file_input">Escolha um documento</label>
                <button type="submit" id="bt_upload" class="button">
                    <span class="button__icon">
                        <AiOutlineCloudUpload/>
                    </span>
                <span>
                    <span id="file_name">Nenhum documento selecionado</span>
                </span>
                </button>
            </form>
        </div>

        <div class="insights">
            
            <div id="box1" class="cursor" onclick="tabela_1()">
                <span class="material-icons-sharp"><MdAnalytics/></span>
                <div class="middle">
                    <div class="left">
                        <h3>Gastos diários</h3>
                        <div class="date" id="datadash1">
                            <input type="date" id="datadash2"/>
                        </div>
                        <h1 id="gastosDiarios"> $64</h1>
                    </div>
                    <div class="progress">
                        <div class="number">
                        </div>
                    </div>
                </div>
            </div>
            
        
            <div id="box2" class="cursor" onclick="tabela_2()">
            <div class="expenses">
                <span class="material-icons-sharp"><BsBarChartFill/></span>
                <div class="middle">
                    <div class="left">
                        <h3>Gastos mensais</h3>
                        <form><select class="meses" name="meses">
                            <option value="01">Janeiro</option>
                            <option value="02">Fevereiro</option>
                            <option value="03">Março</option>
                            <option value="04">Abril</option>
                            <option value="05">Maio</option>
                            <option value="06">Junho</option>
                            <option value="07">Julho</option>
                            <option value="08">Agosto</option>
                            <option value="09">Setembro</option>
                            <option value="10">Outubro</option>
                            <option value="11">Novembro</option>
                            <option value="12">Dezembro</option>
                          </select></form>
                          
                        <h1 id="gastosMes"> </h1>
                    </div>
                    <div class="progress">
                        <div class="number">

                        </div>
                    </div>
                </div>
            </div>
                <small class="text-muted"></small>
            </div>
            
            <div id="box3" class="cursor" onclick="tabela_3()"> 
            <div class="icome">
                <span class="material-icons-sharp"><AiFillPieChart/></span> 
                <div class="middle">
                    <div class="left">
                        <h3>Gastos provedores</h3>
                        <form><select class="meses" name="meses">
                            <option value="Jan">Janeiro</option>
                            <option value="Fev">Fevereiro</option>
                            <option value="Mar">Março</option>
                            <option value="Abr">Abril</option>
                            <option value="Mai">Maio</option>
                            <option value="Jun">Junho</option>
                            <option value="Jul">Julho</option>
                            <option value="Ago">Agosto</option>
                            <option value="Set">Setembro</option>
                            <option value="Out">Outubro</option>
                            <option value="Nov">Novembro</option>
                            <option value="Dez">Dezembro</option>
                          </select></form>
                        <h1>R$2.864</h1>
                    </div>
                    <div class="progress">
                        <img src="src\images\pie-chart.png" id="chartpie"/>
                    <div class="number">
                        </div>
                    </div>
                </div>
                <small class="text-muted"></small>
            </div>
        </div>
          
        </div>

     <div class=" dashcontent recent-orders" id="table4">
         <h2>Gastos por Produtos</h2>
         <table>
             <thead>
             <tr>
                 <th>Nome do Produto</th>
                 <th>Tipo</th>
                 <th>Ordem</th>
                 <th>Provedor</th>
                 <th></th>
             </tr>
            </thead>

           <tbody>
                <tr>
                    <td>Amazon VPC</td>
                    <td>Aniversary</td>
                    <td>#1</td>
                    <td class="warning">AWS</td>
                    <td class="primary">em uso</td>
                </tr>
                <tr>
                    <td>AWS CloudTrail</td>
                    <td>Aniversary</td>
                    <td>#2</td>
                    <td class="warning">AWS</td>
                    <td class="primary">em uso</td>
                </tr>
                <tr>
                    <td>Amazon Elastic Compute Cloud</td>
                    <td>Aniversary</td>
                    <td>#3</td>
                    <td class="warning">AWS</td>
                    <td class="primary">em uso</td>
                </tr>
                <tr>
                    <td>Amazon Dynamo DB</td>
                    <td>Aniversary</td>
                    <td>#4</td>
                    <td class="warning">AWS</td>
                    <td class="primary">em uso</td>
                </tr>
                <tr>
                    <td>Amazon Cloud Watch</td>
                    <td>Aniversary</td>
                    <td>#5</td>
                    <td class="warning">AWS</td>
                    <td class="primary">em uso</td>
                </tr>
                <tr>
                    <td>Amazon Systems Manager</td>
                    <td>Aniversary</td>
                    <td>#6</td>
                    <td class="warning">AWS</td>
                    <td class="primary">em uso</td>
                </tr>
            </tbody> 
         </table>
         
        </div>
        <div class=" dashcontent recent-orders" id="table1">
            <div id="background1">
            <canvas id="chart1" class="canvas"></canvas>
        </div>
           </div>

        <div class=" dashcontent recent-orders" id="table2">
            <div id="background2">
            <canvas id="chart2" class="canvas" hidden="hidden"></canvas>
        </div>
        </div>
           
      
        
       <div class=" dashcontent recent-orders" id="table3">
        <div id="background3">
        <canvas id="chart3" hidden="hidden"></canvas>
        </div>
        </div>
    </main> 
    
    <script src="src\components\dashboard.js"  ></script>
    </body>
    )

    

    
}
