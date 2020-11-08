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
		var marker_urls;
		const names = await getData('https://github.com/SASE-Labs-2021/gopher-a-bite/api/restNames.json');
		marker_urls = Object.values(names).map(name => 'https://github.com/SASE-Labs-2021/gopher-a-bite/api/popUpInfo/' + name + '.json');
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
		return (
			<Tabs defaultActiveKey='map' variant='pills'>
				<Tab eventKey='map' title={this.props.start === 'null' ? 'All Buildings and Paths' : `${this.props.start} to ${this.props.end}`}>
					<Map center={[44.981108, -93.235258]} zoom={25}>
						<TileLayer
   		       			attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
   		       			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
   		     		/>
						{this.state.markerData.map(json => {
							return (
								<Marker position={[json.location.latitude, json.location.longitude]}>
									<Popup>
										<h3>{json.restaurant}</h3>
										{json.info.rating ? <h5 style={{ 'white-space': 'pre-line' }}>{json.info.rating}<br/><br/></h5> : null}
										{json.info.desc ? <h7 style={{ 'white-space': 'pre-line' }}>{json.info.desc}<br/><br/></h7> : null}
										{json.info.address ? <h7 style={{ 'white-space': 'pre-line' }}>{json.info.address}<br/><br/></h7> : null}
										{json.info.hours ? <h7 style={{ 'white-space': 'pre-line' }}>{json.info.hours}<br/><br/></h7> : null}
										{json.info.link ? <a href="json.info.link"><h7 style={{ 'white-space': 'pre-line' }}>{json.info.link}<br/><br/></h7></a> : null}
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