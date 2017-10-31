import React, { Component } from 'react';
import './Menu.css';
import Home from './Home.js'
import Query from './Query.js'
import About from './About.js'

class Menu extends React.Component {	
  render() {
    return (
      <div className="Menu">
				<div id="home" className="tabcontent">					
					<header className="Home-header">
						<h3>HOME</h3>
					</header>
					<p>HOME is where the heart is, and the heart is in gaming.</p>
					<p className="Home-intro">
						To get started, click Query and submit your choices.
					</p>
				</div>
				<button className="tablink" onclick={"openTabs('query', this, 'blue')"} 
				id="defaultOpen">Home</button>
				<button className="tablink" onclick="openTabs('query', this, 'blue')">Browse</button>
				<button className="tablink" onclick="openTabs('about', this, 'green'">About</button>		
      </div>			
    );
	}
}

function openTabs(tabName, elmnt, color) {
	// Hide all elements with class="tabcontent" by default */
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	
	for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
	}

	// Remove the background color of all tablinks/buttons
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < tablinks.length; i++) {
			tablinks[i].style.backgroundColor = "";
	}

	// Show the specific tab content
	document.getElementById(tabName).style.display = "block";

	// Add the specific color to the button used to open the tab content
	elmnt.style.backgroundColor = color;
}
export default Menu



