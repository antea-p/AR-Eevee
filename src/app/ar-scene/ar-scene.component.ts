import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ar-scene',
  templateUrl: './ar-scene.component.html',
  styleUrls: ['./ar-scene.component.css']
})
export class ArSceneComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    this.setupARScene();
  }

  setupARScene(): void {
    document.addEventListener('DOMContentLoaded', () => {
      navigator.geolocation.getCurrentPosition((position) => {
        const entity = document.querySelector('[gps-entity-place]') as any;
        entity.setAttribute('gps-entity-place', `latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude};`);
      });
    });
  }
}
