import React, { ReactElement } from 'react';

import './App.css'

import Background from './components/Background';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar'


class App extends React.Component<{}, { page: string }> {

    constructor(props: ReactElement) {
        super(props)

        this.state = {
            page: window.location.pathname === '/' ? 'home' : window.location.pathname.replace('/', '')
        }
    }

    updatePage = (page: string) => {
        if (page === this.state.page)
            return
        this.setState({page: page})
        window.history.replaceState(null, '', '/' + (page !== 'home' ? page : '') )
    }

    render(): React.ReactNode {
        return (
            <div className='app'>
                <Background />
                <MainPage page={this.state.page}/>
                <NavBar update={this.updatePage}/>
            </div>
        );
    }
}

export default App