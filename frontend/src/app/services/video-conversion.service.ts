import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoConversionService {
  private readonly apiUrl = 'http://localhost:3000/convert';

  constructor(private http: HttpClient) {}

  convertToGif(videoFile: File): Observable<Blob> {
    const formData = new FormData();
    formData.append('video', videoFile);

    return this.http.post(this.apiUrl, formData, {
      headers: new HttpHeaders({
        Accept: 'application/octet-stream',
      }),
      responseType: 'blob',
    });
  }
}
