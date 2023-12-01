import React from 'react'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import players from '../players';

// Inline styling was used
// Each player card with destructed props and default prop values
// The image for Ronaldo and Name for Neymar is delibratly removed from players.js to demonstrate the default props


const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
    return (
        <Col md={3}>

            <Card style={{ width: '100%', marginBottom: 30 }} className='shadowBox' bg='Light'>
                <Card.Img variant="top" src={imageUrl ? imageUrl : './images/default.jpg'} />
                <Card.Body>
                    <Card.Title style={{ fontWeight: 'bold' }}> {name ? name : '...'} </Card.Title>
                    <Card.Text> Team: {team ? team : '...'} </Card.Text>
                    <Card.Text style={{ marginTop: -10 }}> Nationality: {nationality ? nationality : '...'} </Card.Text>
                    <Card.Text style={{ marginTop: -10 }}> Jersey Number: {jerseyNumber ? jerseyNumber : '...'} </Card.Text>
                    <Card.Text style={{ marginTop: -10 }}> Age: {age ? age : '...'} </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Player