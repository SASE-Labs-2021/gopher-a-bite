import React, { Component } from 'react';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
} from 'react-leaflet';
import '../map.css';
import Spinner from 'react-bootstrap/Spinner';
import { NoPaths, getData } from '../Shared';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {
    BrowserRouter as Router,
    useLocation,
    Link,
    Switch,
    Route
} from "react-router-dom";



// pull images from cdn instead of storing locally
Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/';

export default class AppMap extends Component {
    constructor(props) {
        super(props);
        this.state = { markerData: [], isLoading: true };
    }

    async componentWillMount() {
        // urls for the direction jsons
        var marker_urls;
        const names = await getData('https://gopher-a-bite.uc.r.appspot.com/ids');
        marker_urls = Object.values(names).map(name => 'https://gopher-a-bite.uc.r.appspot.com/restaurants/' + name);
        console.log(marker_urls)
        marker_urls.forEach(url => {
            return fetch(url)
                .then(response => response.json())
                .then((responseData) => {
                    this.setState(
                        (prevState) => {
                            return {
                                markerData: prevState.markerData.concat(responseData),
                                isLoading: false
                            };
                        }
                    );
                });
        });
    }

    render() {
            if (this.state.isLoading) {
                return <Spinner animation = "border"
                variant = "dark" / > ;
            }
            return ( <
                Tabs defaultActiveKey = 'map'
                variant = 'pills' >
                <
                Tab eventKey = 'map' >
                <
                MapContainer center = {
                    [44.981108, -93.235258]
                }
                zoom = { 25 } >
                <
                TileLayer attribution = '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /
                >
                {
                    this.state.markerData.map(json => {
                            return ( <
                                Marker position = {
                                    [json.latitude, json.longitude]
                                } >
                                <
                                Popup >
                                <
                                h3 > { json.restaurant } < /h3> {
                                json.desc ? < h7 style = {
                                    { 'white-space': 'pre-line' }
                                } > { json.desc } < br / > < br / > < /h7> : null} {
                                json.address ? < h7 style = {
                                    { 'white-space': 'pre-line' }
                                } > { json.address } < br / > < br / > < /h7> : null} {
                                json.hours ? < h7 style = {
                                    { 'white-space': 'pre-line' }
                                } > { json.hours } < br / > < br / > < /h7> : null} { json.link ? < a href = { json.link } > < h7 style = { { 'white-space': 'pre-line' }
                            } > { json.link } < br / > < br / > < /h7></a >: null
                        } <
                        button > < Link to = {
                            `/reviews?restaurant=${json.restaurant}`
                        } > Review < /Link>< /button >
                            <button><Link to={`/rest?restaurant=${json.restaurant}`}>
                            Info</Link></button>
                        <
                        /
                        Popup > <
                        /Marker>
                    );
                })
        } <
        /MapContainer> < /
    Tab > <
        /Tabs>
);
}
}