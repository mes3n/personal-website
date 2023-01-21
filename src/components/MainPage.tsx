import React from 'react'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

interface Props {
    page: string
}

class MainPage extends React.Component<Props> {

    render(): React.ReactNode {

        if (this.props.page === 'home') {
            return (
                <Home />
            )
        }
        if (this.props.page === 'about') {
            return (
                <About />
            )
        }
        if (this.props.page === 'contact') {
            return (
                <Contact />
            )
        }
        return (
            <div />
        )
    }
}

export default MainPage