import type { ITechType } from "../../type";
import "./TechnologyCart.css";

interface Prop {
    Tech_Cart: ITechType;
}

const TechnologyCart = ({ Tech_Cart }: Prop) => {
    const {
        name,
        description,
        icon,
        category,
        difficulty,
        rating,
        badge
    } = Tech_Cart;

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
            <button>
                Add to Stack
            </button>

        </div>
    );
};

export default TechnologyCart;