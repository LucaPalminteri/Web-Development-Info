import InnerMenu from "./InnerMenu"

const dataMenu = ['http','api','protocols','rest']

export default function Api() {
    return (
        <div className="main">
            <InnerMenu value={dataMenu}/>
            <h1>API</h1>
            <ul>
                <li id="http"><a href="https://medium.com/@imamun/a-simple-api-summary-e84af524aa11">Summary</a></li>
                <li><a href="https://www.ibm.com/cloud/learn/api" target='_blank'>What is an application programming interface (API)?</a></li>
                <li id="api">How API works?</li>
                <li>Why we need APIs?</li>
                <li>Common API examples</li>
                <li>Types of APIs</li>
                <li id="protocols">Types of APIs protocols</li>
                <li>APIs, web services, and microservices</li>
                <li>APIs and cloud architecture</li>
                <li><a href="https://blog.hubspot.com/website/api-endpoint">What Is an API Endpoint?</a></li>
                <li id="rest"><a href="https://www.restapitutorial.com/lessons/whatisrest.html">What Is REST?</a></li>
                <li><a href="https://restfulapi.net/">What is REST(2nd)</a></li>
                <li><a href="https://zapier.com/learn/apis/">Introduction to APIs</a></li>
            </ul>
        </div>
    )
}