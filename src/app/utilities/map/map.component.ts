import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { tileLayer, latLng, LeafletMouseEvent, Marker, marker, icon } from 'leaflet';
import { ILocation, ILocationWithMessage } from './location.interface';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  @Input()
  initialsLocations: ILocationWithMessage[] = [];

  @Input()
  readonly: boolean = false;

  @Output()
  selectedLocation: EventEmitter<ILocation> = new EventEmitter<ILocation>();

  ngOnInit(): void {
    this.layers = this.initialsLocations.map(value => {
      let mark = marker([value.latitude, value.longitude])

      if (value.message){
        mark.bindPopup(value.message, {autoClose: false, autoPan: false});
      }

      return mark;
    } );
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

    if (!this.readonly){
      const latitude = event.latlng.lat;
      const longitude = event.latlng.lng;


      this.layers = [];
      this.layers.push(marker([latitude, longitude],{
        icon: icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
          iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png'
        })
      }));
      this.selectedLocation.emit({latitude, longitude});
    }

  }
}
