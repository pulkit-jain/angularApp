import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage } from '@angular/fire/storage';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

import { productList } from './product-list/product-list.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  shippingUrl;
  dataUrl;
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
      console.warn("this.shippingUrl 1: ",this.shippingUrl );
      //return this.http.get(this.shippingUrl);
      //productList.isloading = false;

    const ref = this.storage.ref('shipping.json');
    const downloadUrl = ref.getDownloadURL();

    downloadUrl.subscribe(url=>{
     if(url){
         //this.shippingUrl = url;
         console.warn("url: ",url );

         return this.http.get(url);
      }})


      // // this.http.get<any>(this.shippingUrl1)
// //   .subscribe(response => 
// //   {
// //    // console.log("records"+this.data1)
// //   //this.data1=JSON.stringify(response) // impoprtant
// //   //console.log("records"+this.data1)
// //   });

    }

loadShippingData()
{
      this.http.get<any>(this.shippingUrl)
  .subscribe(response => 
  {
    if(response){
          console.log("response:"+response);

    const data = response;
    productList.isloading = false;
    //console.log("records"+productList.productDataValue);
    }
   // console.log("records"+this.data1)
  //this.data1=JSON.stringify(response) // impoprtant
  //console.log("records"+this.data1)
  });



        // this.http.get(this.shippingUrl)
        // .pipe(map((res: Response) => res.json()))
        // .subscribe(
        //     data => {
        //         productList.productDataValue = 
        //             data.map(countObj => countObj.countRealTimeServedApi);
        //         productList.isloading = false;
        //     },
        // );

}

  getProductData() {
      //return this.http.get('/assets/shipping.json');
      return this.http.get(this.dataUrl);
    }    

  constructor(private http: HttpClient,private storage: AngularFireStorage,) { 
console.warn("this.constructor: " );
    const ref = this.storage.ref('shipping.json');
    const downloadUrl = ref.getDownloadURL();

    downloadUrl.subscribe(url=>{
     if(url){
         this.shippingUrl = url;
         console.warn("this.shippingUrl: ",this.shippingUrl );
         this.loadShippingData();
      }})

    // const ref1 = this.storage.ref('dataNew.json');
    // const downloadUrl1 = ref1.getDownloadURL();

    // downloadUrl1.subscribe(url=>{
    //  if(url){
    //      this.dataUrl = url;
    //   }})


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