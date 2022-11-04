import './topbar.css'
import { Link } from 'react-router-dom'
const TopBar = () => {
    const user = false;
    return (
        <div className='topbar'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-square-pinterest"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className='link' to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to="/about">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to="/contact">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to="/logout">{user && "LOGOUT"}</Link>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img className='topImg' src="https://i.ibb.co/d4NDyZZ/7cc7a630624d20f7797cb4c8e93c09c1.png" alt="" />
                    ) :
                        <>
                            <ul className='topList'>
                                <li className='topListItem'>
                                    <Link className='link' to="/signin">SIGN IN</Link>
                                </li>
                                <li className='topListItem'>
                                    <Link className='link' to="/signup">SIGN UP</Link>
                                </li>
                            </ul>
                        </>
                }
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default TopBar