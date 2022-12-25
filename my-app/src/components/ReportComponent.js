import { useContext } from "react";
import DataContext from "./Data/DataContext";
import "./ReportComponent.css";

const ReportComponent = () => {
   // const name = useContext(DataContext);
   const{Income, Expense} = useContext(DataContext);
    return (
        <div>
            <h4> ยอดคงเหลือ (บาท)</h4>
            <h1>{Income-Expense}</h1>
<div className="report-container">
    <div>
        <h4>รายได้ทั้งหมด</h4>
        <p className="report plus">{Income}</p>
    </div>

    <div>
        <h4>รายจ่ายทั้งหมด</h4>
        <p className="report minus">{Expense}</p>
    </div>
</div>

        </div>
    );
}

export default ReportComponent