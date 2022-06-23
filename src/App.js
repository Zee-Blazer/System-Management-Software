
// Screens
import { HomeScreen } from "./Screen/home.screen";

// Components
import { HeaderComponent } from './Components/Header/header.component';

import { MainRouter } from "./route";

function App() {

  // DB.ref().set("HEllo ")

  return (
    <div className="App">
      <HeaderComponent />

      <MainRouter />
    </div>
  );
}

export default App;
