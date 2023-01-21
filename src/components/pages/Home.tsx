import './Home.css'
import './Page.css'

const Home = () => {

    let styles;
    if (window.innerWidth < 600) {
        styles = [
            { left: '2%', top: '2%', width: '40vw', height: '40vw' },
            { left: '40%', top: '35%', width: '40vw', height: '40vw', animationDelay: '1s' },
            { left: '0%', top: '65%', width: '40vw', height: '40vw', animationDelay: '2s' },
        ]
    }
    else {
        styles = [
            { left: '0%', top: '0%' },
            { left: '65%', top: '34%', animationDelay: '1s' },
            { left: '33%', top: '20%', animationDelay: '2s' },
        ]
    }

    return (
        <div className='page'>
            <div className='bubble spin' style={styles[0]} />
            <div className='bubble' style={styles[0]}>
                <div className='image'></div>
                <h1>This is me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div className='bubble spin' style={styles[1]} />
            <div className='bubble' style={styles[1]}>
                <div className='image'></div>
                <h1>Now im someone else</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div className='bubble spin' style={styles[2]} />
            <div className='bubble' style={styles[2]}>
                <div className='image'></div>
                <h1>Its a me Markus</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
        </div>
    )
}

export default Home