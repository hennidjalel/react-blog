import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './sidebar.css'

const SideBar = () => {

    const [cats, seCat] = useState([]);


    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get('/categories');
            seCat(res.data)
        };
        getCats();
    }, [])





    return (
        <div className='sideBar'>
            <div className="sideBarItem">
                <span className="sideBarTitle">ABOUT ME</span>
                <img className='sideBarImg' src="https://i.ibb.co/fNdnMBC/alexander-hipp-i-EEBWg-Y-6l-A-unsplash.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, et voluptatibus doloremque </p>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">CATEGORIES</span>
                <ul className="sideBarList">
                    {cats.map(cat => (
                        <Link to={`/?cat=${cat.name}`} className="link">
                            <li className="sideBarListItem">{cat.name}</li>
                        </Link>
                    ))}

                </ul>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">FOLLOW US</span>
                <div className="sideBarSocialIcons">
                    <i className="sideBarIcon fa-brands fa-square-facebook"></i>
                    <i className="sideBarIcon fa-brands fa-square-pinterest"></i>
                    <i className="sideBarIcon fa-brands fa-square-instagram"></i>
                    <i className="sideBarIcon fa-brands fa-square-twitter"></i>
                </div>
            </div>
        </div>
    )
}

export default SideBar