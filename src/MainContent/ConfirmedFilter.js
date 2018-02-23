import React,{ Component } from "react";
import { PropTypes } from "prop-types";

export class ConfirmedFilter extends Component
{
    static propType =
    {
        toggleIsFiltered: PropTypes.func.isRequired,
        isFiltered: PropTypes.bool.isRequired,
    }
    render()
    {
        return(
            <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox" onChange={this.props.toggleIsFiltered} checked={this.props.isFiltered} />
               Hide those who haven't responded
            </label>
          </div>
        );
    }
}