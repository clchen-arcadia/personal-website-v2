import "./SkillSection.css";

function SkillSection() {
    return (
        <section
            id="skills"
        >
            <h2>Technical Skills</h2>

            <section id="grid-logos">

                <section className="row">
                    <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="dev-icon-javascript" />

                    <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="dev-icon-typescript" />

                    <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="dev-icon-python" />

                    <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="dev-icon-postgresql" />
                </section>

                <section className="row">
                    <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="dev-icon-aws" />

                    <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="dev-icon-html" />

                    <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="dev-icon-css" />

                    <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="dev-icon-bootstrap" />
                </section>

                <section className="row">
                    <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="dev-icon-react" />

                    <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="dev-icon-express" />

                    <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="dev-icon-node" />

                    <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="dev-icon-flask" />
                </section>

                <section className="row">

                    <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" alt="dev-icon-jquery" />

                    <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="dev-icon-django" />

                    <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="dev-icon-git" />

                    <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="dev-icon-github" />
                </section>

                <section className="row">
                    <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="dev-icon-npm" />

                    <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg" alt="dev-icon-sql-alchemy" />

                    <img className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="dev-icon-jest" />

                    <img style={{ visibility: "hidden" }} className="col" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="dev-icon-jest" />
                </section>

            </section>

        </section>
    );
}

export default SkillSection;
