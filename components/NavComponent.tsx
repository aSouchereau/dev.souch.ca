export default function Nav() {
    return <nav id='main-nav'>
        <div id='hero-content-mobile'>
            <h1 className='light'>Alex Souchereau</h1>
            <h2 className='light'>Web Developer</h2>
        </div>
        <ul className='nav-list'>
            <li className='nav-item'><a href='https://github.com/aSouchereau'>Github</a></li>
            <li className='nav-item'><a href='#city-cyclery'>City Cyclery</a></li>
            <li className='nav-item'><a href='#souch-ca'>souch.ca</a></li>
            <li className='nav-item'><a href='#mc-route-manager'>MC Route Manager</a></li>
            <li className='nav-item'><a href='#linkboard'>Linkboard</a></li>
        </ul>
    </nav>
}