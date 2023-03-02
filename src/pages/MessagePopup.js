
export default function MessagePopup({ gto, gfrom, message }) {


    return (
        <div>

            <div>
                <p style={{ textAlign: "left", paddingLeft: "30px", fontSize: "18px" }}>To. <b style={{fontSize:"25px"}}>{gto}</b></p>
                <div style={{ height: "270px", marginBottom: "20px", fontSize: "20px", backgroundColor: "#ffffff", borderRadius: "30px", boxShadow: "inset 0px 0px 30px 4px #e9a4fa" }}>
                    <div style={{ height: "10px" }}></div>
                    <div style={{ height: "250px", overflowY: "scroll", whiteSpace:"pre-line"}}>
                        <pre>{message}</pre>
                    </div>
                </div>
                <p style={{ textAlign: "right", paddingRight: "30px", fontSize: "18px" }}>From. <b style={{fontSize:"25px"}}>{gfrom}</b></p>

            </div>
        </div>
    )
}
