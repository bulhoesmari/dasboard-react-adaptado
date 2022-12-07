import Sidebar from "../components/Sidebar";
import '../index.css'
import MainDash from '../components/MainDash';
import RightSide  from "../components/RightSide";



export default function Dashboard() {
  return (
    <>
     <div id="body">
      <div id="sidebar">
        <Sidebar/>
      </div>
      <div id="outlet">
        <MainDash />
      </div>
      <div id="rightside">
        <RightSide/>
      </div>
    </div>
    </>
  );
}