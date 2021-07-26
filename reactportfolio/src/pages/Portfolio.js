import React from 'react';
import { Col, Row, Container } from '../components/Grid';
import weatherDashboard from '../images/weather-dashboard.png';
import feedMe from '../images/Feed.Me.png';
import parkFinder from '../images/park-finder.png';
import newsApp from '../images/newsApp.png';

function Portfolio() {

    const projects = [
        {
            appName: 'WWW News',
            appDescription: 'The user can search for articles via keywords or topics. Fellow collaborators include: Calvin Jacobsen, Jim Nguyen, Brandon Norrgard, and Noah Schlag.',
            appGithubRepo: 'https://github.com/Bryan-Thaoxaochay/news-app',
            appLink: 'https://news-app-5.herokuapp.com/'
        },
        {
            appName: 'Park Finder',
            appDescription: 'The user can find certain parks based on locations and amenities. This is only a beginner app, and is still getting edited. Fellow collaborators include: Calvin Jacobsen, Jim Nguyen, Brandon Norrgard, Noah Schlag, and Chris Woolcott.',
            appGithubRepo: 'https://github.com/BeeNorrg/park_finder_app',
            appLink: 'https://park-finder-stp.herokuapp.com/login'
        },
        {
            appName: 'Feed.Me',
            appDescription: 'When the user enters a city, restaurants will appear with details and directions. Fellow collaborators include: Calvin Jacobsen, Francis Jeffries, Jim Nguyen, and Chris Woolcott.',
            appGithubRepo: 'https://github.com/jimnguyen220/projectOne',
            appLink: 'https://jimnguyen220.github.io/projectOneFamilyMatters/'
        },
        {
            appName: 'Weather Dashboard',
            appDescription: 'When the user enters a city, the current forecast and the 5-day forecast are displayed.',
            appGithubRepo: 'https://github.com/Bryan-Thaoxaochay/Weather-Dashboard',
            appLink: 'https://bryan-thaoxaochay.github.io/HW-6-Weather-Dashboard/'
        },
    ]

    return (
        <Container>
            <Row>
                <Col size='md-4'></Col>
                <Col size='md-4'>
                    <h1>Hi, I am Bryan</h1>
                </Col>
                <Col size='md-4'></Col>
            </Row>
            <br></br>
            <Row>
                <Col size='md-3'></Col>
                <Col size='md-6'>
                    <p>
                    I am currently seeking a full-time position related to Full Stack Web Development, but I am flexible. I am still a beginner and have a long way ahead of me. Below are applications that I have worked on, by myself and with others. If you have any questions, please feel free to contact me! Thank you.
                    </p>
                </Col>
                <Col size='md-3'></Col>
            </Row>
            <br></br>
            <Row>
                <Col size='md-3'></Col>
                <Col size='md-2'>
                    <a href="https://www.linkedin.com/in/bryan-thaoxaochay-2b574013a/" className="GLR" style={{"color": "green"}}>LinkedIn</a>
                </Col>
                <Col size='md-2'>
                    <a href="https://github.com/Bryan-Thaoxaochay" className="GLR" style={{"color": "green"}}>GitHub</a>
                </Col>
                <Col size='md-2'>
                    <a href="Bryan Thaoxaochay Resume.pdf" download="BryanThaoxaochayResume" className="GLR" style={{"color": "green"}}>Resume</a>
                </Col>
                <Col size='md-3'></Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>

            <Row>
                <Col size='md-12'>
                    <h2>Applications</h2>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col size='md-4'></Col>
                <Col size='md-4'>
                    <h3>{projects[0].appName}</h3>
                </Col>
                <Col size='md-4'></Col>
                <br></br>
                <Col size='md-4'>
                    <img src={newsApp} alt='weatherDashboard' width='350' height='200'/>
                </Col>
                <Col size='md-4'>
                    <p>{projects[0].appDescription}</p>
                </Col>
                <Col size='md-4'>
                    <button type="button" className="btn btn-primary">
                    <a href={projects[0].appGithubRepo} className="portfolioBtn" style={{"color": "white", "textDecoration": "none"}}>GitHub Repo</a>
                </button>
                <button type="button" class="btn btn-primary">
                    <a href={projects[0].appLink} className="portfolioBtn" style={{"color": "white", "textDecoration": "none"}}>{projects[0].appName}</a>
                </button>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col size='md-4'></Col>
                <Col size='md-4'>
                    <h3>{projects[1].appName}</h3>
                </Col>
                <Col size='md-4'></Col>
                <br></br>
                <Col size='md-4'>
                    <img src={parkFinder} alt='parkFinder' width='350' height='200' />
                </Col>
                <Col size='md-4'>
                    <p>{projects[1].appDescription}</p>
                </Col>
                <Col size='md-4'>
                    <button type="button" className="btn btn-primary">
                    <a href={projects[1].appGithubRepo} className="portfolioBtn" style={{"color": "white", "textDecoration": "none"}}>GitHub Repo</a>
                </button>
                <button type="button" className="btn btn-primary">
                    <a href={projects[1].appLink} className="portfolioBtn" style={{"color": "white", "textDecoration": "none"}}>{projects[1].appName}</a>
                </button>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col size='md-4'></Col>
                <Col size='md-4'>
                    <h3>{projects[2].appName}</h3>
                </Col>
                <Col size='md-4'></Col>
                <br></br>
                <Col size='md-4'>
                    <img src={feedMe} alt='feedMe' width='350' height='200' />
                </Col>
                <Col size='md-4'>
                    <p>{projects[2].appDescription}</p>
                </Col>
                <Col size='md-4'>
                    <button type="button" className="btn btn-primary">
                    <a href={projects[2].appGithubRepo} className="portfolioBtn" style={{"color": "white", "textDecoration": "none"}}>GitHub Repo</a>
                </button>
                <button type="button" className="btn btn-primary">
                    <a href={projects[2].appLink} className="portfolioBtn" style={{"color": "white", "textDecoration": "none"}}>{projects[2].appName}</a>
                </button>
                </Col>
            </Row>
            <br></br>
            <Row>
            <Col size='md-4'></Col>
                <Col size='md-4'>
                    <h3>{projects[3].appName}</h3>
                </Col>
                <Col size='md-4'></Col>
                <br></br>
                <Col size='md-4'>
                    <img src={weatherDashboard} alt='weatherDashboard' width='350' height='200' />
                </Col>
                <Col size='md-4'>
                    <p>{projects[3].appDescription}</p>
                </Col>
                <Col size='md-4'>
                    <button type="button" className="btn btn-primary">
                    <a href={projects[3].appGithubRepo} className="portfolioBtn" style={{"color": "white", "textDecoration": "none"}}>GitHub Repo</a>
                </button>
                <button type="button" className="btn btn-primary">
                    <a href={projects[3].appLink} className="portfolioBtn" style={{"color": "white", "textDecoration": "none"}}>{projects[3].appName}</a>
                </button>
                </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
        </Container>
    )
};

export default Portfolio;