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
import Cart from './Components/Cart/Cart';
import Address from './Components/Address/Address';
import OrderSummary from './Components/OrderSummary/OrderSummary';
import OrderSummaryDetails from './Components/OrderSummary/OrderSummaryDetails';

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
     {/* <Cart/> */}
     {/* <Address /> */}
     {/* <OrderSummary /> */}
     {/* <OrderSummaryDetails /> */}
    </div>
  );
}

export default App;
