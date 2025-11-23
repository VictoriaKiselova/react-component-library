import "./App.css";
import Input from "./components/Input/Input";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";
import Toast from "./components/Toast/Toast";

function App() {
  return (
    <div className="appContainer">
      <Input />
      <Toast />
      <SidebarMenu />
    </div>
  );
}

export default App;
