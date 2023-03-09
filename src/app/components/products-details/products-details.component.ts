import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit{

  product: Product;

  constructor(private database: DatabaseService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getProductById();
  }

  getProductById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.database.getProductsById(id).subscribe(product =>
      this.product = product);
  }
}
