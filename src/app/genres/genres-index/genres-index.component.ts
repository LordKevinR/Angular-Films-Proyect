import { Component, OnInit } from '@angular/core';
import { GenresService } from '../genres.service';
import { genreDTO } from '../genres';
import { HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-genres-index',
  templateUrl: './genres-index.component.html',
  styleUrls: ['./genres-index.component.css']
})
export class GenresIndexComponent implements OnInit {

  constructor(private genreService: GenresService){}

  genres: genreDTO[];
  columnsToShow = ['id', 'name', 'actions'];
  totalRecordsNumber;
  actualPage = 1;
  numberOfRecordsToShow = 10;

  ngOnInit(): void {
    this.loadRecords(this.actualPage, this.numberOfRecordsToShow);
  }

  loadRecords(page: number, numberOfRecordsToShow: number){
    this.genreService.getAll(page, numberOfRecordsToShow).subscribe((response: HttpResponse<genreDTO[]>) => {
      this.genres = response.body;
      this.totalRecordsNumber = response.headers.get("totalRecordsNumber");
    }, error => console.error(error))
  }

  updatePagination(data: PageEvent){
    this.actualPage = data.pageIndex + 1;
    this.numberOfRecordsToShow = data.pageSize;
    this.loadRecords(this.actualPage, this.numberOfRecordsToShow);
  }

  delete(id: number){
    this.genreService.delete(id)
    .subscribe(() => {
      this.loadRecords(this.actualPage, this.numberOfRecordsToShow);
    }, error => console.error(error))
  }

}
