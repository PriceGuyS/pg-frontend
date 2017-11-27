import React from 'react';
import ReactDOM from 'react-dom';
import './Menu.css';
import Home from './Home.jsx'
import Browse from './Browse.jsx'
import About from './About'

const TopTabs = (tabs) =>{ 
  return (<div> 
			<button className="tablink" id = "home" onClick={tabs.clickon}>Home</button>
			<button className="tablink" id = "browse" onClick={tabs.clickon}>Browse</button>
			<button className="tablink" id = "about" onClick={tabs.clickon}>About</button>
      </div>
  );
};

var selectedTab = String("default");

class Menu extends React.Component {
	
  constructor(tabs) {
		super(tabs);    
    this.state = {
      selected: "home"
    };
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(event){
		var clickedId = event.target.id;
		selectedTab = clickedId.toString();
    selectedTab = String(clickedId);
    console.log(clickedId);
		/* if (selectedTab === 'home')
		{
			//alert(clickedId + " clicked!");
      
		}    
    else if (selectedTab === 'browse')
		{
			//alert(clickedId + " clicked!");
      
		}    
    else if (selectedTab === 'about')
		{
			//alert(clickedId + " clicked!");
			
		}else {} */
    //alert(this.id);
    //event.currentTarget.id += " active";
    //alert(this.state.selected);
    this.setState({      
        selected: event.currentTarget.id
      });
	}
	
	openTabs(event) {
	// Declare all variables
	}
	
  render(){
    //alert("Selected  " + selectedTab);
    if (selectedTab === 'home')
    {
      //alert("In " + selectedTab);
			return(<div>
				<TopTabs clickon={this.handleClick}/>
      <Home/></div>);
		}
    else if (selectedTab === 'browse')
    {
			//alert("In " + selectedTab);
      return(
        <div>
          <TopTabs clickon={this.handleClick}/>
          <Browse/>
        </div>
      );
		}
    else if (selectedTab === 'about')
    {
			//alert("In " + selectedTab);
			return(<div><About/></div>);
		}
    else
    {
      return(
        <div>
          <TopTabs clickon={this.handleClick}/>
          <Home/>
        </div>
      );
    } 
	};
}
ReactDOM.render(
<Menu/>, document.getElementById('root'))
export default Menu



