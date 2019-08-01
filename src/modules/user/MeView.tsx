import * as React from 'react';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';
import {MeQuery} from '../../schemaTypes';
import { Link } from 'react-router-dom';

const meQuery = gql`
    query MeQuery {
        me {
            id
            email
        }
    }
`;

export default class MeView extends React.PureComponent {
    render() {
        return <Query<MeQuery> query={meQuery}>{({data,loading})=> {
            console.log(data);
            if (loading){
                return null
            }
            if (!data) {
                return <div>data is undefined</div>
            }
            if (!data.me) {
                return (
                    <>
                    <p>No user receive.</p>
                    <div><Link to="/login">Login now</Link> </div>
                    </>
                )
            }
            return <div>{data.me.email}</div>
        }}
        </Query>    

    }
}