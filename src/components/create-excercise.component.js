import React, { Component } from 'react';

export default class CreateExcercise extends Component {
	//constructor
	constructor(props) {
		super(props);

		this.onChangeUserName = this.onChangeUserName.bind(this);
		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.onChangeDuration = this.onChangeDuration.bind(this);
		this.onChangeDate = this.onChangeDate.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			username: '',
			description: '',
			duration: 0,
			date: new Date(),
			users: []
		};
	}

	componentDidMount() {
		this.setState({
			users: [ 'test user', "Ryan Martin" ],
			username: 'test user'
		});
	}

	onChangeUserName(e){
		this.setState({
			username: e.target.value
		});
	}
	onChangeDescription(e) {
		this.setState({
			description: e.target.value
		});
	}
	onChangeDuration(e) {
		this.setState({
			duration: Number(e.target.value)
		});
	}
	onChangeDate(date) {
		this.setState({
			date: date
		});
	}

	onSubmit(e) {
		e.preventDefault();

		const excercise = {
			username: this.state.username,
			description: this.state.description,
			duration: this.state.duration,
			date: this.state.date
		};

		console.log(excercise);

		window.location = '/';
	}

	render() {
		return(
            <div>
                <h3>Create New Excercise Log</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <select ref="userInput" 
                        required className="form-control" 
                        value={this.state.username} 
                        onChange={this.onChangeUserName}>
                        {this.state.users.map(user =>{
                            return <option key={user}
                            value={user}>{user}</option>
                        })}

                    </select>
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <input type="text"
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription} />
                </div>
                <div className="form-group">
                    <label>Duration (in minutes):</label>
                    <input type="text"
                    className="form-control"
                    value={this.state.duration}
                    onChange={this.onChangeDuration} />
                </div>
                <div className="form-group">
                    <lable>Date:</lable>
                    <input type="date"
                    className="form-control"
                    value={this.state.date}
                    onChange={this.onChangeDate}
                     />
                </div>
                </form>
            </div>
        )
	}
}
