export default function ProgressBar({ value, maxValue }) {
    let percentage = (value / maxValue) * 100;
    const minPercentage = 5;
    const maxPercentage = 98.5;
    if (minPercentage > percentage) {
        percentage = minPercentage;
    }
    else if(maxPercentage < percentage) {
        percentage = maxPercentage;
    }
    return (
        <div style={{
            borderRadius: "50px",
            width: "60%",
            marginLeft: "70px",
            paddingTop: "4px",
            paddingLeft: "4px",
            height: "40px",
            backgroundColor: "#eee"
        }}>
            <div
                style={{
                    borderRadius: "50px",
                    width: `${percentage}%`,
                    height: "36px",
                    backgroundColor: "#ffaef6",
                }}
            />
        </div>
    );
}
