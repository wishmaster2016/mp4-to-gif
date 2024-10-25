import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LoaderComponent } from './components/loader/loader.component';
import { VideoConvertComponent } from './components/video-upload/video-convert.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent, VideoConvertComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'frontend';
}
