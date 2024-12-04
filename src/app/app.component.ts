import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from "./components/hero/hero.component";
import { PopularRecipesComponent } from "./components/popular-recipes/popular-recipes.component";
import { SeasonSpecialComponent } from "./components/season-special/season-special.component";
import { HowItWorksComponent } from "./components/how-it-works/how-it-works.component";
import { UniqueExperienceComponent } from "./components/unique-experience/unique-experience.component";
import { CallToActionComponent } from "./components/call-to-action/call-to-action.component";
import { FooterComponent } from "./components/footer/footer.component";
import AOS from 'aos';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent, PopularRecipesComponent, SeasonSpecialComponent, HowItWorksComponent, UniqueExperienceComponent, CallToActionComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Landing-Page';
  ngOnInit(): void {
    AOS.init({
      duration: 1200, // Duración de las animaciones en milisegundos
      once: true      // Si la animación debe ejecutarse solo una vez
    });
  }
}
