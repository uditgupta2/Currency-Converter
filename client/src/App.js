import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";
// import axios from "axios";
import { fetchExchange } from "./services/ApiCall";

function App() {
  // const [rate, setRate] = useState();

  // useEffect(() => {
  //   fetchExchange("USD").then((response) => {
  //     setRate(response);
  //     console.log("rate", rate);
  //   });
  // }, [setRate, rate]);

  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
