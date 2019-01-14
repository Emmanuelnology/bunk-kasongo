import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWeather } from '../service/weather.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  private error = false;
  private weather:Observable<IWeather>;
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  public ngOnInit() {
    this.weather = this.route.params
      .pipe(switchMap((params) => {
        const id = params['id'];
        return this.weather = this.http.get<IWeather>("http://api.openweathermap.org/data/2.5/weather?id=2643744&APPID=f4bbeb8ec1a8fb95591f2cf112aaa575" + id)
          .pipe(
            catchError((error: HttpErrorResponse) => {
              this.error = true;
              return new Observable<IWeather>();
        }),
      );
    }));
  }

}
