export default function ProgressBar({ value, maxValue }) {
    let percentage = (value / maxValue) * 100;
    const minPercentage = 10;
    const maxPercentage = 98.5;
    
    if (minPercentage > percentage) {
        percentage = minPercentage;
    }
    else if(maxPercentage < percentage) {
        percentage = maxPercentage;
    }
    return (
        <div className="progressBar">
            <div className="progressBarInner" style={{width: `${percentage}%`}}/>
        </div>
    );
}
