import "./DeviconGrid.css";
import DeviconCard from "./DeviconCard";

function DeviconGrid({ gridWidth, gridHeight, numRows, numColumns, deviconTuples }) {
    const cellWidth = gridWidth / (numColumns + 2);
    const cellHeight = gridHeight / (numRows + 1);

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
                    r => {
                        return (
                            <div className="skillRow"
                            >
                                {
                                    r.map(
                                        t => {
                                            return (
                                                <DeviconCard
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


/**
 *
        {
            for(let iRow = 0; iRow <rows; iRow++) {
        for (let iCol = 0; iCol < columns; iCol++) {
            deviconTuples
                .slice(columns * iRow, columns * iRow + columns)
                .map(
                    t => {
                        return (
                            <DeviconCard
                                width={cellWidth}
                                height={cellHeight}
                                source={t[0]}
                                alt={t[1]}
                                title={t[2]}
                            />
                        );
                    }
                );
        }
    }
}

width, height, rows, columns, deviconTuples
 */
