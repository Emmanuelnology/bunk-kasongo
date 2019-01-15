import { Injectable } from '@angular/core';
import { footballers } from './assets/football.json';

export interface IFootballer {
  id: number;
  position: string;
  name: string
}

export interface IWeatherAPI {
  all: IFootballer[];
}


@Injectable({
  providedIn: 'root'
})
export class FootballService {
  footballers:string;

  constructor() { }
}


