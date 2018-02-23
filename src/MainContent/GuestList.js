import React,{Component} from "react";
import PropTypes from "prop-types";
import {Guest} from "./Guest";
import {PendingGuest} from "./PendingGuest";

export class GuestList extends Component
{
    static propTypes={
        guests: PropTypes.array.isRequired,
        toggleConfirmation: PropTypes.func.isRequired,
        toggleEditting: PropTypes.func.isRequired,
        handleSetName: PropTypes.func.isRequired,
        isFiltered: PropTypes.bool.isRequired,
        handleRemoveAt: PropTypes.func.isRequired,
        pendingGuest: PropTypes.string.isRequired,
    }
    render()
    {
        return (
            <ul>
            <PendingGuest name={this.props.pendingGuest} />
            {
               this.props.guests
                        .filter((guest)=> !this.props.isFiltered||guest.isConfirmed)
                        .map((guest,index)=>
                        <Guest key={guest.id} name={guest.name}  isConfirmed={guest.isConfirmed} 
                        toggleConfirmation={this.props.toggleConfirmation.bind(this,guest.id)}
                        toggleEditting={ this.props.toggleEditting.bind(this,guest.id)}
                        isEditting={guest.isEditting}
                        handleSetName={this.props.handleSetName.bind(this,guest.id)}
                        handleRemove={this.props.handleRemoveAt.bind(this,guest.id)} />
                    )
            }
          </ul>
        );
    }

}