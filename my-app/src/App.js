import logo from './logo.svg';
import './App.css';

import Transaction from './components/Transaction';
import FormComponent from './components/FormComponent';
import Item from './components/Item';
import ReportComponent from './components/ReportComponent';

import { useState, useEffect, useReducer } from 'react';
import DataContext from './components/Data/DataContext';


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


//Reducer State
  const [showReport,setShowReport] = useState(false);
  const reducer = (state, action) => {
    switch(action.type){
      case "SHOW" :
        return setShowReport(true);
      case "HIDE" :
        return setShowReport(false);
    }
  }

  const [result, dispatch] = useReducer(reducer, showReport)

  return (
    <DataContext.Provider value={
      {
        Income: reportIncome,
        Expense: reportExpense
      }
    }>
      <div className='container'>
        <h2 style={Design}>Application <br/>Income & Expenses Account </h2>
        {showReport && <ReportComponent/>} {/*เป็นการเขียนอธิบายว่าการที่จะแสดง ReportComponent ต้องอ้างอิง showReport State เท่านั้น*/}
        <FormComponent onAddItem={onAddNewItem}/>
        <Transaction items = {items}/>
        <h2>{result}</h2>
        <button className='btn-report' onClick={() => dispatch({type:"SHOW"})}>แสดง</button>
        <button className='btn-report' onClick={() => dispatch({type:"HIDE"})}>ซ่อน</button>
      </div>
    </DataContext.Provider>
  );
}

export default App;