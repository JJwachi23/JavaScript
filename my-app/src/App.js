import logo from './logo.svg';
import './App.css';
import React from 'react';
import Transaction from './components/Transaction';



// const Title = () => <h2>โปรแกรมบัญชีรายรับ-รายจ่าย</h2>

// const Description = () => <p>บันทึกข้อมูลบัญชีในแต่ละวันของคุณ</p>

const Design = {color: 'red', textAlign: 'center', fontSize: '1.5rem' };

function App() {
  return (
    <div className='container'>
      <h2 style={Design}>Application <br/>Income & Expenses Account </h2>
      <Transaction/>
    </div>
  );
}

export default App;