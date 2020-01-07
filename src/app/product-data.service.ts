import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage } from '@angular/fire/storage';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Subject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductDataService {
  dataUrl;
  
  private isLoadingCompleteSrc = new Subject<boolean>();
  isLoadingComplete = this.isLoadingCompleteSrc.asObservable();

  dataLoaded() {
    this.isLoadingCompleteSrc.next(false);
  }

  getProductData() {
      return this.http.get(this.dataUrl);
    }    

  constructor(private http: HttpClient,private storage: AngularFireStorage,) { 

    const ref = this.storage.ref('dataNew.json');
    const downloadUrl = ref.getDownloadURL();

    downloadUrl.subscribe(url=>{
     if(url){
          console.warn("this.dataUrl: ",this.dataUrl );
         this.dataUrl = url;
         this.dataLoaded();
      }})
  }
}