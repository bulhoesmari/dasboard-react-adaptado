import Sidebar from "../components/Sidebar";
import '../index.css'
export default function Settings() {
    return (
        <>
     <div id="body">
      <div id="sidebar">
        <Sidebar/>
      </div>
      <div id="outlet">
        <Settings/>
      </div>
      
    </div>
    </>
    )
}