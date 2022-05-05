import InnerMenu from "./InnerMenu"

const dataMenu = ['syntax','selectors','colors','padding','margin']

export default function Css() {
    return (
        <div className="main">
            <InnerMenu value={dataMenu}/>
            <h1>CSS</h1>
            <h2><a href="https://devdocs.io/css/">Official CSS Documentation</a></h2>
            <ul> 
                <li>Introduction to CSS</li>
                <li id="syntax">Syntax</li>
                <li id="selectors">Selectors</li>
                <li>Comments</li>
                <li id="colors">Colors</li>
                <li>Backgrounds</li>
                <li>Borders</li>
                <li id="margin">Margins</li>
                <li id="padding">Padding</li>
                <li>Height/Width</li>
                <li>Box Model</li>
                <li>Outline</li>
                <li>Text</li>
                <li>Fonts</li>
                <li>Icons</li>
                <li>Links</li>
                <li>Lists</li>
                <li>Tables</li>
                <li>Display</li>
                <li>Max-width</li>
                <li>Position</li>
                <li>Z-index</li>
                <li>Overflow</li>
                <li>Float</li>
                <li>Inline-block</li>
                <li>Align</li>
                <li>Combinators</li>
                <li>Pseudo-class</li>
                <li>Pseudo-element</li>
                <li>Opacity</li>
                <li>Navigation Bar</li>
                <li>Dropsdowns</li>
                <li>Image Gallery</li>
                <li>Image Sprites</li>
                <li>Attr Selectors</li>
                <li>Forms</li>
                <li>Counters</li>
                <li>Wrbsite Layout</li>
                <li>Units</li>
                <li>Specifications</li>
                <li>!important</li>
                <li>Math functions</li>
            </ul>
        </div>
    )
}