import * as React from "react"
import { connect } from "react-redux";
import { State } from "../../redux/state";
import { Dispatch } from "redux";
import { getRandomNumber } from "../../redux/duck-eggs/random-number";
import { PurePlanetExperience, PurePlanetGallery } from "../pure-planet";

export const Home = connect(
    (state: State) => ({
        randomNumber: state.system.randomNumber
    }),
    (dispatch: Dispatch) => ({
        getRandomNumber: () => { dispatch(getRandomNumber.create({})) }
    })
)(class extends React.Component<{
    randomNumber: State["system"]["randomNumber"]
    getRandomNumber: () => void
}, {
    purePlanetGalleryIsOpen: boolean
}> {
    constructor(props) {
        super(props)

        this.state = {
            purePlanetGalleryIsOpen: false
        }
    }

    componentDidMount() {
        this.props.getRandomNumber()
    }

    openPurePlanetGallery = () => {
        this.setState({ purePlanetGalleryIsOpen: true })
    }

    closePurePlanetGallery = () => {
        this.setState({ purePlanetGalleryIsOpen: false })
    }
    
    render() {
        return <>
            <h2>Experience</h2>
            {/* <p>Random Number: {this.props.randomNumber}</p> */}
            <PurePlanetGallery
                isOpen={this.state.purePlanetGalleryIsOpen}
                onClose={this.closePurePlanetGallery}
            />
            <PurePlanetExperience openGallery={this.openPurePlanetGallery} />
            <div className="experiences">
                <div className="experience">
                    <h3>Rocketmakers</h3>
                    <img src="/images/rocketmakers.jpg" />
                    <p>Our evolving tech stack has continuously challenged me to write better code, with the latest and greatest technologies.</p>
                    <p>We've generally worked with an informal version of scrum, meaning I've had to take responsibility for firming up task requirements, and keeping clients up-to-date with progress.</p>
                </div>
            </div>
        </>
    }
})