import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

class MyProfile extends Component {
    state = { 
        // name: "Susan",
        // birthday: "12/12/1998",
        // restrictions: ["gluten-free", "vegan", "lactose", "nuts", "eggs", "milk"] ,
            data: [
                {
                    name: "Susan",
                    birthday: "12/12/1998",
                    restrictions: ["gluten-free", "vegan", "lactose", "nuts", "eggs", "milk"] ,
                },
                {
                    name: "tommy",
                    birthday: "01/31/2002",
                    restrictions: ["gluten"] ,
                },
                {
                    name: "karen",
                    birthday: "06/05/1974",
                    restrictions: ["vegetarian"] ,
                }
            ]
        }



        // name: "susan",
        // birthday: "12/12/1998",
        // restrictions: "gluten, vegan" ,



    // render() {
    //     return (
    //         <Card>
    //             <ListGroup variant="flush">
    //                 {/* Name */}
    //                 <ListGroup.Item>
    //                     <Card>Name: {this.state.name}</Card>
    //                 </ListGroup.Item>
    //                 {/* Birthday */}
    //                 <ListGroup.Item>
    //                     <Card>Birthday: {this.state.birthday}</Card>
    //                 </ListGroup.Item>
    //                 {/* Restrictions */}
    //                 <ListGroup.Item>
    //                     <Card>Restrictions:</Card>
    //                 </ListGroup.Item>
    //                     {/* empty */}
    //                 <ListGroup.Item>
    //                     <CardColumns>
    //                         {this.state.restrictions.map(
    //                             (restriction) => (
    //                                 <Card style={{ width: '20rem' }}>{restriction}</Card>
    //                             ),
    //                         )}
    //                     </CardColumns>
    //                 </ListGroup.Item>
    //             </ListGroup>
    //             <Button variant="primary" size="lg">Edit Profile</Button>
    //          </Card>
    //     )
    // }
    
    render() {
        return (
            this.state.data.map(
                (profile) => (
                    <Card>
                        <ListGroup variant="flush">
                            {/* Name */}
                            <ListGroup.Item>
                                <Card>Name: {profile.name}</Card>
                            </ListGroup.Item>
                            {/* Birthday */}
                            <ListGroup.Item>
                                <Card>Birthday: {profile.birthday}</Card>
                            </ListGroup.Item>
                            {/* Restrictions */}
                            <ListGroup.Item>
                                <Card>Restrictions:</Card>
                            </ListGroup.Item>
                                {/* empty */}
                            <ListGroup.Item>
                                <CardColumns>
                                    {profile.restrictions.map(
                                        (restriction) => (
                                            <Card style={{ width: '20rem' }}>{restriction}</Card>
                                        ),
                                    )}
                                </CardColumns>
                            </ListGroup.Item>
                        </ListGroup>
                        <Button variant="primary" size="lg">Edit Profile</Button>
                    </Card>
            ),
        )
    )}

    




    /*
     * ORIGINAL
    */

    // render() { 
    //     return ( 
    //         <Card>
    //         <ListGroup variant="flush">
    //             <ListGroup.Item>Name: {this.state.name}</ListGroup.Item>
    //             <ListGroup.Item>Birthday: {this.state.birthday}</ListGroup.Item>
    //             <ListGroup.Item>Restrictions: {this.state.restrictions}</ListGroup.Item>
    //         </ListGroup>
    //         </Card>
    //      );
    // }
}
 
export default MyProfile;