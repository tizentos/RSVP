import React,{Component} from "react";
import PropTypes from "prop-types";

export class Counter extends Component
{
    static propTypes={
        guestAttending: PropTypes.number,
        guestNotAttending: PropTypes.number,
        totalGuestInvited: PropTypes.number,
    }
    render()
    {
        return (
        <table className="counter">
        <tbody>
          <tr>
            <td>Attending:</td>
            <td>{this.props.guestAttending}</td>
          </tr>
          <tr>
            <td>Unconfirmed:</td>
            <td>{this.props.guestNotAttending}</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>{this.props.totalGuestInvited}</td>
          </tr>
        </tbody>
      </table>);
    }
}