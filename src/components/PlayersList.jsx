import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Player from './Player'
import players from '../players'


// Player List
const PlayersList = () => {
    return (
        <Container>
            <Row>
                {/* Map the players array from player.js Player Card using spread operator */}
                {
                    players.map((player) => (<Player {...player} />))
                }
            </Row>
        </Container>
    )
}

export default PlayersList