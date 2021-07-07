import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ConnectWallet from "../reach/ConnectWallet";
import { Context } from "../../Context";
import { AttachButton, DeployButton } from "../reach/DeployAttach";

const Home = () => {
    const [account, , , , , , , , , , , ] = useContext(Context);
    const [id, setId] = useState();
    const [deadline, setDeadline] = useState();


return account !== "" ? (
    <Container className="h-100">
        <div className="mt-5">
            <Row>
                <Col>
                    <Card className="p-3">
                        <Card.Title>Deploy Contract</Card.Title>
                        <hr className="mt-1" />

                        <Form.Group>

                            <Form.Control
                                style= {{border: "1px solid #000"}}
                                    value={id}
                                    onChange={(e) => setId(e.target.value)}
                                    type="text"
                                    placeholder="Enter NFT ID"
                                    maxLength={16} />
                                <Form.Control
                                style= {{border: "1px solid #000"}}
                                    value={deadline}
                                    onChange={(e) => setDeadline(e.target.value)}
                                    type="number"
                                    placeholder="Enter Auction Deadline" />
                            </Form.Group>
                            <DeployButton ctcArgs={[
                                {
                                    getId: id,
                                    deadline: deadline,
                                }
                            ]} />
                    </Card>
                </Col>
                <Col>
                    <Card className="p-3">
                        <Card.Title>Attach to Contract</Card.Title>
                        <hr className="mt-1" />
                        <Card.Text>
                            Attach to an already existing application
                        </Card.Text>
                        <Card.Text></Card.Text><Card.Text></Card.Text><Card.Text></Card.Text>
                        <AttachButton />
                    </Card>
                </Col>
            </Row>
        </div>
    </Container>
) : (
    <Container className="mt-5">
        <h1>Please connect your wallet</h1>
        <ConnectWallet />
    </Container>
);
}

export default Home;