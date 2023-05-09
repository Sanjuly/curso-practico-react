import { NavLink } from "react-router-dom";

const NavBar = () => {
    const activeStyle = "underline underline-offset-4 text-red-600"

    return (
        <nav className="flex justify-between items-center top-0 fixed z-10 w-full py-5 px-8 text-sm font-light">           
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to="/">Shopi</NavLink>
                </li>
                <li>
                    <NavLink to="/home" className={({ isActive }) => (isActive ? activeStyle : null)}>All</NavLink>
                </li>
                <li>
                    <NavLink to="/clothes" className={({ isActive }) => (isActive ? activeStyle : null)}>Clothes</NavLink>
                </li>
                <li>
                    <NavLink to="/electronics"className={({ isActive }) => (isActive ? activeStyle : null)}>Electronics</NavLink>
                </li>
                <li>
                    <NavLink to="/furnitures" className={({ isActive }) => (isActive ? activeStyle : null)}>Furnitures</NavLink>
                </li>
                <li>
                    <NavLink to="/toys" className={({ isActive }) => (isActive ? activeStyle : null)}>Toys</NavLink>
                </li>
                <li>
                    <NavLink to="/others" className={({ isActive }) => (isActive ? activeStyle : null)}>Others</NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    sandracordoba16@gmail.com
                </li>
                <li>
                    <NavLink to="/my-orders" className={({ isActive }) => (isActive ? activeStyle : null)}>My Orders</NavLink>
                </li>
                <li>
                    <NavLink to="/my-account" className={({ isActive }) => (isActive ? activeStyle : null)}>My Account</NavLink>
                </li>
                <li>
                    <NavLink to="/sign-in" className={({ isActive }) => (isActive ? activeStyle : null)}>Sig In</NavLink>
                </li>
                <li>
                    🐱‍🚀 0
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;