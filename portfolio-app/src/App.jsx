import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import kylePFP from './assets/kylepfp.jpg';
import LyndaPFP from './assets/lyndapfp.jpg';
import ProfilePic from './assets/pfp.png';
import NavigationMenu from "./MenubarDemo.jsx";
import MenubarDemo from "./MenubarDemo.jsx";


function App() {
  return (
    <div>
      <Header />
      <MenubarDemo/>
      <Card profilePic={kylePFP} name="Kyle Beck" description="I am making my website"  />
      <Card profilePic={LyndaPFP} name="Lynda Beck" description="I am so silly :3" />
      <Footer />
    </div>
  );
}

export default App;
