import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage } from '@angular/fire/storage';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  dataUrl;

  getProductData() {
      return this.http.get(this.dataUrl);
    }    

  constructor(private http: HttpClient,private storage: AngularFireStorage,) { 

    const ref1 = this.storage.ref('dataNew.json');
    const downloadUrl1 = ref1.getDownloadURL();

    downloadUrl1.subscribe(url=>{
     if(url){
         this.dataUrl = url;
      }})
  }
}