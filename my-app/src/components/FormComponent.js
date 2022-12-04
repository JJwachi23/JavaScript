import './FormComponent.css'

const FormComponent = () => {

    
    const inputTitle = (event) => {
        console.log(event.target.value);
    }

    const inputAmount = (event) => {
        console.log(event.target.value);
    }

    const saveItem = (event) => {
        event.preventDefault()
        alert('ข้อมูลของคุณถูกบันทึกเรียบร้อยแล้ว');
    } 
    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุรายการของคุณ" onChange={inputTitle}></input>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ, - รายจ่าย)" onChange={inputAmount}></input>
                </div>
                <div>
                    <button className="btn" type="submit">เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent