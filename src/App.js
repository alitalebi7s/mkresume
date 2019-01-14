import React, {Component} from "react";
import TitlesAndIcons from "./sections/TitlesAndIcons";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import NavBar from "./components/NavBar";
import "./App.css";


class App extends Component {
    constructor() {
        super()
        this.state = {
            colorSet: 0,
            showWand: true,
            scrollPos: 0,
            scrollBreaked: false
        }
    }

    changeColor(scrollPos) {
        this.setState({
            colorSet: this.getRandomColor(),
            scrollBreaked : true,
            scrollPos : scrollPos})
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }



    handleScroll = (event) => {
        if (window.scrollY == 0 && this.state.scrollBreaked) {
            window.scrollTo(0,this.state.scrollPos)
            this.setState({scrollBreaked : false})
        }
        else if(window.scrollY <= 300) {
            this.setState({showWand: true})
        }
        else{this.setState({showWand : false})}
    }

    getRandomColor = () => {
        let cs = Math.floor((Math.random() * 4) + 0)
        return (cs === this.state.colorSet) ? this.getRandomColor() : cs
    }


    render() {
        return (


            <div className="App">
                <NavBar ColorChangerTrigger={this.changeColor.bind(this)} showWand = {this.state.showWand} />
                <TitlesAndIcons colorSet={this.state.colorSet}/>
                <AboutSection/>
                <SkillSection/>
            </div>
        );
    }
}

export default App;
