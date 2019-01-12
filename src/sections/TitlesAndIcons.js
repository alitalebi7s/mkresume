import React, {Component} from 'react';
import Fullpage from "../components/Fullpage";
import DownArrow from "../components/DownArrow";
import data from "../data";
import {SocialIcon} from "react-social-icons";
import './TitlesAndIcons.css'
import {Link} from "react-scroll/modules";

export default class TitlesAndIcons extends Component {
    render() {
        return (
            <Fullpage className="first">
                <div className="page-body">
                    <h1 className="title">
                        {data.title}
                    </h1>
                    <h3 className="lead">
                        {data.subtitle}
                    </h3>
                    <div className="social-icon-container">
                        {
                            Object.keys(data.links).map(k => {
                                    return (
                                        <SocialIcon key={k} url={data.links[k]} bgColor="#bbb"/>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
                <Link activeClass="active" to="aboutSection" spy={true} smooth={true} duration={500}>
                    <DownArrow icon={data.icons.down}/>
                </Link>
            </Fullpage>
        );
    }
}
