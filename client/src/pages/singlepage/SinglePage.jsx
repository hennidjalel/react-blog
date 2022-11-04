
import SideBar from '../../components/sidebar/SideBar'
import SinglePost from '../../components/singlePost/SinglePost'
import './singlepage.css'

const SinglePage = () => {
    return (
        <div className='single'>
            <SinglePost/>
            <SideBar/>
        </div>
    )
}

export default SinglePage