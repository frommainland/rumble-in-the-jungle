import "./Animal_quote.css";
import Animal_kidRead from './Animal_kidRead'

export default function Animal_quote(props) {
    const smooth = [0.4, 0, 0, 1];

    return (
        <div className="animal-quote-wrap">
            <div className="animal-quote-text">{props.animal_quotes}</div>
            <Animal_kidRead />
        </div>
    );
}
