import React, { Component } from 'react'

export default class AddContact extends Component {

    state = {
        name: '',
        email: '', 
    }

    add= (e)=>{
        e.preventDefault();
        if(this.state.name === '' || this.state.email === ''){
            alert("All the fiels are mandatory")
            return;
        }
        this.props.addConatactHandler(this.state);
        // console.log(this.state); 
        this.setState({name:'',email:''});
        this.props.history.push='/';
    }


    
    render() {
        return (
            <div>
                <h2>Add Contact</h2>
                <form  onSubmit={this.add}>
                    <div>
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="">E-mail</label>
                        <input type="text" name="email" placeholder="E-mail" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}/>
                    </div>
                    {/* <button>Add</button> */}
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}
