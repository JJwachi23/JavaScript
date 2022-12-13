import logo from './logo.svg';
import './App.css';
// import React from 'react';
import Transaction from './components/Transaction';
import FormComponent from './components/FormComponent';
import { u4 as uuid } from 'uuid';



// const Title = () => <h2>โปรแกรมบัญชีรายรับ-รายจ่าย</h2>

// const Description = () => <p>บันทึกข้อมูลบัญชีในแต่ละวันของคุณ</p>
function App() {

const Design = {color: 'red', textAlign: 'center', fontSize: '1.5rem' };

const initData = [
  {id:1, title: "เงินเดือน", amount: 25000},
  {id:2, title: "ค่ารักษาพยาบาล", amount: 2500},
  {id:3, title: "ค่าเช่าบ้าน", amount: 2000},
  {id:4, title: "ค่าน้ำมัน", amount: 1500},
  {id:5, title: "ค่าประกัน", amount: 900},
  {id:6, title: "ค่าเดินทาง", amount: 600}
]; 

  return (
    <div className='container'>
      <h2 style={Design}>Application <br/>Income & Expenses Account </h2>
      <FormComponent/>
      <Transaction items = {initData}/>
    </div>
  );
}

export default App;