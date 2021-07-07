import React from 'react';
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import { InformTimeout, SeeOutcome, IsAuctionOn, ShowBid} from "./PlayerViews";

const CreatorViews = ({appState, args, isAuctionOnReady, isAuctionOn}) => {
    switch (appState) {
        case "informTimeout":
            return (<InformTimeout />);
        case "seeOutcome":
            return (<SeeOutcome getBid={args[0]} address={args[1]}  />);
        case "showBid":
            return <ShowBid getBid={args[0]} address={args[1]}/>;
        case "isAuctionOn":
            return(isAuctionOnReady
                ? <IsAuctionOn isAuctionOn={isAuctionOn}/>
                :  <Container>
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
        default:
            break;
    }
    return (
        <Container>
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
}



export default CreatorViews;