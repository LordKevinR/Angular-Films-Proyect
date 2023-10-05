import { Component, OnInit } from '@angular/core';
import { TheatersService } from '../theaters.service';
import { theaterDTO } from '../theater.interface';
import { PageEvent } from '@angular/material/paginator';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-theaters-index',
  templateUrl: './theaters-index.component.html',
  styleUrls: ['./theaters-index.component.css']
})
export class TheatersIndexComponent implements OnInit {

  constructor(private theatersService: TheatersService){}

  theaters: theaterDTO[];
  columnsToShow = ['id', 'name', 'actions'];
  totalRecordsNumber;
  actualPage = 1;
  numberOfRecordsToShow = 10;

  ngOnInit(): void {
    this.loadRecords(this.actualPage, this.numberOfRecordsToShow);
  }

  loadRecords(page: number, numberOfRecordsToShow: number){
    this.theatersService.getAll(page, numberOfRecordsToShow).subscribe((response: HttpResponse<theaterDTO[]>) => {
      this.theaters = response.body;
      this.totalRecordsNumber = response.headers.get("totalRecordsNumber");
    }, error => console.error(error))
  }

  updatePagination(data: PageEvent){
    this.actualPage = data.pageIndex + 1;
    this.numberOfRecordsToShow = data.pageSize;
    this.loadRecords(this.actualPage, this.numberOfRecordsToShow);
  }

  delete(id: number){
    this.theatersService.delete(id)
    .subscribe(() => {
      this.loadRecords(this.actualPage, this.numberOfRecordsToShow);
    }, error => console.error(error))
  }


}
