import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { footballers } from './assets/football.json';
import { IFootballer } from '../service/football.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})
export class FootballComponent implements OnInit {
  private footballer: Observable<IFootballer>;
  constructor(private http: HttpClient) { }
  

  public ngOnInit() {
    this.footballer = this.http.get<IFootballer>("http://api.openweathermap.org/data/2.5/weather?id=2643744&APPID=f4bbeb8ec1a8fb95591f2cf112aaa575");
  }

}
