import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserDataService } from 'src/app/user-data.service';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import { ProfilCard } from 'src/app/interface/profil-card';


@Component({
  selector: 'app-random-user-carussel',
  templateUrl: './random-user-carussel.component.html',
  styleUrls: ['./random-user-carussel.component.scss'],
})
export class RandomUserCarusselComponent implements OnInit {
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;

  profiles: ProfilCard[] = [];
  slider?: KeenSliderInstance;

  currentSlideIndex = 0;

  constructor(private userDataService: UserDataService) {}

  ngOnInit(): void {
    this.userDataService.getRandomUser().subscribe((data) => {
      this.profiles = data.results;
    });
  }

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      breakpoints: {
        '(min-width: 400px)': {
          slides: { perView: 2, spacing: 5 },
        },
        '(min-width: 1000px)': {
          slides: { perView: 3, spacing: 10 },
        },
      },
      slides: { perView: 1 },
    });

  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }
}
