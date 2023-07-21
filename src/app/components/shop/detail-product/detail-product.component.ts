import { Component, OnInit } from '@angular/core';
import {ServiceproductService} from "../product/serviceproduct.service";
import {Router,ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {


  productdata:any;
  constructor(private productService: ServiceproductService,private router:Router , private activatedRoute :ActivatedRoute ) { }

  ngOnInit(): void {
    this.productService.getProductById( this.activatedRoute.snapshot.params['id']).subscribe({
      next: (data) =>

        this.productdata = data
    })
  }

}
