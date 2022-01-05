import {Row, Col, Button} from 'react-bootstrap'

function Game() {
    return (
        <Board/>
    )
}

function Board() {
    return (
            <Col>
                <Row>
                    <Button/>
                    <Button/>
                    <Button/>
                </Row>
                <Row>
                    <Button/>
                    <Button/>
                    <Button/>
                </Row>
                <Row>
                    <Button/>
                    <Button/>
                    <Button/>
                </Row>
            </Col>
    )    
}

function Log() {
    return (
        <div>TODO: Log</div>
    )    
}

export default Game;