import React from 'react';
import './Menu.css'

export default class Menu extends React.Component {
    constructor(){
        super();
        this.state = { isExpanded: false };
    }
    
    toggleState() {
        this.setState({ isExpanded: !this.state.isExpanded});
    }
    
    
    
    render() {
        return(
            <div className='Menu'>
                <MenuButton 
                isExpanded={this.state.isExpanded}
                onButtonClicked={() => this.toggleState()} />
                <div className='Menu-links'>
                   <div className='Menu-link'>Home</div> 
                   <div className='Menu-link'>Project</div>
                   <div className='Menu-link'>Contact</div>
                </div>
            </div>

        );
    }
}

function MenuButton( {isExpanded, onButtonClicked}) {
    return(
        <button 
        className='MenuButton'
        onClick={() => onButtonClicked() }>
            Is Menu Expanded? {isExpanded ? 'Yes!' : 'No'} 
        </button>
    );
}