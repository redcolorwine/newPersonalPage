import cmedia from './about.module.css'
import meBW from '../../media/mebw.jpg';
const About = (props) => {
    // Страница "ОБО МНЕ" 
    // Просто выводим информацию
    return (
        <div className={cmedia.about}>
            <div className={cmedia.aboutText}>
                <h1>My name is Sergey!</h1>
                <p>
                    I am engaged in layout and development of Web applications.
                    I always try to learn something new and interesting. After studying
                    at the university with a degree in Computer Science and Engineering, I
                    found myself in Web development and realized that this was mine. Much is
                    given to me not without difficulty, but I like all this, because with each
                    interesting and difficult task, invaluable experience is gained.
                </p>
            </div>
            <div className={cmedia.aboutImg}>
                <img src={meBW} alt="ME" />
            </div>


        </div>
    )
}

export default About;