import * as React from "react"

class View extends React.Component<{
    image: string
    onNext: () => void
    onPrevious: () => void
}, {}> {
    openImage = () => {
        open(this.props.image, "_blank")
    }
    render() {
        return <div className="view">
            <button className="open secondary" onClick={this.openImage}>Open image in new window/tab</button>
            <button className="prev" onClick={this.props.onPrevious}>Previous</button>
            <img src={this.props.image} />
            <button className="next" onClick={this.props.onNext}>Next</button>
        </div>
    }
}

class Thumbnails extends React.Component<{
    activeIndex: number
    images: string[]
    onChange: (index: number) => void
}, {}> {
    thumbnails: HTMLDivElement

    mapImagesToThumbnail = (image: string, index: number) => {
        return <img
            key={`thumbnail-${index}`}
            src={image}
            data-index={index}
            className="thumbnail"
            onClick={() => this.props.onChange(index)}
            data-is-active={index === this.props.activeIndex}
        />
    }

    render() {
        return <div
            className="thumbnails"
            ref={ref => this.thumbnails = ref}
        >
            {this.props.images.map(this.mapImagesToThumbnail)}
        </div>
    }

    componentDidUpdate() {
        const activeThumbnail = this.thumbnails.childNodes[this.props.activeIndex] as HTMLImageElement
        activeThumbnail.scrollIntoView({ behavior: "smooth" })
    }
}

export class SlideShow extends React.Component<{
    images: string[]
}, {
    activeIndex: number
}> {
    constructor(props) {
        super(props);

        this.state = { activeIndex: 0 }
    }

    setActiveIndex = (index: number) => {
        this.setState({ activeIndex: index })
    }

    incrementActiveIndex = () => {
        if (this.state.activeIndex < this.props.images.length - 1) {
            this.setActiveIndex(this.state.activeIndex + 1)
        } else {
            this.setActiveIndex(0)
        }
    }

    decrementActiveIndex = () => {
        if (this.state.activeIndex > 0) {
            this.setActiveIndex(this.state.activeIndex - 1)
        } else {
            this.setActiveIndex(this.props.images.length - 1)
        }
    }

    render() {
        return <div className="slide-show">
            <View
                image={this.props.images[this.state.activeIndex]}
                onNext={this.incrementActiveIndex}
                onPrevious={this.decrementActiveIndex}
            />
            <Thumbnails
                activeIndex={this.state.activeIndex}
                images={this.props.images}
                onChange={this.setActiveIndex}
            />
        </div>
    }
}