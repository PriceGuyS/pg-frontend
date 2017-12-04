import React, { Component } from 'react';
import './Home.css';
import SearchBar from './SearchBar';
import { Container, Row, Col, Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button} from 'reactstrap';
import search from './queryTest';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: ['Bomberman 64', 'Custom Robo', 'Custom Robo V2', 'Neon Genesis Evangelion', 'Nushi Tsuri 64', 'PD Ultraman Battle Collection 64', 'SimCity 2000', 'Wonder Project J2', 'F-1 World Grand Prix II', 'F1 Racing Championship', 'All-Star Baseball 2001', 'Army Men: Air Combat', "Army Men: Sarge's Heroes 2", 'BattleTanx', 'Bottom of the 9th', 'Brunswick Circuit Pro Bowling', 'California Speed', "Cruis'n Exotica", 'Dr. Mario 64', "Elmo's Letter Adventure", "Elmo's Number Journey", "Fox Sports College Hoops '99", 'Golden Nugget 64', 'Indiana Jones and the Infernal Machine', 'Indy Racing 2000', 'Jeopardy!', "Ken Griffey Jr.'s Slugfest", 'Madden NFL 2000', 'Madden NFL 2001', 'Madden NFL 2002', "Mike Piazza's Strike Zone", 'Monopoly', 'Ms. Pac-Man: Maze Madness', 'Namco Museum 64', 'NASCAR 2000', 'NFL Blitz', 'NFL Blitz 2000', 'NFL Blitz 2001', 'NFL Blitz Special Edition', 'NFL QB Club 2001', 'Nightmare Creatures', 'Polaris SnoCross', 'Razor Freestyle Scooter', 'Ready 2 Rumble Boxing: Round 2', 'Space Invaders', 'Spider-Man', 'Stunt Racer 64', "Tony Hawk's Pro Skater 3", 'Triple Play 2000', 'WCW Backstage Assault', 'WCW Nitro', 'Wheel of Fortune', 'Big Mountain 2000', 'Fighter Destiny 2', 'Harvest Moon 64', 'Hey You, Pikachu!', 'Mega Man 64', 'Ogre Battle 64: Person of Lordly Caliber', 'Rally Challenge 2000', 'Star Soldier: Vanishing Earth', 'Super Bowling', 'Transformers: Beast Wars Transmetals', "A Bug's Life", 'Aidyn Chronicles: The First Mage', 'All-Star Baseball 99', 'All-Star Baseball 2000', 'Armorines: Project S.W.A.R.M.', "Army Men: Sarge's Heroes", 'Bass Hunter 64', 'Batman Beyond: Return of the Joker', 'BattleTanx: Global Assault', 'Blues Brothers 2000', 'Body Harvest', 'Bust-A-Move 2: Arcade Edition', 'Clay Fighter 63 1/3', 'Command and Conquer', "Conker's Bad Fur Day", "Cruis'n USA", "Cruis'n World", 'CyberTiger', 'Destruction Derby 64', "Disney's Tarzan", "Donald Duck: Goin' Quackers", 'Duck Dodgers Starring Daffy Duck', 'Duke Nukem: Zero Hour', 'Duke Nukem 64', 'Earthworm Jim 3D', 'ECW Hardcore Revolution', 'FIFA 99', 'Fighting Force 64', 'Gex 3: Deep Cover Gecko', 'Gex 64: Enter the Gecko', 'Glover', 'Hot Wheels Turbo Racing', 'Hydro Thunder', 'Jeremy McGrath Supercross 2000', 'Killer Instinct Gold', 'Knockout Kings 2000', 'LEGO Racers', 'Madden Football 64', 'Madden NFL 99', 'Major League Baseball Featuring Ken Griffey Jr.', 'Mia Hamm Soccer 64', 'Micro Machines 64 Turbo', "Milo's Astro Lanes", 'Mission: Impossible', 'Monaco Grand Prix', 'Monster Truck Madness 64', 'Mortal Kombat 4', 'Mortal Kombat Mythologies: Sub-Zero', 'Mortal Kombat Trilogy', 'NASCAR 99', 'NBA Hang Time', 'NBA In The Zone 2000', 'NBA Jam 99', 'NBA Jam 2000', 'NBA Live 99', 'NBA Live 2000', 'The New Tetris', 'NFL Quarterback Club 98', 'NFL Quarterback Club 99', 'NFL Quarterback Club 2000', 'NHL 99', "NHL Blades of Steel '99", 'NHL Breakaway 98', 'Nuclear Strike 64', 'Off Road Challenge', 'Paperboy', 'PGA European Tour', 'Power Rangers Lightspeed Rescue', 'Quake', 'Quake II', 'Rampage 2: Universal Tour', 'Rampage World Tour', 'Rat Attack!', 'Rayman 2: The Great Escape', 'Re-Volt', 'Ready 2 Rumble Boxing', 'Ridge Racer 64', 'Road Rash 64', 'Roadsters', 'Robotron 64', 'Rocket: Robot on Wheels', 'Rugrats in Paris: The Movie', 'San Francisco Rush 2049', 'Shadow Man', 'South Park', "South Park: Chef's Luv Shack", 'South Park Rally', 'StarCraft 64', 'Supercross 2000', 'Tetrisphere', "Tigger's Honey Hunt", 'Tom and Jerry in Fists of Furry', "Tom Clancy's Rainbow Six", 'Tonic Trouble', "Tony Hawk's Pro Skater", "Tony Hawk's Pro Skater 2", 'Turok: Rage Wars', 'Turok 3: Shadow of Oblivion', 'Vigilante 8', 'Vigilante 8: 2nd Offense', 'War Gods', 'WCW Mayhem', 'Wipeout 64', 'World Cup 98', 'World Driver Championship', 'Worms Armageddon', 'WWF Attitude', 'WWF War Zone', 'Aero Gauge', 'Automobili Lamborghini', 'Banjo-Kazooie', 'Banjo-Tooie', 'Blast Corps', 'Bomberman 64', 'Bomberman Hero', 'Buck Bumble', "Bust-A-Move '99", 'Castlevania', 'Castlevania: Legacy of Darkness', 'Chameleon Twist', 'Chameleon Twist 2', 'Chopper Attack', 'Dark Rift', 'Diddy Kong Racing', 'Donkey Kong 64', 'Doom 64', 'Dual Heroes', 'Extreme-G', 'F-1 World Grand Prix', 'F-Zero X', 'F1 Pole Position 64', 'Fighters Destiny', 'Flying Dragon', 'Gauntlet Legends', "Goemon's Great Adventure", 'GoldenEye 007', 'Hexen', 'Hybrid Heaven', "Iggy's Reckin' Balls", 'International Superstar Soccer 64', 'International Superstar Soccer 2000', 'Jet Force Gemini', "John Romero's Daikatana", 'Kirby 64: The Crystal Shards', "The Legend of Zelda: Majora's Mask", 'The Legend of Zelda: Ocarina of Time', 'Magical Tetris Challenge', 'Mario Golf', 'Mario Kart 64', 'Mario Party', 'Mario Party 2', 'Mario Party 3', 'Mario Tennis', "Mickey's Speedway USA", 'Mischief Makers', "Nagano Winter Olympics '98", "NBA In The Zone '99", 'Paper Mario', 'Penny Racers', 'Perfect Dark', 'Pilotwings 64', 'Quest 64', 'Resident Evil 2', 'Snowboard Kids', 'Snowboard Kids 2', 'Star Fox 64', 'Star Wars: Rogue Squadron', 'Star Wars: Shadows of the Empire', 'Super Mario 64', 'Super Smash Bros.', 'Top Gear Overdrive', 'Top Gear Rally', 'Top Gear Rally 2', 'Turok: Dinosaur Hunter', 'Turok 2: Seeds of Evil', 'Wave Race 64', 'Wetrix', 'WinBack: Covert Operations', "Yoshi's Story"],
      displayedInfo: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    for (var i = 0; i < 3; i++) {
      var index = Math.floor(Math.random() * this.state.games.length);

      search("EbayAndAmazon", this.state.games[index])
        .on('success', (res) => {
          this.setState((prevState, props) => {
            if(prevState) {
              var info = prevState.displayedInfo.concat(res.data.Items[0])
            }
            return {
              displayedInfo: info
            };
          });
          this.setState({
            games: this.state.games.splice(index, 1)
          });
        })
        .on('error', (err) => {
          console.log(err);
        });
    }
  }

  handleClick(event, data) {
    this.props.history.push({
      pathname: '/item',
      search: '?id=' + data.amazon.id,
      state: { itemData: data }
    });
  }

  render() {
    return(
      <div className="Home">
					<p className="intro">Home is where the heart is, and the heart is in gaming.</p>
          <SearchBar history={this.props.history}/>
          <Container className="items-container">
            <Row>
              {this.state.displayedInfo.map(game =>
              <Col key={game.id}>
                <Card>
                  <CardImg src={game.amazon.imageURL === "N/A" ? game.ebay.imageURL : game.amazon.imageURL} alt={game.title} className="game-image"/>
                  <CardBody>
                    <CardTitle className="game-title">{game.title}</CardTitle>
                    <CardSubtitle>Lowest Price: ${Math.min(parseFloat(game.amazon.price), parseFloat(game.ebay.price)).toFixed(2)}</CardSubtitle>
                    <Button className="view-button" onClick={(e) => this.handleClick(e, game)}>View</Button>
                  </CardBody>
                </Card>
              </Col>)}
            </Row>
          </Container>
			</div>
    );
	}
}

export default Home;
