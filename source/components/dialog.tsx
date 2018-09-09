import * as React from "react"

export interface DialogProps {
    isOpen: boolean
    onClose: () => void
    title: string
}

export class Dialog extends React.Component<DialogProps, {}> {
    onEscape = (event: KeyboardEvent) => {
        if (this.props.isOpen && event.keyCode === 27) {
            this.props.onClose()
        }
    }
    
    componentDidMount() {
        addEventListener("keypress", this.onEscape)
    }

    componentWillUnmount() {
        removeEventListener("keypress", this.onEscape)
    }

    render() {
        return <>
            <div
                className="dialog-layer"
                data-is-open={this.props.isOpen}
                onClick={this.props.onClose}
            />
            <div className="dialog" data-is-open={this.props.isOpen}>
                <div className="header">
                    <h2>{this.props.title}</h2>
                    <button className="negative" onClick={this.props.onClose}>
                        Close
                    </button>
                </div>
                {this.props.children}
            </div>
        </>
    }
}