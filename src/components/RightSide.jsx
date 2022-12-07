import "../index.css";
import { MdStackedLineChart } from 'react-icons/md';
import { MdInsights } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';
import {MdDarkMode} from 'react-icons/md';
import "./dashboard";


export default function RightSide() {
    return (
        
        <body>
            <script src="src\components\dashboard.js" defer ></script>
        <div class="right">
            <div class="top">
                 <button id="menu-btn">
                    <span class="material-icons-sharp"> menu </span>
                </button>
        <div class="theme-toggler">
        <span class="material-icons-sharp active"> <MdLightMode/> </span>
        <span class="material-icons-sharp"> <MdDarkMode/></span>
    </div>
    <div class="profile">
        <div class ="info">
            <p> Olá, <b> Usuário </b></p>
            <small class="text-muted">Admin</small>
        </div>
        <div class="profile-photo">
            <img src="src\images\profile-1.jpg" id="foto"/>
        </div>
    </div>
</div>

    

<div class="sales-analytics">
    <h2></h2>
    <div class="item online">
        <div class="icon">
            <span class="material-icons-sharp"><MdStackedLineChart/></span>
        </div>
        <div class="right">
            <div class="info">
                <h3>Amazon Virtual PC</h3>
                <small class="text-muted">últimas 24 horas</small>
            </div>
            <h5 class="success">+39%</h5>
            <h3>R$349</h3>
        </div>
    </div>
    <div class="item offline">
        <div class="icon">
            <span class="material-icons-sharp"><MdStackedLineChart/></span>
        </div>
        <div class="right">
            <div class="info">
                <h3>Amazon DynamoDB</h3>
                <small class="text-muted">últimas 24 horas</small>
            </div>
            <h5 class="danger">-17%</h5>
            <h3>R$100</h3>
        </div>
    </div>
    <div class="item Ccustomers">
        <div class="icon">
            <span class="material-icons-sharp"><MdStackedLineChart/></span>
        </div>
        <div class="right">
            <div class="info">
                <h3>Amazon CloudWatch</h3>
                <small class="text-muted">últimas 24 horas</small>
            </div>
            <h5 class="success">+39%</h5>
            <h3>R$49</h3>
        </div>
    </div>

    </div><br/><br/><br/>

    
    <div class="insights-r" onclick="tabela_4()">
        <h2></h2>
        <div id="box4" class="cursor">
            <span class="material-icons-sharp"><MdInsights/></span>
            <div class="middle">
                <div class="left">
                    <h3>Meta de consumo</h3>
                    <h1>R$524</h1>
                    
                </div>
                <div class="progress">
                    <svg>
                        <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div class="number">
                        <p>81%</p>
                    </div>
                </div>
            </div>
            <small class="text-muted"></small>
        </div>
    </div>
</div>

<script src="src\components\dashboard.js"  ></script>
</body>
    
)
}