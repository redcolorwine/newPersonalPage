import cmedia from './blog.module.css'
import blogCat from '../../media/catagirl.png'
const Blog = (props) => {
    //Блог пока в разработке, потому пока просто вывод информации
    return (
        <div className={cmedia.blog}>
            <div className={cmedia.blogText}>
                <h1>There must be something interesting here!</h1>
                <p>
                    But there is no blog at the moment.
                    Let there be this beautiful picture with a beautiful girl with a beautiful cat :)</p>
            </div>
            <div className={cmedia.blogImg}>
                <img src={blogCat} alt="catGirl" />
            </div>

        </div>
    )
}

export default Blog;