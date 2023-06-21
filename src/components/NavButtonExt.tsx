import './NavButtonExt.css';

function NavButtonExt({ linkExt, iconClass, title }) {
    return (
        <div
            className='buttonExt d-flex align-items-center'
        >

            <a
                href={linkExt}
                target="_blank"
                rel="noreferrer noopener"
                className='buttonExtA'
            >
                <i
                    className={`${iconClass} m-2`}
                />
                <span>
                    {title}
                </span>
            </a>

        </div>
    );
}

export default NavButtonExt;
