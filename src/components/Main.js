import girl from '../images/landing-page-girl.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


const Main = () => (
    <section className='main__section'>
        <Container fluid className='main__section__container h-100'>
            <Row className='no-wrap justify-content-md-center align-items-md-end h-100'>
                <Col md="auto"> <img className='main__section__image'
                    src={girl}
                    /* className="d-inline-block align-top" */
                    alt=""
                />{''}</Col>
                <Col className='main__section__text align-self-md-center' md="auto">
                    <h1>Feel The Music</h1>
                    <p className='main__section__text__paragraph'>Stream over 20 thousand songs with one click</p>
                    <Button className='main__section__button' variant='button-bg'>Join Now</Button>
                </Col>
            </Row>
        </Container>
        <div className='main__section__circle main__section__circle__1'></div>
        <div className='main__section__circle main__section__circle__2'></div>
        <div className='main__section__circle main__section__circle__3'></div>
    </section>
)

export default Main;