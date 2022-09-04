import "./styles.css";
import AboutMyself from "./components/AboutMyself.js";
export default function App() {
  const btnclick = () =>
    //creating a function and pass to button
    {
      alert("hii Rutuja you click button welcome to React");
    };

  return (
    <div className="App">
      <AboutMyself />{" "}
      {/*here we take it from component  all remaing component import in this componenet*/}
    </div>
  );
}
