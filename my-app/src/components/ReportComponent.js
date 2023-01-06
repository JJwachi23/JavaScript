import { useContext } from "react";
import DataContext from "./Data/DataContext";
import "./ReportComponent.css";

const ReportComponent = () => {
  
const{Income, Expense} = useContext(DataContext);
    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    };

    return (
        <div>
            <h4> ยอดคงเหลือ (บาท)</h4>
            <h1>{formatNumber((Income-Expense).toFixed(2))}</h1>
<div className="report-container">
    <div>
        <h4>รายได้ทั้งหมด</h4>
        <p className="report plus">{formatNumber(Income)}</p>
    </div>

    <div>
        <h4>รายจ่ายทั้งหมด</h4>
        <p className="report minus">{formatNumber(Expense)}</p>
    </div>
</div>

        </div>
    );
}

export default ReportComponent