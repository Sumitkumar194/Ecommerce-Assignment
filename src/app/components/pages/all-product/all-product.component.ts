import { Component, inject, signal } from '@angular/core';
import { SingleCardComponent } from '../single-card/single-card.component';
import { APIService } from '../../api.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimilarProductComponent } from '../similar-product/similar-product.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Signal } from '@angular/core';
import { SearchService } from '../../Services/search.service';
@Component({
  selector: 'app-all-product',
  standalone: true,
  imports: [SimilarProductComponent, CommonModule, FormsModule],
  templateUrl: './all-product.component.html',
  styleUrl: './all-product.component.css',
})
export class AllProductComponent implements OnInit {
  constructor(
    private service: APIService,
    private serchService: SearchService
  ) {}
  allProduct: any;
  filterProducts: any;
  CheckedVlue: boolean = false;
  selectedCategory: string = '';
  router = inject(Router);

  ngOnInit(): void {
    this.fetch();
    this.serchService.searchTerm$.subscribe(() => this.applyFilters());
  }

  fetch() {
    this.service.getproduct().subscribe((res) => {
      this.allProduct = res;
      this.filterProducts = res;
      this.applyFilters();
      // console.log('all product : ', this.allProduct);
    });
  }
  applyFilters() {
    const searchTerm = this.serchService.searchTerm$.getValue().toLowerCase();
    this.filterProducts = this.allProduct.filter((product: any) => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm);
      const matchesCategory =
        !this.selectedCategory || product.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }

  applyCategoryFilter(category: string) {
    if (category === 'clothing') {
      // alert('if run');
      this.filterProducts = this.allProduct.filter(
        (product: any) =>
          product.category === "women's clothing" ||
          product.category === "men's clothing"
      );
      console.log(this.filterProducts);
    } else {
      this.selectedCategory = category;
      this.applyFilters();
    }
  }
  clearFilters() {
    this.selectedCategory = '';
    this.serchService.setSearchTerm('');
    this.applyFilters();
  }
  // applyfilter(category: string) {
  //   if (category) {
  //     this.selectedCategory = category;
  //     if (category === 'clothing') {
  //       this.filterProducts = this.allProduct.filter(
  //         (product: any) =>
  //           product.category === "women's clothing" ||
  //           product.category === "men's clothing"
  //       );
  //     } else {
  //       this.filterProducts = this.allProduct.filter(
  //         (product: any) => product.category === category
  //       );
  //     }
  //   } else {
  //     this.filterProducts = this.allProduct;
  //   }
  // }

  viewproduct(id: number) {
    this.router.navigate(['/Sproduct', id]);
  }
  // clearfilter() {
  //   this.selectedCategory = '';
  //   this.filterProducts = this.allProduct;
  // }
}
