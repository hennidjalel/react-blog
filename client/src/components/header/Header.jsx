import './header.css'
import headerImg from '../../images/unsplash.jpg'

const Header = () => {
    return (
        <div className='header'>
            <div className="headerTitle">
                <span className='titleSm'>React & Node</span>
                <span className='titleLg'>Blog</span>
            </div>
            <img className='headerImg' src={headerImg} alt="" />
        </div>
    )
}

export default Header