import { Component, OnInit } from '@angular/core';
import { Reader } from '../model/reader';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-edit-reader',
  templateUrl: './edit-reader.component.html',
  styleUrls: ['./edit-reader.component.css'],
})
export class EditReaderComponent implements OnInit {
  reader!: Reader;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getReaderByID(2).subscribe(
      (data) => (this.reader = data),
      (err) => console.log(err)
    );
  }
}
