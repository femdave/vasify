import Navbar from "./components/Navbar/Navbar";
import Header from "./container/Header/Header";
import About from "./container/About/About";
import Reasons from "./components/Reasons/Reasons";
import Specialist from "./components/Specialist/Specialist";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./container/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Reasons />
      <Specialist />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
