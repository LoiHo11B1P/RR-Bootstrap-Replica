import {Container, Button, Row, Col} from 'react-bootstrap'

const StoreBrowser = () => {
    const nearbyStores = [
        { store: "Lobblaw", method: "Delivery", iconSrc: ""},
        { store: "Lobblaw", method: "Delivery", iconSrc: ""},
        { store: "Lobblaw", method: "Delivery", iconSrc: ""},
        { store: "Lobblaw", method: "Delivery", iconSrc: ""},
        { store: "Lobblaw", method: "Delivery", iconSrc: ""},
        { store: "Lobblaw", method: "Delivery", iconSrc: ""},
        { store: "Lobblaw", method: "Delivery", iconSrc: ""},
        { store: "Lobblaw", method: "Delivery", iconSrc: ""}
    ]

    const listNearbyStores = () => {
        return (
            <Row>{
                nearbyStores.map(store => { 
                    return(
                        <Col md={4}>
                            <Button className="ml-5, my-3" variant="info" style={{width:"18rem", height: "5rem"}}>
                                <Row>
                                    <Col><i>Icon/Logo</i></Col>
                                    <Col>{store.store}</Col>
                                </Row>
                               
                            </Button>
                        </Col>
                    )
                })
            }</Row>
        )
        
    }

    return (
        <Container className='mt-4'>
            <h2>Start shooping in Greater Toronto Area</h2>
            {listNearbyStores()}
            <a href='#' style={{textDecoration: "none", color: "green", }} variant="success">Show all</a>
        </Container>
    )
}

export default StoreBrowser; 