import "./App.css";
import Navbar from "./components/Navbar";
import UsersList from "./components/UsersList"
import Footer from "./components/Footer"
import FormDemo from "./components/FormDemo"
import FormAssignment from "./components/FormAssignment"
import Counter from "./components/Counter";

function App() {
    console.log("App rendered");
return(
        <div>
            <div className="m-16 min-h-screen bg-blue-400 p-10 ">
                 <FormAssignment/>      
                
          </div>
        </div>
    );
}
export default App;

