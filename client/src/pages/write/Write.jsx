import './write.css'
import post from '../../images/wolfgang.jpg'
const Write = () => {
    return (
        <div className='write'>
            <img className='writeImg' src={post} alt="" />
            <form className="writeForm">
                <div className="writeFormGrop">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-folder-plus"></i>
                    </label>
                    <input type="file" id='fileInput' style={{ display: 'none' }} />
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
                </div>
                <div className="writeFormGrop">
                    <textarea placeholder='Tell your story...' type="text" className='writeInput writeText'></textarea>
                </div>
                <button className="writeButton">Publish</button>
            </form>
        </div>
    )
}

export default Write