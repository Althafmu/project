import React, {Fragment} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
    Col, Row, Card, CardBody,
    CardTitle, Button, Form, FormGroup, Label, Input
} from 'reactstrap';


export default class FormGridFormRow extends React.Component {
    render() {
        return (
            <Fragment>
                <TransitionGroup>
                    <CSSTransition component="div" className="TabsAnimation"
                        appear={true} timeout={0} enter={false} exit={false}>
                        <div>
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Employee Details</CardTitle>
                                    <Form>
                                        <Row>
                                        <Col md={6}>
                                                <FormGroup>
                                                    <Label for="exampleEmail11">Name</Label>
                                                    <Input type="text" name="name" id="exampleEmail11"
                                                        placeholder=" Enter Employee name "/>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="exampleEmail11">Email</Label>
                                                    <Input type="email" name="email" id="exampleEmail11"
                                                        placeholder="with a placeholder"/>
                                                </FormGroup>
                                            </Col>
                                            
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="examplePassword11">Password</Label>
                                                    <Input type="password" name="password" id="examplePassword11"
                                                        placeholder="password placeholder"/>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="exampleEmail11">Phone No</Label>
                                                    <Input type="text" name="email" id="exampleEmail11"
                                                        placeholder="with a placeholder"/>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="exampleEmail11">Date of joining</Label>
                                                    <Input type="date" name="email" id="exampleEmail11"
                                                        placeholder="with a placeholder"/>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="exampleEmail11">Years of Experience</Label>
                                                    <Input type="text" name="email" id="exampleEmail11"
                                                        placeholder="with a placeholder"/>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <FormGroup>
                                            <Label for="exampleAddress">Address</Label>
                                            <Input type="text" name="address" id="exampleAddress"
                                                placeholder="1234 Main St"/>
                                        </FormGroup>
                                                                            
                                        <Button color="primary" className="mt-2">Create</Button>
                                    </Form>

                                </CardBody>
                            </Card>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </Fragment>
        );
    }
}
