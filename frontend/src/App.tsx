// src/App.tsx
import './Styles/style.css';
import { MyRoutes } from './Components/Routes/MyRoutes';
import { Footer } from './Components/Footer/Footer';


function App() {
  return (
    <div className="layout">
      <div className="content">
        <MyRoutes />
      </div>
      <Footer/>
      {/*<Footer />*/}
    </div>
  );
}

export default App;
