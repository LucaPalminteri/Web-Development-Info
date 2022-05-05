import InnerMenu from "./InnerMenu"
const dataMenu = ['introduction','tags','attributes','form','responsive']

export default function Html() {
    return (
        <div className="main">
            <InnerMenu value={dataMenu}/>
            <h1>HTML</h1>
            <h2><a href="https://devdocs.io/html/">Official HTML Documentation</a></h2>
            <ul>
                <li id={dataMenu[0]}>Introduction to HTML</li>
                <li>What is HTML?</li>
                <li>HTML text editors</li>
                <li>Building Blocks</li>
                <li id={dataMenu[1]}>Tags</li>
                <li id={dataMenu[2]}>Attributes</li>
                <li>Elements</li>
                <li>Formatting</li>
                <li>Heading</li>
                <li>Paragraph</li>
                <li>Phrase Tags</li>
                <li>Image</li>
                <li>Table</li>
                <li>Lists</li>
                <li>Ordered List</li>
                <li>Unordered List</li>
                <li>Description List</li>
                <li id={dataMenu[3]}>Form</li>
                <li>Form Input</li>
                <li>Form Attribute</li>
                <li>With CSS</li>
                <li>Classes</li>
                <li>Id</li>
                <li>Iframes</li>
                <li>Comments</li>
                <li>File Path</li>
                <li>Head</li>
                <li>Layout</li>
                <li id={dataMenu[4]}>Responsive</li>
                <li>Symbols</li>
                <li>Charset</li>
                <li>URL encode</li>
            </ul>
        </div>
    )
}