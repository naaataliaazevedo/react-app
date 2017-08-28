// index.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const styles = {
    app: {
        paddingTop: 40,
        textAlign: 'center',
        color: 'red',
    },
}

class App extends Component {
    render() {
        return (
            <div style={styles.app}>
                <h1>Welcome to React!</h1>
            </div>
        )
    }
}

const teste = document.querySelector('#teste')
ReactDOM.render(<App />, teste)