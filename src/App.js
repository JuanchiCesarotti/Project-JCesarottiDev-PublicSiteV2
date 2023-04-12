import "./App.css";
import Banner from "./components/Banner";
import bannerImage from "./images/test_banner_image.jpg";

function App() {
  return (
    <div>
      <Banner
        title="Mi título de banner"
        subtitle="Mi subtítulo de banner"
        image={bannerImage}
      />
      <h2>Bienvenido a mi aplicación de React</h2>
    </div>
  );
}

export default App;
