import logo from './logo.svg';
import './App.css';
import React from 'react';
import Transaction from './components/Transaction';
import FormComponent from './components/FormComponent';
import Item from './components/Item';
import { useState } from 'react';

// const Title = () => <h2>โปรแกรมบัญชีรายรับ-รายจ่าย</h2>

// const Description = () => <p>บันทึกข้อมูลบัญชีในแต่ละวันของคุณ</p>
function App() {

const Design = {color: 'red', textAlign: 'center', fontSize: '1.5rem' };
// const initData = [
//   {id:1, title: "เงินเดือน", amount: 25000},
//   {id:2, title: "ค่ารักษาพยาบาล", amount: 2500},
//   {id:3, title: "ค่าเช่าบ้าน", amount: 2000},
// ]; 

const [items,setItems] = useState([]);

const onAddNewItem = (newItem) => {
  setItems ((prevItem) =>{
    return [newItem, ...prevItem]
  });
  console.log(`ข้อมูลที่ส่งมาจาก FromComponent =`, newItem);
}

  return (
    <div className='container'>
      <h2 style={Design}>Application <br/>Income & Expenses Account </h2>
      <FormComponent onAddItem={onAddNewItem}/>
      <Transaction items = {items}/>
    </div>
  );
}

export default App;