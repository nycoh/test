import React from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

const About = () => (
    <Grid>
        <Row>
            <Col sm={12} className="text-center">
                <h1 className="oswald title-home">
                    <FontAwesome className="accent-color" name="chevron-circle-right"/>
                    &nbsp; <span className="accent-color">Gaming Academy</span>, de pete a global.
                </h1>

                <div>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                    No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente
                    porque es el dolor
                </div>
                <div>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                    No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente
                    porque es el dolor
                </div>
            </Col>
        </Row>
    </Grid>
);

export default About;
