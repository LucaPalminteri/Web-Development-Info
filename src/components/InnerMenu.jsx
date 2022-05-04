import { nanoid } from "nanoid";

export default function InnerMenu(props) {
    const menu = props.value.map(item => {
        return (<a className="item-menu" key={nanoid()} href={`#${item}`}>{item}</a>)
    })
    return (
        <nav className="navbar-menu">
            {menu}
        </nav>
    )
}