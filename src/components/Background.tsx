import './Background.css'

function randInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min)
}

const Background = () => {
    
    const squircles = []

    for (let i = 0; i < (window.innerWidth > 600 ? 20 : 10); i++) {
        const props = {
            side: randInt(30, 100),
            rotation: randInt(0, 360),
            left: randInt(0, 100),
            
            delay: randInt(0, 8),
            duration: randInt(8, 16),
        }

        squircles.push(<li style={{
            width: props.side + 'px',
            height: props.side + 'px',
            rotate: props.rotation + 'deg',
            left: props.left + '%',

            animationDelay: props.delay + 's',
            animationDuration: props.duration + 's',
        }}></li>)
    }

    return (
        <div className='background'>
            <ul className='circles'>
                {squircles}
            </ul>
        </div>
    )
}

export default Background