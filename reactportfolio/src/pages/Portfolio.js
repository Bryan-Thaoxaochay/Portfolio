import React from 'react';
import { Col, Row, Container } from '../components/Grid';

function Portfolio() {

    const projects = [
        {
            appName: 'Weather Dashboard',
            appDescription: 'When the user enters a city, the current forecast and the 5-day forecast are displayed.',
            appGithubRepo: 'https://github.com/Bryan-Thaoxaochay/Weather-Dashboard',
            appLink: 'https://bryan-thaoxaochay.github.io/HW-6-Weather-Dashboard/'
        },
        {
            appName: 'Work Day Scheduler',
            appDescription: 'The user is able to store tasks to specific time slots. This will help keep track of the many tasks during a busy day.',
            appGithubRepo: 'https://github.com/Bryan-Thaoxaochay/Work-Day-Scheduler',
            appLink: 'https://bryan-thaoxaochay.github.io/HW-5-Work-Day-Scheduler/'
        },
        {
            appName: 'Feed.Me',
            appDescription: 'When the user enters a city, restaurants will appear with details and directions. Fellow collaborators include: Calvin Jacobsen, Francis Jeffries, Jim Nguyen, and Chris Woolcott.',
            appGithubRepo: 'https://github.com/jimnguyen220/projectOne',
            appLink: 'https://jimnguyen220.github.io/projectOneFamilyMatters/'
        },
        {
            appName: 'Park Finder',
            appDescription: 'The user can find certain parks based on locations and amenities. This is only a beginner app, and is still getting edited. Fellow collaborators include: Calvin Jacobsen, Jim Nguyen, Brandon Norrgard, Noah Schlag, and Chris Woolcott.',
            appGithubRepo: 'https://github.com/BeeNorrg/park_finder_app',
            appLink: 'https://park-finder-stp.herokuapp.com/login'
        },
        {
            appName: 'Tech Blog',
            appDescription: 'The app allows us to publish posts and comment on other posts.',
            appGithubRepo: 'https://github.com/Bryan-Thaoxaochay/tech-blog',
            appLink: 'https://tech-blogger-14.herokuapp.com/'
        },
        {
            appName: 'Fitness Tracker',
            appDescription: 'The app allows us to keep track and update our workouts.',
            appGithubRepo: 'https://github.com/Bryan-Thaoxaochay/Fitness-Tracker',
            appLink: 'https://shielded-forest-96032.herokuapp.com/'
        },
    ]

    return (
        <Container fluid>
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
                    I am currently a student of the University of Minnesota - Twin Cities, learning how to program from the Full Stack Web Development Program, that ends on May 28th, 2021.
                    </p>
                </Col>
                <Col size='md-3'></Col>
            </Row>
            <Row>
                <Col size='md-4'>
                  <a href="https://github.com/Bryan-Thaoxaochay" class="GLR">GitHub</a>
                </Col>
                <Col size='md-4'>
                  <a href="https://www.linkedin.com/in/bryan-thaoxaochay-2b574013a/" class="GLR">LinkedIn</a>
                </Col>
                <Col size='md-4'>
                  <a href="Bryan Thaoxaochay Resume.pdf" download="BryanThaoxaochayResume" class="GLR">Resume</a>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col size='md-12'>
                    <h2>Applications Built</h2>
                </Col>
            </Row>
            <br></br>
            <Row>
                <h3>{projects[0].appName}</h3>
                <Col size='md-4'>
                    {/* image */}
                </Col>
                <Col size='md-4'>
                    <p>{projects[0].appDescription}</p>
                </Col>
                <Col size='md-4'>
                    <button type="button" class="btn btn-primary">
                    <a href={projects[0].appGithubRepo} class="portfolioBtn">GitHub Repo</a>
                </button>
                <button type="button" class="btn btn-primary">
                    <a href={projects[0].appLink} class="portfolioBtn">{projects[0].appName}</a>
                </button>
                </Col>
            </Row>
            <br></br>
            <Row>
                <h3>{projects[1].appName}</h3>
                <Col size='md-4'>
                    {/* image */}
                </Col>
                <Col size='md-4'>
                    <p>{projects[1].appDescription}</p>
                </Col>
                <Col size='md-4'>
                    <button type="button" class="btn btn-primary">
                    <a href={projects[1].appGithubRepo} class="portfolioBtn">GitHub Repo</a>
                </button>
                <button type="button" class="btn btn-primary">
                    <a href={projects[1].appLink} class="portfolioBtn">{projects[1].appName}</a>
                </button>
                </Col>
            </Row>
            <br></br>
            <Row>
                <h3>{projects[2].appName}</h3>
                <Col size='md-4'>
                    {/* image */}
                </Col>
                <Col size='md-4'>
                    <p>{projects[2].appDescription}</p>
                </Col>
                <Col size='md-4'>
                    <button type="button" class="btn btn-primary">
                    <a href={projects[2].appGithubRepo} class="portfolioBtn">GitHub Repo</a>
                </button>
                <button type="button" class="btn btn-primary">
                    <a href={projects[2].appLink} class="portfolioBtn">{projects[2].appName}</a>
                </button>
                </Col>
            </Row>
            <br></br>
            <Row>
                <h3>{projects[3].appName}</h3>
                <Col size='md-4'>
                    {/* image */}
                </Col>
                <Col size='md-4'>
                    <p>{projects[3].appDescription}</p>
                </Col>
                <Col size='md-4'>
                    <button type="button" class="btn btn-primary">
                    <a href={projects[3].appGithubRepo} class="portfolioBtn">GitHub Repo</a>
                </button>
                <button type="button" class="btn btn-primary">
                    <a href={projects[3].appLink} class="portfolioBtn">{projects[3].appName}</a>
                </button>
                </Col>
            </Row>
            <br></br>
            <Row>
                <h3>{projects[4].appName}</h3>
                <Col size='md-4'>
                    {/* image */}
                </Col>
                <Col size='md-4'>
                    <p>{projects[4].appDescription}</p>
                </Col>
                <Col size='md-4'>
                    <button type="button" class="btn btn-primary">
                    <a href={projects[4].appGithubRepo} class="portfolioBtn">GitHub Repo</a>
                </button>
                <button type="button" class="btn btn-primary">
                    <a href={projects[4].appLink} class="portfolioBtn">{projects[4].appName}</a>
                </button>
                </Col>
            </Row>
            <br></br>
            <Row>
                <h3>{projects[5].appName}</h3>
                <Col size='md-4'>
                    {/* image */}
                </Col>
                <Col size='md-4'>
                    <p>{projects[5].appDescription}</p>
                </Col>
                <Col size='md-4'>
                    <button type="button" class="btn btn-primary">
                    <a href={projects[5].appGithubRepo} class="portfolioBtn">GitHub Repo</a>
                </button>
                <button type="button" class="btn btn-primary">
                    <a href={projects[5].appLink} class="portfolioBtn">{projects[5].appName}</a>
                </button>
                </Col>
            </Row>
        </Container>
    )
};

export default Portfolio;