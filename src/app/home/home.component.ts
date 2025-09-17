import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StartComponent } from '../pages/start/start.component';
import { AboutComponent } from '../pages/about/about.component';
import { SkillsComponent } from '../pages/skills/skills.component';
import { PortfolioComponent } from '../pages/portfolio/portfolio.component';
import { FeedbackCarouselComponent } from '../pages/feedback-carousel/feedback-carousel.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, 
    StartComponent, 
    AboutComponent, 
    SkillsComponent, 
    PortfolioComponent, 
    FeedbackCarouselComponent, 
    ContactComponent, 
    FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
