import "./main.scss";
import News from "./Components/News";
import Navbar from "./Components/Navbar";
import AddForm from "./Components/AddForm";
import Footer from "./Components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import NewsFilter from "./Components/NewsFilter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="twice">
        <div className="once">
          <News />
        </div>
        <NewsFilter />
        <AddForm />
        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
