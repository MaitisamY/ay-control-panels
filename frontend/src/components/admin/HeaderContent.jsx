import { GrGroup, GrIteration, GrCurrency, GrLineChart } from 'react-icons/gr';
import BoxOne from "../BoxOne";
import BoxTwo from "../BoxTwo";

const HeaderContent = () => {
    return (
        <>
            <div className="level-one">
                <BoxOne />
            </div>

            <div className="level-two">
                <BoxTwo 
                    boxes={[
                        { heading: "Sales", icon: <GrCurrency className="green" />, value: "3400/-" },
                        { heading: "Orders", icon: <GrIteration className="blue" />, value: "24" },
                        { heading: "Clients", icon: <GrGroup className="torquoise" />, value: "10" },
                        { heading: "Revenue", icon: <GrLineChart className="purple" />, value: "3400/-" },
                    ]} 
                />
            </div>
        </>
    )
}

export default HeaderContent