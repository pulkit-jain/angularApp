import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage } from '@angular/fire/storage';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  shippingUrl;
  items = [];

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
      //return this.http.get('/assets/shipping.json');
      return this.http.get(this.shippingUrl);
    }

  constructor(private http: HttpClient,private storage: AngularFireStorage,) { 

    const ref = this.storage.ref('shipping.json');
    const downloadUrl = ref.getDownloadURL();

    downloadUrl.subscribe(url=>{
     if(url){
         this.shippingUrl = url;
      }})
  }
}



// export class CartService {
//   shippingUrl: Observable<string>;
//   shippingUrl1;
//   meta: Observable<any>;
//   items = [];
//   shippingData;

// data1;
//   addToCart(product) {
//     this.items.push(product);
//   }

//   getItems() {
//     return this.items;
//   }

//   clearCart() {
//     this.items = [];
//     return this.items;
//   }

//   getShippingPrices() {
//     //this.storage.

//     //this.data1 = this.http.get('/assets/shipping.json');
//     //console.warn('Your data1:',this.data1);
//     //this.data1 = this.shippingUrl;
//     //return this.shippingUrl1;
//    //return this.http.get('/assets/shipping.json');
//     //return this.http.get(this.shippingUrl1);

// // this.http.get<any>(this.shippingUrl1)
// //   .subscribe(response => 
// //   {
// //    // console.log("records"+this.data1)
// //   //this.data1=JSON.stringify(response) // impoprtant
// //   //console.log("records"+this.data1)
// //   });

// //this.data1 = this.http.get(this.shippingUrl1);
// console.warn('Your data1:',this.data1);

// this.data1 = this.http.get('/assets/shipping.json');
// //console.warn('Your data1:',this.data1);

// return this.shippingData; 
//     //return this.http.get<any[]>(this.shippingUrl1) .pipe(map(data => data));
//  //return this.shippingUrl1;
//     //  return this.http.get(
//     //  this.shippingUrl1,
//     //   {
//     //     headers:
//     //       new HttpHeaders(
//     //         {
//     //           'Content-Type': 'application/json',
//     //           'X-Requested-With': 'XMLHttpRequest',
//     //           'MyClientCert': '',        // This is empty
//     //           'MyToken': ''              // This is empty
//     //         }
//     //       )
//     //   }
//     // ).pipe( map(res => res), catchError(err => throwError(err)) );
//   }

//  public getJSON(): Observable<any> {
//    return this.http.get(this.shippingUrl1);
//  }

//   //  downloadFile(): Observable<HttpResponse<Blob>>{		
// 	// 	return this.http.get(this.shippingUrl1, { responseType: ResponseContentType.Blob });
//   //  }

//   constructor(private http: HttpClient,
//   private storage: AngularFireStorage,
//  // private httpResponse: HttpResponse
//   ) { 

//     const ref = this.storage.ref('shipping.json');
//     this.shippingUrl = ref.getDownloadURL();
//     this.meta = ref.getMetadata();

//       this.shippingUrl.subscribe(url=>{
//      if(url){
//        this.shippingUrl1 = url;
//         console.warn('Your shippingUrl:', this.shippingUrl1);
//          //wirte the url to firestore
//          this.getJSON().subscribe(data => {
//            this.shippingData = data;
//         console.warn('data:', data);
//          //console.log(data);
//         });
         
//      }
//   })

//      this.meta.subscribe(url=>{
//      if(url){
//     console.warn('Your meta:', url);
//          //wirte the url to firestore
//      }
//   })


//   }

// }