import { Container, Row, Col, InputGroup, FormControl, Button, Card, Dropdown} from "react-bootstrap"

const Banner = () => {

    return (
        
            <Row>
            <Col style={{backgroundColor: "#deedd6" }}>
                <Row>
                    <Col className="ml-5 mt-5" sm={1}>
                        
                        <Card className="flex-box" >
                        <Row>
                            <Col sm={5}>
                            <Card.Img src="" alt="Flag"/>
                            </Col>
                            <Col sm={5}>
                            <Dropdown>
                                <Dropdown.Toggle variant="white" id="dropdown-region">
                                    
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>US</Dropdown.Item>
                                    <Dropdown.Item>CA</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            </Col>
                        </Row>
                            
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col style={{paddingTop: "5em"}} md={{ span: 4, offset: 2 }}>
                        <h2>Order groceries for delivery or pickup today</h2>
                        <p>
                            Whatever you want from local stores, brought right to your door.
                        </p>

                        <InputGroup>
                            <FormControl 
                                type="text"
                                placeholder="Enter your address"
                                >
                            </FormControl>
                            <Button>-></Button>
                        </InputGroup>
  
                    </Col>
                </Row>

                               

            </Col>
            <img  src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" alt="main-banner of product"></img>
            </Row>
    )
}

export default Banner;