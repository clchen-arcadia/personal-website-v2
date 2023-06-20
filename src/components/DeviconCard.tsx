import "./DeviconCard.css"

function DeviconCard({ width, height, source, alt, title }) {
    const propStyles = {width, height};

    return (
        <div style={ propStyles }>
            <img
                src={ source }
                alt={ alt }
            />
            <span>{ title }</span>
        </div>
    );
}

export default DeviconCard;
