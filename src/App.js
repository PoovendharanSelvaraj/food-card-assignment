import { Filters } from "./components/Filters";
import { Navbar } from "./components/Navbar";
import { Offers } from "./components/Offers";
import { Restaurants } from "./components/Restaurants";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Offers />
      <Filters/>
      <Restaurants/>
    </div>
  );
}
