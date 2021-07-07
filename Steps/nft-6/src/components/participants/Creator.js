import {Component} from "react";
import * as Backend from "../../build/index.main.mjs";
import { Context } from "../../Context";
import CreatorViews from "./CreatorViews";
import {loadStdlib} from '@reach-sh/stdlib';
const Reach = loadStdlib('ALGO');

export class Creator extends Component  {
    static contextType = Context;

    constructor(props) {
        super(props);
        this.state = {
            appState: "",
            args: [],
            resIsAuctionOn: null,
        }
        this.isAuctionOnExt = this.isAuctionOnExt.bind(this);
    }
    componentDidMount() {
        const[, , , , , , ctc, , ctcArgs, ,] = this.context;
        this.interval = setInterval(async () => await this.updateBalance(), 5000);        

        this.getId = ctcArgs[0].getId;
        this.deadline = ctcArgs[0].deadline;

        Backend.Creator(ctc[0], this);
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

    async seeOutcome(bid, address) {
        const addressFormat = Reach.formatAddress(address);
        const bidFormat = Reach.formatCurrency(bid, 4);  
        this.setState({
            appState: "seeOutcome",
            args: [bidFormat, addressFormat],
        })
    }
    
    render() {
        return <CreatorViews
            appState={this.state.appState}
            args={this.state.args}            
            isAuctionOnReady={this.state.resIsAuctionOn !== null}
            isAuctionOn={this.isAuctionOnExt}
        />
    }
}