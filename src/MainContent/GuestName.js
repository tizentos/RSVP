import React,{Component} from "react";
import PropTypes from "prop-types";

export class GuestName extends Component
{
    static propTypes={
        handleEditting: PropTypes.func.isRequired,
        isEditting: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
    }

    handleEditting=(e)=>
    {
        this.props.handleEditting(e.target.value);
    }
    render()
    {
        return (
                (this.props.isEditting)?
                <input type="text" value={this.props.name}
                 onChange={this.handleEditting} />
                :
                <span>{this.props.name}</span>
        )
    }

}