import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

const Footer = () => (
    <footer className="hidden-print">
        <Grid>
            <Row className="footer">
                <Col sm={12}>
                    <div className="texts"><FontAwesome name=""/> Game Academy</div>
                </Col>
            </Row>
        </Grid>
    </footer>
);

export default Footer;
