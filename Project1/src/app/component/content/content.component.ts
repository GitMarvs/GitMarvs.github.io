import { Component, OnInit } from '@angular/core';
import { CarouselService } from 'src/app/services/carousel.service';

declare var scrollFunction:any;
declare var topFunction:any;




@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass'],
})
export class ContentComponent implements OnInit {
  products: any[] = [
		{
			"id": "1000",
			"code": "f230fh0g3",
			"name": "Train Railway",
			"description": "Product Description",
			"image": "https://picsum.photos/id/227/300/200",
			"price": 65,
			"category": "Accessories",
			"quantity": 24,
			"inventoryStatus": "INSTOCK",
			"rating": 5
		},
		{
			"id": "1001",
			"code": "nvklal433",
			"name": "Black Watch",
			"description": "Product Description",
			"image": "https://picsum.photos/id/257/300/200",
			"price": 72,
			"category": "Accessories",
			"quantity": 61,
			"inventoryStatus": "INSTOCK",
			"rating": 4
		},
		{
			"id": "1002",
			"code": "zz21cz3c1",
			"name": "Blue Band",
			"description": "Product Description",
			"image": "https://picsum.photos/id/267/300/200",
			"price": 79,
			"category": "Fitness",
			"quantity": 2,
			"inventoryStatus": "LOWSTOCK",
			"rating": 3
		},
	];

	responsiveOptions;

  constructor(private carouselService: CarouselService) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
   }

  ngOnInit(){
    new scrollFunction();
    new topFunction();


  }

  loadMore(){
    this.carouselService.getData().subscribe(data => {
      debugger;
			this.products = [...this.products, ...data.data];
		});
  }




}
