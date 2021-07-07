import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import { InformTimeout, SeeOutcome, IsAuctionOn, ShowBid } from "./PlayerViews";
import Button from "react-bootstrap/Button";
import {loadStdlib} from '@reach-sh/stdlib';

const Reach = loadStdlib('ALGO');

const BidderViews = ({appState, args, getBidReady, getBid, isAuctionOnReady, isAuctionOn}) => {
  switch (appState) {
    case "getBid":
      return getBidReady ? (
        <GetBid price={args[0]} getBid={getBid} />
      ) : (
        <Container className="mt-4">
          <h1>Waiting the Contract...</h1>
          <Button variant="info" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>      
        </Container>
      );
    case "informTimeout":
      return <InformTimeout />;
    case "seeOutcome":
      return <SeeOutcome getBid={args[0]} address={args[1]} />;
    case "showBid":
      return <ShowBid getBid={args[0]} address={args[1]}/>; 
    case "isAuctionOn":
      return (isAuctionOnReady ? 
      (        <IsAuctionOn isAuctionOn={isAuctionOn} />
      ) : (
        <Container className="mt-4">
          <h1>Waiting the Contract...</h1>
          <Button variant="info" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>      
        </Container>
      ));
    default:
      break;
  }
  return (
    <Container className="mt-4">
      
      <h1>Waiting the Contract...</h1>
      <Button variant="info" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>  
      
    </Container>
  );
};

export default BidderViews;

export const GetBid = ({price ,getBid}) => {
    const [bid, setBid] = useState(0);
    const handleSet = () => {      
        const bid2= Reach.parseCurrency(bid)
        getBid(bid2)
    } 
  return (
      <Container>

        <Form.Group>
          <h3>Price: {price} Algo</h3>
          <Form.Label><h3> </h3><h3>Please, Enter Your Bid</h3></Form.Label>
          <Form.Control        
            value={bid}
            onChange={(e) => setBid(e.target.value)}
            type="number"
            placeholder=" Enter Bid"
          />
        </Form.Group>
        <Button variant="info" onClick={handleSet} >Give Offer</Button>
       
      </Container>
  );
};