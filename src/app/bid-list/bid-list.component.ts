import { Component, Input, OnInit } from '@angular/core';
import { bids } from '../models/Bids';
import { Product } from '../models/Product';

@Component({
  selector: 'app-bid-list',
  templateUrl: './bid-list.component.html',
  styleUrls: ['./bid-list.component.css']
})
export class BidListComponent implements OnInit {
  @Input() bids?: bids[]; 
  constructor() { }

  ngOnInit(): void {
  }

}
