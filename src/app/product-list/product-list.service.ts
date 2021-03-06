import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage } from '@angular/fire/storage';
import {Observable} from 'rxjs';
import { Subject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductListService {
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
          //console.warn("this.dataUrl: ",this.dataUrl );
         this.dataUrl = url;
         this.dataLoaded();
      }})
  }
}

    // loadProductData()
    // {
    // this.http.get('/api/users')
    // .map(res => res.json())
    //     .subscribe((data) => {
    //       this.productData = data;
    //     });
    // }

