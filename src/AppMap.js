import React, { Component } from 'react';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  Map,
  Polyline,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet';
import '../map.css';
import Spinner from 'react-bootstrap/Spinner';
import { NoPaths, getData } from '../Shared';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// pull images from cdn instead of storing locally
Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/';

export default class AppMap extends Component {
	constructor(props) {
		super(props);
		this.state = {markerData: [], isLoading: true};
	}

	async componentWillMount() {
		// urls for the direction jsons
		var urls;
		var marker_urls;
		const names = await getData('https://SASE-Labs-2020.github.io/assets/names.json');
		marker_urls = Object.values(names).map(name => 'https://SASE-Labs-2020.github.io/assets/informations/' + name + '.json');
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
			return <Spinner animation="border" variant="dark"/>;
		}
		if (this.state.noPath) {
			return <NoPaths/>;
		}
		return (
			<Tabs defaultActiveKey='map' variant='pills'>
				<Tab eventKey='map' title={this.props.start === 'null' ? 'All Buildings and Paths' : `${this.props.start} to ${this.props.end}`}>
					<Map center={[44.974208, -93.2325]} zoom={15}>
						<TileLayer
   		       			attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
   		       			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
   		     		/>
						<Polyline color="#0668B3" positions={this.state.data.map(json => json.coordinates.map(point => [point.latitude, point.longitude]))} />
						{this.state.markerData.map(json => {
							return (
								<Marker position={[json.location.latitude, json.location.longitude]}>
									<Popup>
										<h3>{json.building}</h3>
										{json.info.university ? <h8 style={{ 'white-space': 'pre-line' }}>{json.info.university}<br/><br/></h8> : null}
										{json.info.public ? <h8 style={{ 'white-space': 'pre-line' }}>{json.info.public}<br/><br/></h8> : null}
										{json.info.accessibility ? <h8 style={{ 'white-space': 'pre-line' }}>{json.info.accessibility}<br/><br/></h8> : null}
									</Popup>
								</Marker>
							);
						})}
					</Map>
				</Tab>
			</Tabs>
		);
	}
}