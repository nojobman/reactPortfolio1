import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImag from "../assets/img/header-img.svg";
import { Link as Scroll } from 'react-scroll';
import TrackVisibility from 'react-on-screen';
import dolphine from "../assets/img/dolphine.png";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["企業用/個人用HP", "ECサイト/会員制フォーラム", "ポートフォリオ"];
    const [text, setText] = useState('');
    // 周期？
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "" : ""}>
                                <span className="tagline">Welcome to my portfolio</span>
                                <div className="text-area">
                                <span className="wrap welcome-text">{text}</span>
                                </div>
                                <p>はじめまして、このウェブサイトを訪れていただきありがとうございます。このサイトでは、私がこれまでに学んできたプログラミングの技術や制作した作品を紹介しています。少しでも興味を持っていただけたら嬉しいです。</p>
                                <Scroll to="contact" smooth={true} className="button">お問合せ <ArrowRightCircle size={25} /></Scroll>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <img src={dolphine} alt="Headder Img" />

                    </Col>
                </Row>
            </Container>
        </section>
    );
}