import PhotoCarousel from './PhotoCard';
import { IPhoto } from '../types';
import './ProjectCard.css';

function ProjectCard({ title, blurb, links, photos }) {

    return (
        <div className='projectCard'>

            <div className="projectBlurb">
                <h4>{title}</h4>
                <p>
                    {blurb}
                </p>
                {links.map(
                    (t, idx) => {
                        return (
                            <a
                                key={idx}
                                href={t[0]}
                            >
                                {t[1]}
                            </a>
                        );
                    }
                ).reduce((acc, x) => acc === null ? [x] : [acc, ' | ', x], null)

                }
            </div>

            <PhotoCarousel photos={photos} title={title}/>

        </div>
    );

}

export default ProjectCard;
