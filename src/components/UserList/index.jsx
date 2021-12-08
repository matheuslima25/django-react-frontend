import React from 'react';
import List from '../List';

export default class UserList extends React.Component {
    state = { lists: null, loading: true }

    async componentDidMount(){
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        config.headers['Authorization'] = 'Token 7f0bccd204220ecb2ef9c2ca3dc9b33ca8b6321b'

        var url = 'http://localhost:8000/list/';
        const reponse = await fetch(url, config);
        const data = await reponse.json();
        this.setState({lists: data, loading: false});
    }

    render(){
        return (
            <div>
                <List listName={'Minha Lista'}/>
                <List listName={'Minha Lista 2'}/>
            </div>
        )
    }
}