import "./SkillSection.css";
import { deviconTuples } from "../devicons";
import DeviconGrid from "./DeviconGrid";

function SkillSection() {
    const GRID_WIDTH_VW = 90;
    const GRID_HEIGHT_VH = 75;

    return (
        <section
            className="skillSection d-flex justify-content-center"
            id="skills"
        >
            <h2 className="font-link skillHeading">Technical Skills</h2>
            <DeviconGrid
                gridWidth={GRID_WIDTH_VW}
                gridHeight={GRID_HEIGHT_VH}
                numRows={4}
                numColumns={5}
                deviconTuples={deviconTuples}
            />
        </section>
    );
}

export default SkillSection;
