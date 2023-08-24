import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { tileLayer, latLng, LeafletMouseEvent, Marker, marker, icon } from 'leaflet';
import { ILocation } from './location.interface';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  @Input()
  initialsLocations: ILocation[] = [];

  @Output()
  selectedLocation: EventEmitter<ILocation> = new EventEmitter<ILocation>();

  ngOnInit(): void {
    this.layers = this.initialsLocations.map(value => marker([value.latituden, value.longituden]));
  }

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 13,
    center: latLng(18.479752362833626, -429.94291305542)
  };

  layers: Marker<any>[] = [];

  handleClick(event: LeafletMouseEvent){
    const latituden = event.latlng.lat;
    const longituden = event.latlng.lng;
    console.log({latituden, longituden});

    this.layers = [];
    this.layers.push(marker([latituden, longituden],{
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/marker-icon.png',
        iconRetinaUrl: 'assets/marker-icon-2x.png',
        shadowUrl: 'assets/marker-shadow.png'
      })
    }));
    this.selectedLocation.emit({latituden, longituden});
  }
}
