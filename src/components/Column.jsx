import Card from "./Card";

function Column({ title, cards }) {
    return(
        <div className="column">
            <h2>{title}</h2>
            {cards.map((card) => (
                <Card key={card.id} text={card.text} />
            ))}
        </div>
    );
}

export default Column;