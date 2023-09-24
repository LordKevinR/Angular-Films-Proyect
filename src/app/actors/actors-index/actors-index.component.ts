import { Component, OnInit } from '@angular/core';
import { ActorsService } from '../actors.service';
import { actorDTO } from '../actor';
import { PageEvent } from '@angular/material/paginator';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-actors-index',
  templateUrl: './actors-index.component.html',
  styleUrls: ['./actors-index.component.css']
})
export class ActorsIndexComponent implements OnInit {

  constructor(private actorsService: ActorsService) { }

  actors: actorDTO[];
  columnsToShow = ['id', 'name', 'actions'];
  totalRecordsNumber;
  actualPage = 1;
  numberOfRecordsToShow = 10;

  ngOnInit(): void {
    this.loadRecords(this.actualPage, this.numberOfRecordsToShow);
  }

  loadRecords(page: number, numberOfRecordsToShow: number){
    this.actorsService.getAll(page, numberOfRecordsToShow).subscribe((response: HttpResponse<actorDTO[]>) => {
      this.actors = response.body;
      this.totalRecordsNumber = response.headers.get("totalRecordsNumber");
    }, error => console.error(error))
  }

  updatePagination(data: PageEvent){
    this.actualPage = data.pageIndex + 1;
    this.numberOfRecordsToShow = data.pageSize;
    this.loadRecords(this.actualPage, this.numberOfRecordsToShow);
  }

  delete(id: number){
    this.actorsService.delete(id)
    .subscribe(() => {
      this.loadRecords(this.actualPage, this.numberOfRecordsToShow);
    }, error => console.error(error))
  }


}


