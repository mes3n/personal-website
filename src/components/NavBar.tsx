import React from 'react';
import './NavBar.css'

interface Props {
    update: Function
}

class NavBar extends React.Component<Props> {
    prevScrollTop: number

    constructor(props: Props) {
        super(props)

        window.onscroll = this.onScroll
        window.onresize = this.onResize
        this.prevScrollTop = 0

    }

    onResize() {
        if (window.scrollY > 0) {  // set small navbar
            document.getElementById('nav')!.style.height = window.innerWidth > 600 ? '50px' : '30px'
        }
        else {  // set normal navbar
            document.getElementById('nav')!.style.height = window.innerWidth > 600 ? '80px' : '50px'
        }
    }

    onScroll() {
        if (window.scrollY > this.prevScrollTop) {  // set smaller navbar
            document.getElementById('nav')!.style.height = window.innerWidth > 600 ? '50px' : '30px'
            document.getElementById('title')!.style.fontSize = window.innerWidth > 600 ? '20px' : '10px';

            [].forEach.call(document.getElementsByTagName('span'), (element: HTMLElement) => {
                element.style.fontSize = window.innerWidth > 600 ? '14px' : '10px'
            })
        }
        else if (window.scrollY < this.prevScrollTop) {  // set larger navbar
            document.getElementById('nav')!.style.height = window.innerWidth > 600 ? '80px' : '50px'
            document.getElementById('title')!.style.fontSize = window.innerWidth > 600 ? '40px' : '18px';

            [].forEach.call(document.getElementsByTagName('span'), (element: HTMLElement) => {
                element.style.fontSize = window.innerWidth > 600 ? '20px' : '12px'
            })
        }
        this.prevScrollTop = document.documentElement.scrollTop
    }

    render(): React.ReactNode {
        const page = window.location.pathname

        return (
            <div id='nav' className='nav'>
                <h1 id='title' className='title'>MS</h1>
                <ul>
                    <li><span className={page === '/' ? 'active' : ''} onClick={() => this.props.update('home')}>Home</span></li>
                    <li><span className={page === '/about' ? 'active' : ''} onClick={() => this.props.update('about')}>About</span></li>
                    <li><span className={page === '/contact' ? 'active' : ''} onClick={() => this.props.update('contact')}>Contact</span></li>
                </ul>
            </div>
        )
    }
}


export default NavBar