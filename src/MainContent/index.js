import React,{Component} from "react";
import PropTypes from "prop-types";
import { Counter } from "./Counter";
import { GuestList } from "./GuestList";
import { ConfirmedFilter } from "./ConfirmedFilter";


export class MainContent extends Component
{
    static propTypes={
        totalGuestInvited: PropTypes.number.isRequired,
        guestAttending: PropTypes.number.isRequired,
        guestNotAttending: PropTypes.number.isRequired,
        newGuestInput: PropTypes.string.isRequired,
        isFiltered: PropTypes.bool.isRequired, 
        guests: PropTypes.array.isRequired,
        toggleConfirmationAt: PropTypes.func.isRequired,
        toggleEdittingAt: PropTypes.func.isRequired,
        setName: PropTypes.func.isRequired,
        removeGuestAt: PropTypes.func.isRequired,

        toggleIsFiltered: PropTypes.func.isRequired,

    }

    render()
    {
        return(
            <div className="main">
            <ConfirmedFilter
                     toggleIsFiltered={this.props.toggleIsFiltered}
                     isFiltered={this.props.isFiltered}
            />
            <Counter totalGuestInvited={this.props.totalGuestInvited}
                     guestAttending={this.props.guestAttending} 
                     guestNotAttending={this.props.guestNotAttending} />
            <GuestList guests={this.props.guests}
                     toggleConfirmation={this.props.toggleConfirmationAt}  
                     isFiltered={this.props.isFiltered} 
                     toggleEditting={this.props.toggleEdittingAt}
                     handleSetName={this.props.setName}
                     handleRemoveAt={this.props.removeGuestAt} 
                     pendingGuest={this.props.newGuestInput}/>
          </div>
        );
    }

}