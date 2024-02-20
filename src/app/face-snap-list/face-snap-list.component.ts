import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss',
})

// on déclrare un tableau faceSnaps
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  // on injecte FaceSnapsService dans FaceSnapListComponent
  constructor(private faceSnapsService: FaceSnapsService) {}

  // on initialise le tableau ci-dessus
  ngOnInit() {
    this.faceSnaps = this.faceSnapsService.faceSnaps;
  }
}
