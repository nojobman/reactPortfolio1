import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import construcitonImg from "../assets/img/undraw_under_construction_-46-pa.svg";
import seachImg from "../assets/img/undraw_search_engines_ij7q.svg";
import staticImg from "../assets/img/undraw_static_website_re_x70h.svg";
import designImg from "../assets/img/undraw_designer_re_5v95.svg";
import colorSharp from "../assets/img/color-sharp.png";
import htmlImg from "../assets/img/html.png";
import csslImg from "../assets/img/css.png";
import jsImg from "../assets/img/js.png";
import phplImg from "../assets/img/php.png";
import reactImg from "../assets/img/react.png";
import laravelImg from "../assets/img/laravel.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                スキル
                            </h2>
                            <p>フロントエンドからバックエンドまで幅広く学習しています。Web開発に興味を持ち、現在はJavaScript、React、Node.jsなどの技術を独学で学んでいます。コードを書くことが好きで、課題を解決するために自己学習に勤しんでいます。新しい技術について学ぶことにも積極的で、技術的な課題に直面すると、効果的かつクリエイティブな解決策を考えることができます。</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">

                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">


                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" />


                                    <h5>node.js</h5>
                                </div>
                                <div className="item">


                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />


                                    <h5>Mysql</h5>
                                </div>
                                <div className="item">

                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />

                                    <h5>PHP</h5>
                                </div>
                                <div className="item">

                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />

                                    <h5>React</h5>
                                </div>
                                <div className="item">

                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" />

                                    <h5>Laravel</h5>
                                </div>
                                <div className="item">

                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />

                                    <h5>CSS</h5>
                                </div>
                                <div className="item">

                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />

                                    <h5>HTML</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-left" src={colorSharp} /> */}

        </section>
    );
}