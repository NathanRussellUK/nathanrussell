import * as React from "react"
import { connect } from "react-redux";
import { State } from "../../redux/state";
import { Dispatch } from "redux";
import { getRandomNumber } from "../../redux/duck-eggs/random-number";

export const GetInTouch = connect(
    (state: State) => ({
        randomNumber: state.system.randomNumber
    }),
    (dispatch: Dispatch) => ({
        getRandomNumber: () => { dispatch(getRandomNumber.create({})) }
    })
)(class extends React.Component<{
    randomNumber: State["system"]["randomNumber"]
    getRandomNumber: () => void
}, {}> {
    componentDidMount() {
        this.props.getRandomNumber()
    }
    render() {
        return <>
            {/* <p>Random Number: {this.props.randomNumber}</p> */}
            <h2>Get in touch</h2>
            <div className="contact-cards">
                <a className="contact-card" href="mailto:info@nathanrussell.me.uk">
                    <img src="/images/icons/mail.svg" />
                    <span>Email</span>
                </a>
                <a className="contact-card" href="https://www.github.com/nathanrusselluk" target="_blank">
                    <img src="/images/icons/github.svg" />
                    <span>Github</span>
                </a>
                <a className="contact-card" href="https://www.linkedin.com/nathanrusselluk" target="_blank">
                    <img src="/images/icons/linkedin.svg" />
                    <span>LinkedIn</span>
                </a>
                <a className="contact-card" href="https://www.twitter.com/nathanrusselluk" target="_blank">
                    <img src="/images/icons/twitter.svg" />
                    <span>Twitter</span>
                </a>
            </div>
        </>
    }
})