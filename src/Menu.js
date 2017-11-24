import React from 'react';
import ReactDOM from 'react-dom';
import './Menu.css';
import Home from './Home.js'
import Browse from './Browse.js'
import About from './About.js'

const TopTabs = (tabs) =>{ 
  return (<div> 
			<button className="tablink" id = "home" onClick={tabs.clickon}>Home</button>
			<button className="tablink" id = "browse" onClick={tabs.clickon}>Browse</button>
			<button className="tablink" id = "about" onClick={tabs.clickon}>About</button>	
      </div>
  );
};

class Menu extends React.Component {
	
  constructor(tabs) {
		super(tabs);
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(event){
		var clickedId = event.target.id;
		var selectedTab = new String(clickedId);
    console.log(clickedId);
		alert("It works! You clicked " + clickedId)

		if (selectedTab == 'home')
		{
			alert("It works!" + clickedId);
			<Home/>
		}
		event.currentTarget.className += " active";
	}
	
	openTabs(event) {
	// Declare all variables
	}
	
  render(){		
		return (
			<div>
				<TopTabs clickon={this.handleClick}/>
				
			</div>
    );
	}
}
ReactDOM.render(
<Menu />, document.getElementById('root'))
export default Menu



