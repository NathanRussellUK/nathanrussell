import * as React from "react"

export const Logo: React.FunctionComponent = props => <svg
    className="logo"
    viewBox="0 0 168 168" 
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <g filter="url(#filter0_d)">
        <rect x="5" y="5" width="150" height="150" fill="#C4C4C4"/>
        <rect x="2.5" y="2.5" width="155" height="155" stroke="white" stroke-width="5"/>
    </g>
    <rect x="105" y="105" width="50" height="50" fill="#138CBF"/>
    <rect x="55" y="105" width="50" height="50" fill="#0E668C"/>
    <rect x="5" y="105" width="50" height="50" fill="#094058"/>
    <rect x="55" y="55" width="50" height="50" fill="#0E8C73"/>
    <rect x="5" y="55" width="50" height="50" fill="#095D4C"/>
    <rect x="105" y="55" width="50" height="50" fill="#11A688"/>
    <rect x="55" y="5" width="50" height="50" fill="#BF1D3D"/>
    <rect x="5" y="5" width="50" height="50" fill="#92162F"/>
    <rect x="105" y="5" width="50" height="50" fill="#F2244E"/>
    <defs>
        <filter id="filter0_d" x="0" y="0" width="168" height="168" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dx="4" dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
    </defs>
</svg>
