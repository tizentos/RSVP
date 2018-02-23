import React, { Component } from 'react';
import {Header} from "./Header";
import { MainContent } from "./MainContent";

var Guest=[];
class App extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      newGuestInput: "",
      isFiltered: false,
      guests: Guest,

    }
  }
  togglePropertyAt=(property,indexToChange)=>
  {
    this.setState({
      guests: this.state.guests.map((guest)=>{
        if (guest.id===indexToChange)
        {
          return{
            ...guest,
           [property]: !guest[property]}
        }
        return guest;
      }),
    })
  }

  toggleConfirmationAt=(index)=>{this.togglePropertyAt("isConfirmed",index)}
  toggleEdittingAt=(index)=>{this.togglePropertyAt("isEditting",index)}


  toggleIsFiltered=()=>
  {
    this.setState({
      isFiltered: !this.state.isFiltered,
    })
  }


  getTotalInvited=()=> this.state.guests.length;
  getAttendingGuest=()=> this.state.guests.reduce((total,guest)=> (guest.isConfirmed)? total+1:total,0 );


  setName=(indexToChange,name)=>
  {
    this.setState({
      guests: this.state.guests.map((guest)=>{
        if (guest.id===indexToChange)
        {
          return{
            ...guest,
           name: name
          }
        }
        return guest;
      }),
    })
  }
  handleNewGuestInput=(char)=>
  {
    this.setState({
      newGuestInput: char,
    })

  }

  addNewGuest=(e)=>
  {
    e.preventDefault();
    var len=this.state.guests.length;
    if (!(this.state.newGuestInput.length<1))
    {
      this.setState({
        guests: [ {name:this.state.newGuestInput,
        isConfirmed:false, 
        isEditting:false,
        id: len+1,},
         ...this.state.guests],
        newGuestInput: "",
      })
    }
    else
    {
      this.setState({
        guests: [ {name:this.state.newGuestInput,
        isConfirmed:false, 
        isEditting:false,
        id: 0,},
         ...this.state.guests],
        newGuestInput: "",
      })

    }
  }

  removeGuestAt=(id)=>
  {
    this.state.guests.map((guest,index)=>
        {if (guest.id===id){
          this.state.guests.splice(index,1)
          this.setState({
            guests: [...this.state.guests]})
        }}
        );
  }
  render() {
    const totalGuestInvited= this.getTotalInvited();
    const guestAttending= this.getAttendingGuest();
    const guestNotAttending= totalGuestInvited-guestAttending;
    return (
      <div className="App">
        <Header 
          newGuestInput={this.state.newGuestInput}
          handleNewGuestInput={this.handleNewGuestInput}
          addNewGuest={this.addNewGuest}
        />
        <MainContent
          toggleIsFiltered={this.toggleIsFiltered}
          isFiltered={this.state.isFiltered}
          totalGuestInvited={totalGuestInvited}
          guestAttending={guestAttending}
          guestNotAttending={guestNotAttending} 
          guests={this.state.guests}  
          toggleConfirmationAt={this.toggleConfirmationAt} 
          toggleEdittingAt={this.toggleEdittingAt} 
          setName={this.setName} 
          removeGuestAt={this.removeGuestAt} 
          newGuestInput={this.state.newGuestInput}
        />
      </div>
    );
  }
}

export default App;
