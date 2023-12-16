import '../style/Header.css';

function Header() {
    return (
        <header className="Header">
            <h1 className="HeaderTitle">
                    Educação Solidária Anônima
                </h1>
                <nav className='HeaderNav'>
                    <a href=''>Quero Ajudar!</a>
                    <a>Quero Ser Ajudado!</a>
                </nav>
        </header>
    );
}

export default Header;