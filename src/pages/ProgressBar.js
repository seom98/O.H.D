export default function ProgressBar({ value, maxValue }) {
    const percentage = (value / maxValue) * 100;
    return (
        <div style={{ borderRadius: "20px", width: "60%", marginLeft: "70px" , paddingTop: "4px", paddingLeft: "4px", height: "20px", backgroundColor: "#eee" }}>
            <div
                style={{
                    borderRadius: "20px",
                    width: `${percentage}%`,
                    height: "16px",
                    backgroundColor: "#333",
                }}
            />
        </div>
    );
}
