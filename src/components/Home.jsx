import img from '../img-home.jpg'

export default function Home() {
    return (
        <div className="main">
            <h1>Home</h1>
            <h3>The main purpose of this website is helping me to understand better all of the concepts that I'm learning at the moment</h3>
            <p>The web has a navbar section wich contains all links to the subjects. The first part consist
                on put all main topics that I know. On the left I put the main navbar which helps us to move 
                from one to another subject. After that I'd like to add a top navbar which should have all
                of the subtopics whithin the current page. It's not gonna be the best website, but the main goal
                is to explain somewhere my knowledge and maybe I'll go further and record videos about it.
            </p>
            <p>I separate this project into some of (I think) the most relevant things related to frontend web
                development; I try to focus more on React JS wchich is the technology that I'm currently working on.
                I also wanna explain the basics of JavaScript, from scratch.
            </p>
            <br/>
            <img src={img} alt="img-home"/>
            <br/>
            <p>I though that this image could picture my current state where I'm learning and teaching, it's a good
                cycle and fun.
            </p>
            <pre>
                <code>
                        <span>{`<!DOCTYPE html>\n<html>\n<head>\n\t<title>Example</title>\n</head>\n<body>\n\t<h1>Example</h1>\n\t<p>lorem ipsu</p>\n</body>\n</html>`}
                        </span>
                </code>
            </pre>
        </div>
    )
}