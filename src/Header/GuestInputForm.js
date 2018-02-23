import React,{ Component} from "react";
import { PropTypes } from "prop-types";

export class GuestInputForm extends Component
{
    static propTypes={
        newGuestInput: PropTypes.string.isRequired,
        handleNewGuestInput: PropTypes.func.isRequired,
        addNewGuest: PropTypes.func.isRequired,
    }

    handleInput=(e)=>
    {
        this.props.handleNewGuestInput(e.target.value);
    }
    render()
    {
        return (
            <form onSubmit={this.props.addNewGuest}>
                <input type="text" value={this.props.newGuestInput} placeholder="Invite Someone" 
                   onChange={this.handleInput} />
                <button type="submit" name="submit" value="submit">Submit</button>
            </form>
        )
    }
}