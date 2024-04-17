import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { Reader } from '../model/reader';
import { Error } from '../model/error';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  readers: Reader[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAuthorRecommendations(2).then(
      (author: string) => console.log(author),
      (err: string) => console.log(err)
    );

    this.dataService.getAllReaders().subscribe(
      (data: Reader[] | Error) => (this.readers = <Reader[]>data),
      (err: Error) => console.log(err)
    );
  }
}
