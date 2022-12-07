import "../index.css";

import { RiLayoutGridFill} from 'react-icons/ri';
import { RiSettings3Fill} from 'react-icons/ri';
import { BsPersonFill } from 'react-icons/bs';
import { MdInsights } from 'react-icons/md';
import { MdOutlineInventory } from 'react-icons/md';
import { MdLogout } from 'react-icons/md';
import { NavLink } from "react-router-dom";


export default function Sidebar() {
    return (
        <>
        
        
 
        <aside>
            
            <div class="top">
                <div class="logo">
                    <img id="logo-dash" src="src\images\logo.png"/>
                    <h2 id="ustore"><span class="ustore">Ust</span><span class="yellow ustore">ore</span></h2>
                </div>
                <div class="close" id="close-btn">
                    <span class="material-icons-sharp">close</span>
                </div>
            </div>
    
       
            <div class="sidebar">
                <a onclick="dashboard()" class="active"> 
                    <span > <RiLayoutGridFill/> </span>
                    <h3>Dashboard</h3>
                </a>
                
                
                    <NavLink href="src\routes\Settings.jsx"  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }>
                    <span class="material-icons-sharp"><RiSettings3Fill/></span>
                    <h3 onclick="">Configurações</h3>
                    </NavLink>
                
                <a href="#">
                    <span class="material-icons-sharp"><BsPersonFill/></span>
                    <h3>Clientes</h3>
                </a>
                <a href="#">
                    <span class="material-icons-sharp"><MdInsights/></span>
                    <h3>Análise</h3>
                </a>
                <a href="#">
                    <span class="material-icons-sharp"><MdOutlineInventory/></span>
                    <h3>Produtos</h3>
                </a>
               
                <a onclick="logout()">
                    <span class="material-icons-sharp"><MdLogout/></span>
                    <h3>Logout</h3>
                </a>
            
            </div>
        </aside>
        </>
        
    );
}