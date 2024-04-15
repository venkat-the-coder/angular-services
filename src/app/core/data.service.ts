import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Reader } from '../model/reader';
import { allReaders } from '../data/data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private loggerService: LoggerService) {}

  getAllReaders(): Reader[] {
    return allReaders;
  }

  getReaderByID(id: number): Reader | undefined {
    return allReaders.find((x) => x.readerID === id);
  }
  
}
