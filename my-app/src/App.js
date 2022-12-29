// import logo from './logo.svg';
import './App.css';

import Transaction from './components/Transaction';
import FormComponent from './components/FormComponent';
// import Item from './components/Item';
import ReportComponent from './components/ReportComponent';

import { useState,useEffect } from 'react';
import DataContext from './components/Data/DataContext';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function App() {
  const Design = {color: 'red', textAlign: 'center', fontSize: '1.5rem' };
  
  const [items, setItems] = useState([]);

  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);



  const onAddNewItem = (newItem) => {
    setItems ((prevItem) =>{
      return [newItem, ...prevItem]
    });
    console.log(`ข้อมูลที่ส่งมาจาก FromComponent =`, newItem);
  }


useEffect(() => {
  const amounts = items.map(items => items.amount);
  const Income = amounts.filter(element => element >0).reduce((total, element) => total += element,0);
  
  const Expense = (amounts.filter(element => element <0).reduce((total, element) => total += element, 0))*-1;

setReportIncome(Income);
setReportExpense(Expense);
}, [items, reportIncome, reportExpense]);




  return (
    <DataContext.Provider value={{Income: reportIncome, Expense: reportExpense}}>
      <div className='container'>
        <h2 style={Design}>Application <br/>Income & Expenses Account </h2>
      <Router>
            <div>
              <ul className='holizontal-menu'>
                <li>
                  <Link to='/'>Home Page</Link>
                </li>
                <li>
                  <Link to='/'>About</Link>
                </li>
              </ul>
            </div>
          </Router>

        <ReportComponent/>
        <FormComponent onAddItem={onAddNewItem}/>
        <Transaction items = {items}/>
      </div>
    </DataContext.Provider>
  );
}

export default App;