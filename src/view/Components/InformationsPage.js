import '../../style/Header.css';

function InformationsPage({title, link1, link2}) {
    return (
        <header className="Header">
            <h1 className="HeaderTitle">
                    {title}
                </h1>
                <nav className='HeaderNav'>
                    <a href='#iWantToHelpSection'>{link1}</a>
                    <a>{link2}</a>
                </nav>
        </header>
    );
}

export default InformationsPage;