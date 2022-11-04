import SideBar from '../../components/sidebar/SideBar'
import './settings.css'
import picture from "../../images/wolfgang.jpg"

const Settings = () => {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img className='' src={ picture } alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                        </label>
                        <input type="file" id='fileInput' style={{ display: "none" }} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Henni' />
                    <label>Email</label>
                    <input type="email" placeholder='henni@gmail.com' />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <SideBar />
        </div>
    )
}

export default Settings