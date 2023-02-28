
export default function MessagePopup({gto, gfrom, message}) {


    return (
        <div>

                <div>
                    <p>From: {gfrom}</p>
                    <p>To: {gto}</p>
                    <p>Message: {message}</p>
                </div>
        </div>
    )
}
