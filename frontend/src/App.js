import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/header';
import AddSalary from './component/addSalary';
import AllSalaries from './component/allSalaries';
import UpdateSalary from './component/updateSalary';
import Repoart from './component/FinanceDashboard';

function App() {
  return (
    <div>
      <Router>

        <Header />


        <Routes>
          <Route path="/" element={<AddSalary />} />
          <Route path="/salarydetails" element={<AllSalaries />} />
          <Route path="/update/:id" element={<UpdateSalary />} />
          <Route path="/repoartfinance" element={<Repoart />} />
        </Routes>


      </Router>
    </div>
  );
}

export default App;
