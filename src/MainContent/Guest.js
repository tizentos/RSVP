import React,{Component} from "react";
import PropTypes from "prop-types";
import {GuestName} from "./GuestName";

export class Guest extends Component
{
    static propTypes={
        name: PropTypes.string.isRequired,
        isConfirmed: PropTypes.bool.isRequired,
        isEditting: PropTypes.bool.isRequired,
        toggleConfirmation: PropTypes.func.isRequired,
        toggleEditting: PropTypes.func.isRequired,
        handleSetName: PropTypes.func.isRequired,
        handleRemove: PropTypes.func.isRequired,
    }
    render()
    {
        return (
            <li>
                <GuestName  
                    isEditting={this.props.isEditting} 
                    handleEditting={this.props.handleSetName.bind(this)}
                    name={this.props.name} />
                <label> 
                    <input type="checkbox" checked={this.props.isConfirmed} 
                    onChange={this.props.toggleConfirmation} /> Confirmed
                </label>
                <button onClick={this.props.toggleEditting}>{(this.props.isEditting)? "save":"edit"}</button>
                <button onClick={this.props.handleRemove}>remove</button>
            </li>
        )
    }

}