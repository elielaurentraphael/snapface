import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss',
})
export class SingleFaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
  }

  onClick() {
    if (this.buttonText === 'Oh Snap!') {
      // effacez et réécrivez la ligne ci-dessous
      this.faceSnapsService.snapFaceSnapnById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    } else {
      // effacez et réécrivez la ligne ci-dessous
      this.faceSnapsService.snapFaceSnapnById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }
  }
}
