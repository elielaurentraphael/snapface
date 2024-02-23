import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private router: Router
  ) {}

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

  // méthode permettant de voir les détails d'un FaceSnap
  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
