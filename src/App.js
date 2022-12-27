import './App.css';
import Book from './Components/Book/Book';
import BookSummary from './Components/BookSummary/BookSummary';
import Header from './Components/Header/Header';
import WishList from './Components/WishList/WishList';
import Dashboard from './Pages/Dashboard/Dashboard';
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword';
import Lander from './Pages/Lander/Lander';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import Router1 from './Pages/Router/router';
import Login from './Pages/Sign-in/Login';
import SignUp from './Pages/Sign-up/SignUp';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
     {/* <SignUp /> */}
     {/* <Lander /> */}
     {/* <ForgetPassword/> */}
     {/* <ResetPassword /> */}
     {/* < Header />  */}
     <Router1 />
     {/* <Dashboard / > */}
     {/* <Book /> */}
     {/* <BookSummary /> */}
     {/* <WishList /> */}
    </div>
  );
}

export default App;
