import '../styles/boxTwo.css'

function BoxTwo({ heading, icon, value }) {
    return (
        <div className="boxTwo">
            <div>
                <h4>{heading}</h4> {icon}
            </div>
            <div>
                <h2>{value}</h2>
            </div>
        </div>
    )
}

export default BoxTwo