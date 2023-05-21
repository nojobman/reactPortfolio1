import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/product5.png";
import projImg5 from "../assets/img/product10.png";
import projImg6 from "../assets/img/product12.png";
import projImg7 from "../assets/img/product6.png";
import projImg8 from "../assets/img/product18.png";
import projImg9 from "../assets/img/product20.png";
import TrackVisibility from 'react-on-screen';



export const Projects = () => {

    const projects = [
        {
            title: "旅行会社",
            description: "デザインと機能性",
            imgUrl: projImg1,
        },
        {
            title: "ポートフォリオ",
            description: "自己アピールを効果的に盛り込む",
            imgUrl: projImg2,
        },
        {
            title: "コンサルティング",
            description: "企業の特徴を分かりやすく表現",
            imgUrl: projImg3,
        },
    ];

    const gameProjects = [
        {
            title: "Neon Slayer",
            description: "SFアクション",
            imgUrl: projImg4,
        },
        {
            title: "江戸SIM",
            description: "経営シミュレーション",
            imgUrl: projImg5,
        },
        {
            title: "Love Syncro",
            description: "恋愛アドベンチャー",
            imgUrl: projImg6,
        },
    ];
    const illustrationProjects = [
        {
            title: "SF世界の街並み",
            description: "",
            imgUrl: projImg7,
        },
        {
            title: "登場人物サナ",
            description: "",
            imgUrl: projImg8,
        },
        {
            title: "登場人物まひろ",
            description: "",
            imgUrl: projImg9,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "" : ""}>
                                    <h2>制作例</h2>
                                    <p>HTML、CSS、JavaScriptを使い、ユーザビリティを重視したWebサイトの開発経験があります。制作したサイトは、使いやすさ、デザイン性、セキュリティ性に優れており、ユーザからのフィードバックも好評です。また、掲示板やフォーラムを制作する際には、MySQLを使用したデータベースの設計・開発も行いました。</p>
                                </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">ウェブサイト</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">ゲームアプリ</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        イラスト集
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            gameProjects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            illustrationProjects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>

                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}