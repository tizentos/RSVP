import React,{Component} from "react";
import PropTypes from "prop-types";

export class PendingGuest extends Component
{
    static propTypes={
        name: PropTypes.string.isRequired,
    }
    render()
    {
            if (this.props.name)
            {
                return (
                    <li className="pending">
                        <span>{this.props.name}</span>
                    </li>
                    )
            }
            return null
    }
}