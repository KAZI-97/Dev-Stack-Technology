import { useState, type Dispatch } from "react";
import type { ITechType } from "../../type";
import "./TechnologyCart.css";
import { toast } from "react-toastify";

interface Prop {
    Tech_Cart: ITechType;
    setSelectStack : Dispatch<ITechType[]>;
    SelectStack:ITechType[]
}

const TechnologyCart = ({ Tech_Cart,SelectStack,setSelectStack }: Prop) => {
    const {
        name,
        description,
        icon,
        category,
        difficulty,
        rating,
        badge
    } = Tech_Cart;
    const [Btnstatus,setBtnstatus] = useState<boolean>(false)
    const HandleBtnStatus = () =>{
        setBtnstatus(true)
        const newStack = [...SelectStack,Tech_Cart]
        toast(`Stack ${name} have been Added Successfully`)
        setSelectStack(newStack)


        
    }

    return (
        <div className="technology-card">

            {/* Top Section */}
            <div className="card-top">
                <img
                    className="technology-icon"
                    src={icon}
                    alt={name}
                />

                <span className="badge">
                    {badge}
                </span>
            </div>

            {/* Technology Name */}
            <h2>{name}</h2>

            {/* Description */}
            <p className="description">
                {description}
            </p>

            <hr />

            {/* Information */}
            <div className="card-info">

                <span className="category">
                    {category}
                </span>

                <span className="difficulty">
                    {difficulty}
                </span>

                <span className="rating">
                    ⭐ {rating}
                </span>

            </div>

            {/* Button */}
            <button onClick={HandleBtnStatus} disabled={Btnstatus}>
                {Btnstatus == true ? "Already Selected":'Add To Stack'}
            </button>

        </div>
    );
};

export default TechnologyCart;