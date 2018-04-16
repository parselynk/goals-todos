import React, { Component } from 'react';
import { connect } from 'react-redux'
import ConnectedTodos from './Todos' //also ken use Todos
import ConnectedGoals from './Goals' //also ken use Goals


class App extends Component {
  componentDidMount(){
      const { dispatch } = this.props

      dispatch(handleInitialData())

  }
  render() {

      const { loading } = store.getState()

      if (loading === true) {
          return <h1>Loading ... </h1>
      }

      return(
          <div>
              <ConnectedTodos />
              <ConnectedGoals />
          </div>
      )
  }
}


export default connect((state) => ({ 
  loading: state.loading 
}))(App)

