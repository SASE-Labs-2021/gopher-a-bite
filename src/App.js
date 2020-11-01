import logo from './logo.svg';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import RestaurantPreview from './Components/RestaurantPreview';
import AltPreview from './Components/AltPreview';
import PracticePreview from './Components/PracticePreview';
import './bootstrap.css';
function App() {
  return (
    <div className="App">

      <NavigationBar /> 
      <RestaurantPreview/>
      <AltPreview />
      <PracticePreview />
      Created by SASE Labs 2020-2021 
    </div>
  );
}

export default App;
