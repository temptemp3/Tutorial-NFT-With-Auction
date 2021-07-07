import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const InformTimeout = () => {
    return (        
        <Container className="mt-4">
            <h2>Last Bidder Did Not Pay</h2>
        </Container>
    );
}

export const SeeOutcome = ({getBid, address }) => { 
    const adres = {address}.address.toString()
    const addresssum = adres.slice(0,10) + "  . . . . .  "  + adres.slice((adres.length-10), adres.length);
    
    return (
        <Container className="mt-4">
            
            <h2>{`Winner Address: ${addresssum}`}</h2> 
            <h2>{`Winner's Bid: ${getBid} Algo`}</h2>
            
        </Container>
    );
}

export const ShowBid = ({getBid, address }) => {
    const adres = {address}.address.toString()
    const addresssum = adres.slice(0,10) + "  . . . . .  "  + adres.slice((adres.length-10), adres.length);

    return (
        <Container className="mt-4">
           
            <h1>
                Bid: <small>{getBid}</small> Algo
            </h1>
            <h1>
                Bidder Address: <small>{addresssum}</small>
            </h1>

        </Container>
    );
};

export const IsAuctionOn = ({isAuctionOn}) => {
    const handleReject = () => {
        isAuctionOn(false);
    }
    const handleTrue = () => {
        isAuctionOn(true);
    };

    return (
        <Container className="mt-4">

            <h2 className="text-center">You are the owner of NFT.</h2>
            <p className="text-center">Do you want to start auction?</p>
            <Row>
                <Col sm={6} >
                    <Button block variant="success" onClick={handleTrue}>Yes, I want to start auction.</Button>
                </Col>
                <Col sm={6} >
                    <Button block variant="danger" onClick={handleReject}>No, I don't want to start auction</Button>
                </Col>
            </Row>
  
        </Container>
    );
}
