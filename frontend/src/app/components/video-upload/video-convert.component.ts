import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { VideoConversionService } from '../../services/video-conversion.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-video-convert',
  templateUrl: './video-convert.component.html',
  styleUrls: ['./video-convert.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class VideoConvertComponent {
  uploadForm: FormGroup;
  selectedFile: File | null = null;
  downloadUrl: string | null = null;

  constructor(
    private fb: FormBuilder,
    private videoConversionService: VideoConversionService,
    private loaderService: LoaderService
  ) {
    this.uploadForm = this.fb.group({});
  }

  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.selectedFile = input.files[0];
    }
  }

  onUpload() {
    if (!this.selectedFile) return;

    this.loaderService.showLoader();

    this.videoConversionService.convertToGif(this.selectedFile).subscribe(
      response => {
        this.downloadUrl = URL.createObjectURL(response);
        this.loaderService.hideLoader();
      },
      error => {
        console.error('Error converting video', error);
        this.loaderService.hideLoader();
      }
    );
  }
}
