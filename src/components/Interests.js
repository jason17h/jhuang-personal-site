import React from 'react';
import Hobby from './Hobby.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

const Interests = (props) => {
    const hobbiesConfig = require("json-loader!yaml-loader!../static/hobbies.yml");
    const albumConfig = require("json-loader!yaml-loader!../static/albums.yml");
    const tvConfig = require("json-loader!yaml-loader!../static/tv.yml");
    return (
        <Container>
            <h2>Hobbies</h2>
            {hobbiesConfig.map((hobby) => (
                <Row className="hobby-row">
                    <Hobby {...hobby} />
                </Row>
            ))}

            <h2>Entertainment</h2>
            <Card className="entertainment-wrapper-card">
                <Card.Title>Favourite Albums</Card.Title>
                <Card.Text>
                    Here are some of my favourite albums to listen to. Click on one to listen to in Spotify!
                </Card.Text>
                <div className="entertainment-row">
                    {albumConfig.map((album) => (
                        <a target="_blank" href={album.link} >
                            <Card className="album-card">
                                <Card.Img 
                                    variant="top" 
                                    className="album-image" 
                                    src={require('../../images/albums/' + album.image)} 
                                />
                                <Card.Body>
                                    <Card.Title className="album-title">{album.title} | {album.artist}</Card.Title>
                                    <Card.Text>Favourite Track: <em>{album.track}</em></Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    ))}
                </div>
            </Card>
            <Card className="entertainment-wrapper-card">
                <Card.Title>Favourite TV Shows</Card.Title>
                <Card.Text>
                    Here are some of my favourite TV shows to binge. Click on one to see it on Netflix!
                </Card.Text>
                <div className="entertainment-row tv-row">
                    {tvConfig.map((show) => (
                        <a target="_blank" href={show.link}>
                            <img className="tv-image" src={require('../../images/tv/' + show.image)} />
                        </a>
                    ))}
                </div>
            </Card>
        </Container>
    )
}

/*
<Card className="tv-card">
    <Card.Img 
        variant="top"
        className="tv-image"
        src={require('../../images/tv/' + show.image)}
    />
    <Card.Body>
        <Card.Title>{show.title}</Card.Title>
    </Card.Body>
</Card>
*/

export default Interests;
