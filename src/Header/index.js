import React,{ Component} from "react";
import { PropTypes } from "prop-types";
import { GuestInputForm} from "./GuestInputForm";

export class Header extends Component
{
    static propTypes={
        newGuestInput: PropTypes.string.isRequired,
        handleNewGuestInput: PropTypes.func.isRequired,
        addNewGuest: PropTypes.func.isRequired,
    }
    render()
    {
        return (
            <header>
                <h1>RSVP</h1>
                <p>A Treehouse App</p>
                <GuestInputForm  
                   newGuestInput={this.props.newGuestInput}
                   handleNewGuestInput={this.props.handleNewGuestInput.bind(this)}
                   addNewGuest={this.props.addNewGuest.bind(this)}
                />
          </header>
        )
    }
}