import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import SinglePage from "./pages/singlepage/SinglePage";
import Write from "./pages/write/Write";
import SingIn from "./pages/Signin"
import SignUp from "./pages/Signup"
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const user = false;
  return (
    <div className="App">
        <TopBar/>
    
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={user ? <Home/> : <SignUp/>}/>
          <Route path="/signin" element={user ? <Home/> :<SingIn/>}/>
          <Route path="/write" element={user ? <Write/> :<SingIn/>}/>
          <Route path="/settings" element={user ? <Settings/> :<SingIn/>}/>
          <Route path="/post/:postId" element={<SinglePage/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
