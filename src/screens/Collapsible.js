import React from 'react';

class Collapsible extends React.Component {
    state = {
        on: false,
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }

    render(){
        return (
            <div>
                <h1 className="visible" onClick = "this.className = 'invisible-name'" >Brook</h1>
                <h2 className="invisible-name">Magar</h2>
            </div>
        )
    }

}
export default Collapsible;