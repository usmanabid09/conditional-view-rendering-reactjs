import './App.css';
import {StudentMain} from "./components/Student";
import {TeacherMain} from "./components/Teacher";
import {DefaultMain} from "./components/Default";

function App() {
  const {role} = {role: "nothing"};
  return Containers.getView(role)()
}

const Containers = {
  student : StudentMain,
  teacher : TeacherMain,
  default: DefaultMain,
  getView: (role) => Containers[role] ? Containers[role] : Containers.default
}

export default App;
