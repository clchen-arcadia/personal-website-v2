import './NavButtonExt.css';

function NavButtonExt({linkExt, iconSrc, iconAlt}) {
    console.log(`navbuttonext rendered with
    link=${linkExt}
    iconSrc=${iconSrc}
    iconAlt=${iconAlt}`)
    return (
        <a
            href={linkExt}
            target="_blank"
            rel="noreferrer noopener"
        >
            <img
            src={iconSrc}
            alt={iconAlt}
            style={{
                width: '15px',
                height: '15px'
            }}
            />
        </a>
    );
}

export default NavButtonExt;
