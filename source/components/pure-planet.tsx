import * as React from "react"
import { Dialog, DialogProps } from "./dialog";
import { SlideShow } from "./slide-show";

export const PurePlanetGallery: React.SFC<Pick<DialogProps, "isOpen" | "onClose">> 
    = props => {
        var params = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30
          };

        return <Dialog
            isOpen={props.isOpen}
            onClose={props.onClose}
            title="Pure Planet Gallery"
        >
            <SlideShow images={[
                "images/pure-planet/app/screenshot-1.png",
                "images/pure-planet/app/screenshot-2.png",
                "images/pure-planet/app/screenshot-3.png",
                "images/pure-planet/app/screenshot-4.png",
                "images/pure-planet/app/screenshot-5.png",
                "images/pure-planet/website/screenshot-1.png",
                "images/pure-planet/website/screenshot-2.png"
            ]} />
        </Dialog>
    }

export const PurePlanetExperience: React.SFC<{
    openGallery: () => void
}> = props => <div className="experience">
    <h3>Pure Planet</h3>
    <img src="/images/pure-planet/logo.jpg" />
    <p>"Clean, renewable energy, cheaper than power that pollutes."</p>
    <p>I've been working on the Pure Planet Android and iOS apps, responsive marketing website and public API for over 12 months.</p>
    <p><a href="https://cordova.apache.org/" target="_blank">Apache Cordova</a>'s been used for the native mobile apps, the public API is written in <a href="https://nodejs.org/" target="_blank">Node</a>, and the apps' and website's frontends both use <a href="https://reactjs.org/" target="_blank">React</a>. <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> has been used across the board.</p>
    <button onClick={props.openGallery}>Open gallery</button>
</div>