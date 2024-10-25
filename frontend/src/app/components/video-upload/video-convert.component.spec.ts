import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoConvertComponent } from './video-convert.component';

describe('VideoUploadComponent', () => {
  let component: VideoConvertComponent;
  let fixture: ComponentFixture<VideoConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoConvertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
