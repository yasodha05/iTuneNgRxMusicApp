import { Injectable } from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromMusic from '../store/reducer';
import {takeWhile} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  componentActive= true;
  favorite = [];
  val=0;
  constructor(private store: Store<fromMusic.State>) { }

  getCount(){
    // this.store.pipe(
    //   select(fromMusic.getFavorite),
    //   takeWhile(() => this.componentActive)
    // ).subscribe(
    //   currentProduct => this.favorite = currentProduct
    // );
    return this.favorite.length;
  }
}
