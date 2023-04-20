import './App.scss';
import HeaderApp from './Header/HeaderApp';
import BodyApp from './Body/BodyApp'
import FooterApp from './Footer/FooterApp';
function App() {
  return (
    <div className="App">
      <HeaderApp/>
      <BodyApp/>
      <FooterApp/>
    </div>
  );
}

export default App;
