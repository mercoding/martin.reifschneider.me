import { Component } from '@angular/core';
import { StartTopComponent } from './start-top/start-top.component';
import { StartCenterComponent } from './start-center/start-center.component';
import { StartBottomComponent } from './start-bottom/start-bottom.component';
import { AboutComponent } from '../pages/about/about.component';
import { SkillsComponent } from '../pages/skills/skills.component';
import { PortfolioComponent } from '../pages/portfolio/portfolio.component';
import { FeedbackCarouselComponent } from '../pages/feedback-carousel/feedback-carousel.component';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [StartTopComponent, StartCenterComponent, StartBottomComponent, AboutComponent, SkillsComponent, PortfolioComponent, FeedbackCarouselComponent],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {

}
