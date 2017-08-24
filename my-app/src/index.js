// index.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const styles = {
    app: {
        paddingTop: 40,
        textAlign: 'center',
    },
}

class App extends Component {
    render() {
        return (
            <div style={styles.app}>
                Welcome to React!
            </div>
        )
    }
}

const teste = document.querySelector('#teste')
ReactDOM.render(<App />, teste)