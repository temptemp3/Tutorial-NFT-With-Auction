import { React, Component } from "react";
import * as Backend from "../../build/index.main.mjs";
import { Context } from "../../Context";
import BidderViews from "./BidderViews";
import {loadStdlib} from '@reach-sh/stdlib';
const Reach = loadStdlib('ALGO');

export class Bidder extends Component {
    static contextType = Context;
    constructor(props) {
        super(props);
        this.state = {
            appState: "",
            args: [],
            resGetBid: null,
            resIsAuctionOn: null,            
        };
        this.getBidExt = this.getBidExt.bind(this);
        this.isAuctionOnExt = this.isAuctionOnExt.bind(this);
    }

    componentDidMount() {
        const [, , , , , , ctc, , , ,] = this.context;
        this.interval = setInterval(async () => this.updateBalance(), 5000);
        Backend.Bidder(ctc[0], this);
    }

    async updateBalance() {        
        const [account, , , setBalance] = this.context;
        const balance = Reach.formatCurrency(await Reach.balanceOf(account), 4);
        setBalance(balance);
    }

    async informTimeout() {
         this.setState({
            appState: "informTimeout",
        });
    }

    async showBid(bid, address) {
         const addressFormat = Reach.formatAddress(address);
         const bidFormat = Reach.formatCurrency(bid, 4);         
         this.setState({
             appState: "showBid",
             args: [bidFormat ,addressFormat],
         })
     }

     async seeOutcome(bid, address) {
        const addressFormat = Reach.formatAddress(address);
        const bidFormat = Reach.formatCurrency(bid, 4);   
        this.setState({
            appState: "seeOutcome",
            args: [bidFormat, addressFormat],
            
        })
    }

    async getBid(price) {
        const priceFormat = Reach.formatCurrency(price, 4);   
        const bid = await new Promise(res => {
            this.setState({
                appState: "getBid",
                args: [priceFormat],
                resGetBid: res,
            });
        });
        return bid;
    }
    
    getBidExt(bid) {
        this.state.resGetBid(bid);
    }

    async isAuctionOn() {
        const response = await new Promise (res => {
            this.setState({
                appState: "isAuctionOn",
                args: [],
                resIsAuctionOn: res,
            })
        });
        return response;
    }

    isAuctionOnExt(res) {
        this.state.resIsAuctionOn(res);
    }

    render() {
        return (<BidderViews
            appState={this.state.appState}
            args={this.state.args}
            getBidReady={this.state.resGetBid !== null}
            getBid={this.getBidExt} 
            isAuctionOnReady={this.state.resIsAuctionOn !== null}
            isAuctionOn={this.isAuctionOnExt} />
        );            
    }
}