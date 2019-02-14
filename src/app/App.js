import React, { Component } from 'react';
import Headings from './Headings';
import Rows from './Rows';
import { format } from 'timeago.js';


class App extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        setInterval(async () => {
            const res = await fetch('http://openlibrary.org/recentchanges.json?limit=10')
            const data = await res.json();
            const formatData = this.formatData(data)
            this.setState({data: formatData})
        }, 1000)
    }

    formatData(data) {
        return data.map((data, i) => {
            return {
                "when": format(data.timestamp),
                "who": data.author.key,
                "description": data.comment
            }
        })
    }

    render() {
        return (
            <div className="container p-4">
                <h1>{this.props.title}</h1>
                <table className="table table-bordered">
                    <Headings headings={this.props.headings} />
                    <Rows data={this.state.data}/>
                </table>
            </div>
        )
    }
}

export default App