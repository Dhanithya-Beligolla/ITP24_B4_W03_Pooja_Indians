
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AddOrder from './Component/addorder';
import OrderDetails from './Component/orderdetails';
import UpdateOrder from './Component/UpdateOrders';
import OrderRepoart from './Component/Repoart';
import Header from './Component/header';
import AddPayment from './Component/Payment';
import PaymentReport from './Component/paymentreport';

function App() {
  return (
    <div className="App">
 <Router>
 <Header/>
 <Routes>

 
<Route path='/' element={<AddOrder/>}></Route>
<Route path='/orderdetails' element={<OrderDetails/>}></Route>
<Route path='/updateorder/:id' element={<UpdateOrder/>}></Route>
<Route path='/repoart' element={<OrderRepoart/>}></Route>
<Route path='/pay' element={<AddPayment/>}></Route>
<Route path='/' element={<PaymentReport/>}></Route>

   </Routes>
   </Router>
    </div>
  );
}

export default App;
