import "./App.scss"
import {

  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import MovieDetials from './component/MovieDetails/MovieDetials';
import PageNotFound from './component/pageNotFound/PageNotFound';
import Footer from './component/footer/Footer';
function App() {
  return (
    <div className="app">

      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imbID" element={< MovieDetials />} />
            <Route element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
