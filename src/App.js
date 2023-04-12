import "./App.css";
import Banner from "./components/Banner";
import WhatiDo from "./components/WhatiDo";
import MyNavbar from "./components/NavBar";
import bannerImage from "./images/test_banner_image.png";

function App() {
  return (
    <div>
      <MyNavbar></MyNavbar>
      <Banner
        title="Juan Cesarotti"
        subtitle="FullStack Developer & Scrum "
        image={bannerImage}
      />
      <WhatiDo></WhatiDo>
    </div>
  );
}

export default App;
