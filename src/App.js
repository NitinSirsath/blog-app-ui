import Mainbg from "./components/Mainbg";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Cardmenu from "./components/Cardmenu";
import SideTab from "./components/SideTab";
import data from "./assets/data";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Mainbg />
      <Cardmenu />
      <div className="laptop-flex container justify-content-between">
        <div className="blog_content_wrapper">
          {data.map((ele) => {
            return <Card key={ele.tag} props={ele} />;
          })}
        </div>
        <div className="side_content_wrapper">
          <SideTab />
        </div>
      </div>
    </div>
  );
}

export default App;
