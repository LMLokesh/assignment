import Navbar from "./components/Navbar";
import MainBlock from "./components/MainBlock";
import Content from "./components/Content";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <MainBlock />
      <hr className="empty-line" />
      <Content />
    </div>
  );
}