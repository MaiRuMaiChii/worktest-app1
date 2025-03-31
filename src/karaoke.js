import { useState } from "react";

function Karaoke() {
  const [qty1, setQty1] = useState("");
  const [qty2, setQty2] = useState("");
  const [total, setTotal] = useState("");
  const [studentCard, setStudentCard] = useState(null);

  const calculateTotal = () => {
    let totalAmount = 0;
    let numQty1 = parseFloat(qty1) || 0;
    let numQty2 = parseFloat(qty2) || 0;

    if (studentCard === "nohave") {
      if (numQty1 <= 0) {
        alert("กรุณากรอกจำนวนชั่วโมง");
        return;
      }
      totalAmount = numQty1 * 120;
    } else if (studentCard === "have") {
      if (numQty2 <= 0) {
        alert("กรุณากรอกจำนวนชั่วโมง");
        return;
      }
      totalAmount = numQty2 * 80;
    }
    setTotal(totalAmount.toFixed(0));
  };

  return (
    <div style={{ border: "1px solid #000000", padding: "20px", width: "fit-content", margin: "30px" }}>
      <table width="400" border="2" bordercolor="#000000">
        <thead>
          <tr>
            <th colSpan="2" style={{ textAlign: 'left' }}>ร้านคาราโอเกะ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <br />
              <input type="radio" name="c1" id="nohave" value="nohave" onChange={() => setStudentCard("nohave")}/> ไม่มีบัตรนักศึกษา <br />
              ชั่วโมงละ 120 บาท จำนวน <input type="text" size="2" id="txtqty1" value={qty1} onChange={(e) => setQty1(e.target.value)}
                disabled={studentCard !== "nohave"}/> ชั่วโมง <br />
              <input
                type="radio"
                name="c1"
                id="have"
                value="have"
                onChange={() => setStudentCard("have")}
              /> มีบัตรนักศึกษา <br />
              ชั่วโมงละ 80 บาท จำนวน <input type="text" size="2" id="txtqty2" value={qty2} onChange={(e) => setQty2(e.target.value)}
                disabled={studentCard !== "have"}/> ชั่วโมง <br /><br />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <button onClick={calculateTotal}>คิดเงิน</button>
      <br />
      รวมเป็นเงินทั้งสิ้น = <input type="text" id="txtTotal" value={total} readOnly /> บาท
    </div>
  );
}

export default Karaoke;