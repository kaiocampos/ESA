import '../../style/Header.css';

function Header({title, link1, link2}) {
    return (
        <header className="Header">
            <h1 className="HeaderTitle">
                    {title}
                </h1>
                <nav className='HeaderNav'>
                    <a href='#'>{link1}</a>
                    <a>{link2}</a>
                </nav>
        </header>
    );
}

export default Header;