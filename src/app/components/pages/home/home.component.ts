import { Component, inject } from '@angular/core';
import { SingleCardComponent } from '../single-card/single-card.component';
import { CardData } from '../Data';
import { CommonModule } from '@angular/common';
import { TrendingProductsComponent } from '../trending-products/trending-products.component';
import { APIService } from '../../api.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SingleCardComponent,
    CommonModule,
    TrendingProductsComponent,
    HttpClientModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  cardlist = CardData;
  singleCardData: any;
  router = inject(Router);
  // constructor(private apiservice: APIService) {}
  http = inject(HttpClient);
  ngOnInit(): void {
    this.GetData();
  }
  GetData() {
    // this.apiservice.getproduct().subscribe((res: any) => {
    //   console.log('product Response :  ', res);
    // });
    this.http.get('https://fakestoreapi.com/products').subscribe((res: any) => {
      this.singleCardData = res.slice(0, 3);
      console.log(this.singleCardData);
    });
  }
  NavigateToallproduct() {
    this.router.navigateByUrl('all-product');
  }
}
