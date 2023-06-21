import './NavButtonScroll.css';

function NavButtonScroll({ idToScroll, title }) {
    return (
        <>
            {
                idToScroll === 'intro'
                    ?
                    <div className="navButtonScroll"
                        onClick={
                            () => window.scrollTo(0, 0)
                        }
                    >
                        {title}
                    </div>
                    :
                    <div className="navButtonScroll"
                        onClick={
                            () => window.location.replace(`/#${idToScroll}`)
                        }
                    >
                        {title}
                    </div>
            }
        </>
    );
}

export default NavButtonScroll;
