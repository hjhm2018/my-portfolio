import React, { Component } from 'react'

export class ReactFilter extends Component {

    state ={
        users: [],
        name: ""
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(e.target.name)
    };

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                response.json()
                    .then(data => {
                        this.setState({
                            users: data
                        })
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div className="container-fluid mb-5">

                        <h1 className="text-center p-3 bg-info rounded text-light col-md-12 col-sm-12">Users List from JSON Placeholder API</h1>

                        <input name="name" className="mb-2 text-center rounded" type="search" placeholder="Filter by name" onChange={this.onChange} />

                        <div className="row">
                            <div className="col-md-12 col-sm-12">

                                {this.state.users ? this.state.users.filter(person =>
                                    person.name.toLowerCase().includes(this.state.name)
                                ).map((user, index) => (
                                    <div className="border p-3" key={index}>
                                        <p><span className="font-weight-bold">Name: </span> {user.name}</p>
                                        <p><span className="font-weight-bold">Email: </span> {user.email}</p>
                                        <p><span className="font-weight-bold">Phone: </span> {user.phone}</p>
                                        <p><span className="font-weight-bold">Website: </span> {user.website}</p>
                                        <p><span className="font-weight-bold">Company: </span> {user.company.name}</p>
                                    </div>
                                )) : <div>No data</div>}
                            </div>
                        </div>
                    </div>
        )
    }
}

export default ReactFilter
