import cmedia from './mainPage.module.css';
import meBW from '../../media/mebw.jpg';
import webOne from '../../media/webAppOne.png';
import webTwo from '../../media/webAppTwo.jpg';
import reactLogo from '../../media/logo/react.png';
import reduxLogo from '../../media/logo/redux.png';
import jsLogo from '../../media/logo/js.png';
import jqLogo from '../../media/logo/jq.png';
import htmlLogo from '../../media/logo/html.png';
import cssLogo from '../../media/logo/css.png';
import { useInView } from 'react-intersection-observer';
const MainPage = (props) => {
    const { ref: firstRef, inView: firstIsVisible } = useInView();
    const { ref: secondRef, inView: secondIsVisible } = useInView();
    const { ref: thirthRef, inView: thirthIsVisible } = useInView();
    const { ref: fourthRef, inView: fourthIsVisible } = useInView();
    const { ref: fivethRef, inView: fivethIsVisible } = useInView();
    const { ref: sixthRef, inView: sixthIsVisible } = useInView();
    const { ref: seventhRef, inView: seventhIsVisible } = useInView();
    const { ref: eighthRef, inView: eighthIsVisible } = useInView();
    return (
        <div className={cmedia.main}>
            <div className={cmedia.mainBlock}>
                <div ref={firstRef} className={`${cmedia.textblock} ${firstIsVisible ? cmedia.animateBlock : ' '}`}>
                    <h1> Hello!</h1>
                    <h3>My name is <span>Sergey</span></h3>
                    <p>I am a front-end developer, I am eager to
                        develop web applications and page layout.
                        Therefore, with great desire I will
                        complete any project :3</p>
                </div>
                <img src={meBW} alt="" ref={firstRef} className={`${firstIsVisible ? cmedia.animateBlockFourSec : ' '}`} />
            </div>
            <div className={cmedia.info}>
                <div className={cmedia.infoFirst}>
                    <div ref={secondRef} className={`${cmedia.infoFirstText} ${secondIsVisible ? cmedia.animateBlock : ' '}`}>
                        <p>For a long time I have been studying and
                            developing web applications. I really
                            enjoy web application development and would
                            love to put my skills and experience to good use.</p>
                    </div>
                    <div ref={secondRef} className={` ${secondIsVisible ? cmedia.animateBlockFourSec : ' '}`}>
                        <img src={webOne} alt="" />
                        <img src={webTwo} alt="" />
                    </div>

                </div>
                <div className={cmedia.infoSecond}>
                    <h4>What I Do...</h4>
                    <div className={cmedia.infoBlocks}>
                        <div className="reactBlock" ref={thirthRef} className={` ${thirthIsVisible ? cmedia.animateBlockOneSec : ' '}`}>
                            <p>React Application Development
                            </p>
                            <img src={reactLogo} alt="" />
                        </div>
                        <div className="reduxBlock" ref={fourthRef} className={` ${fourthIsVisible ? cmedia.animateBlockTwoSec : ' '}`}>
                            <p>Working with the redux library</p>
                            <img src={reduxLogo} alt="" />
                        </div>
                        <div className="javaScriptBlock" ref={fivethRef} className={` ${fivethIsVisible ? cmedia.animateBlock : ' '}`}>
                            <p>Javascript development</p>
                            <img src={jsLogo} alt="" />
                        </div>
                        <div className="jQueryBlock" ref={sixthRef} className={` ${sixthIsVisible ? cmedia.animateBlockThreeSec : ' '}`}>
                            <p>Working with jquery library</p>
                            <img src={jqLogo} alt="" />
                        </div>
                        <div className="cssBlock" ref={seventhRef} className={` ${seventhIsVisible ? cmedia.animateBlockFourSec : ' '}`}>
                            <p>CSS3 skills</p>
                            <img src={cssLogo} alt="" />
                        </div>
                        <div className="htmlBlock" ref={eighthRef} className={` ${eighthIsVisible ? cmedia.animateBlockFiveSec : ' '}`}>
                            <p>HTML5 skills</p>
                            <img src={htmlLogo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;