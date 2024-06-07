import '../styles/boxTwo.css'

function BoxTwo({ boxes }) {
    return (
        boxes && boxes.map((box, index) => (
            <div 
                key={index} 
                className="boxTwo" 
                style={{ 
                    animation: index % 2 === 0 ? 'fadeInUp 1s ease-in-out' : 'fadeInDown 1s ease-in-out'
                }}
            >
                <div>
                    <h4>{box.heading && box.heading}</h4> {box.icon && box.icon}
                </div>
                <div>
                     <h3>{box.value && box.value}</h3>
                </div>
            </div>
        ))
    )
}

export default BoxTwo