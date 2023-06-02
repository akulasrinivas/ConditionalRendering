// Conditional Rendering using if_else method.

// import {Component} from 'react'

// import Welcome from './components/Welcome'

// import './App.css'

// class App extends Component {
//   state = {
//     isLoggedIn: true,
//   }

//   renderAuthButton = () => {
//     const {isLoggedIn} = this.state
//     if (isLoggedIn === true) {
//       return <button>Logout</button>
//     }
//     return <button>Login</button>
//   }

//   render() {
//     return (
//       <div className="container">
//         <Welcome greeting="Hello" name="User" />
//         {this.renderAuthButton()}
//       </div>
//     )
//   }
// }

// export default App

// Conditional rendering using Element Variables

// import {Component} from 'react'

// import Welcome from './components/Welcome'

// import './App.css'

// class App extends Component {
//   state = {
//     isLoggedIn: true,
//   }

//   render() {
//     const {isLoggedIn} = this.state
//     let authButton
//     if (isLoggedIn === false) {
//       authButton = <button>Logout</button>
//     } else {
//       authButton = <button>Login</button>
//     }

//     return (
//       <div className="container">
//         <Welcome greeting="Hello" name="User" />
//         {authButton}
//       </div>
//     )
//   }
// }

// export default App

// Conditional rendering using Ternary Operators

// import {Component} from 'react'

// import Welcome from './components/Welcome'

// import './App.css'

// class App extends Component {
//   state = {
//     isLoggedIn: true,
//   }

//   render() {
//     const {isLoggedIn} = this.state

//     return (
//       <div className="container">
//         <Welcome greeting="Hello" name="User" />
//         {/* isLoggedIn ? <button>Logout</button> : null... */}
//         {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
//       </div>
//     )
//   }
// }

// export default App

// Conditional rendering using Logical && Operator

import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: true,
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {isLoggedIn && <button>Logout</button>}
        {!isLoggedIn && <button>Login</button>}
      </div>
    )
  }
}

export default App
