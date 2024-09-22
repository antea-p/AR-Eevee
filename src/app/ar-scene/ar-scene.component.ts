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
    this.setupEeveeInteraction();
  }

  setupEeveeInteraction(): void {
    document.addEventListener('DOMContentLoaded', () => {
      const eeveeEntity = document.querySelector('a-entity[obj-model]') as any;
      if (eeveeEntity) {
        eeveeEntity.addEventListener('click', () => {
          const currentRotation = eeveeEntity.getAttribute('rotation');
          const newY = (currentRotation.y + 45) % 360;
          eeveeEntity.setAttribute('rotation', `${currentRotation.x} ${newY} ${currentRotation.z}`);
        });
      }
    });
  }
}
