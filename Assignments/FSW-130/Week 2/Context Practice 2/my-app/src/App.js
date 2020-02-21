import React from "react"

import {UserContextConsumer} from "./arrayContext"

class App extends React.Component {
    state = {
        newUsername: ""
    }
    
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }
    
    render() {    
        return (
            <div>
              <UserContextConsumer>
                  {({username, changeUsername}) => (
                       <main>  
                          <p className="main">No new notifications, {username}! 🎉</p>
                            <input
                               type="text"
                                  name="newUsername"
                                  placeholder="New username"
                                  value={this.state.newUsername}
                                  onChange={this.handleChange}
                            />
                            <button onClick={() => changeUsername(this.state.newUsername)}>Change Username</button>
                            </main> 
                        )}
                    </UserContextConsumer>
            </div>
        )
    }
}

export default App