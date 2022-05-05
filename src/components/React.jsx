import InnerMenu from "./InnerMenu";

const dataMenu = ["introduction", "jsx", "events", "props", "state"];

export default function React() {
  return (
    <div className="main">
        <InnerMenu value={dataMenu}/>
      <h1>React</h1>
      <h2>
        <a href="https://reactjs.org/docs/getting-started.html">
          Official React Documentation
        </a>
      </h2>
      <ul>
        <li id="introduction">Introduction to React.js</li>
        <li>File & Folder structure</li>
        <li>Components</li>
        <li id="jsx">JSX</li>
        <li id="props">Props</li>
        <li id="state">State</li>
        <li id="events">Events</li>
        <li>Styling</li>
        <li>Conditional Rendering</li>
        <li>Hooks</li>
        <ul>
          <li>useState</li>
          <li>useEffects</li>
          <li>useRef</li>
          <li>useContext</li>
          <li>useReducer</li>
          <li>useMemo</li>
          <li>useCallback</li>
        </ul>
        <li>UI Frameworks</li>
        <li>Material UI</li>
        <li>Ant Design</li>
        <li>Chakra UI</li>
        <li>React Bootstrap</li>
        <li>Rebass</li>
        <li>Blueprint</li>
        <li>Semantic UI React</li>
        <li>React Router</li>
        <li>React Query</li>
        <li>Axios</li>
        <li>React Hook Form</li>
        <li>Styled Components</li>
        <li>Storybook</li>
        <li>Framer Motion</li>
        <li>Redux</li>
        <li>MobX</li>
        <li>Hookstate</li>
        <li>Recoil</li>
        <li>Akita</li>
        <li>Next JS</li>
        <li>Gatsby</li>
        <li>TypeScript</li>
        <li>React Native</li>
        <li>Electron</li>
        <li>Jest</li>
        <li>Netlify</li>
        <li>Vercel</li>
        <li>Firebase</li>
        <li>Github Pages</li>
        <li></li>
      </ul>
    </div>
  );
}
