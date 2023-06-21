import "./DeviconGrid.css";
import DeviconCard from "./DeviconCard";

function DeviconGrid({ gridWidth, gridHeight, numRows, numColumns, deviconTuples }) {
    const cellWidth = gridWidth / (numColumns + 2);
    // const cellHeight = gridHeight / (numRows + 1);

    const rowsToRender = [];
    for (let i = 0; i < numRows; i++) {
        rowsToRender.push(
            deviconTuples.slice(numColumns * i, numColumns * i + numColumns)
        );
    }

    return (
        <div
            className="skillGrid"
        >
            {
                rowsToRender.map(
                    (r, idx) => {
                        return (
                            <div className="skillRow"
                            key={idx}
                            >
                                {
                                    r.map(
                                        (t, idx) => {
                                            return (
                                                <DeviconCard
                                                    key={idx}
                                                    width={`${cellWidth}vw`}
                                                    height={`auto`}
                                                    source={t[0]}
                                                    alt={t[1]}
                                                    title={t[2]}
                                                />
                                            );
                                        }
                                    )
                                }
                            </div>
                        );
                    }
                )
            }
        </div>
    );

}

export default DeviconGrid;
