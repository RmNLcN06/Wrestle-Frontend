import { Component, OnInit } from '@angular/core';
import { ContinentService } from '../continent.service';
import { Continent } from '../continent';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-continent-form',
  imports: [],
  templateUrl: './continent-form.component.html',
  styleUrl: './continent-form.component.scss'
})
export class ContinentFormComponent {
  continent: Continent = { id: 0, name: ''};
  isEditMode: boolean = false;

  constructor(private continentService: ContinentService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.isEditMode = true;
      this.continentService.getContinentById(+id).subscribe({
        next: (data) => (this.continent = data),
        error: (err) => console.error('Error fetching continent: ', err),
      });
    }
  }

  saveContinent(): void {
    if(this.isEditMode) {
      this.continentService.updateContinent(this.continent.id!, this.continent).subscribe({
        next: () => {
          alert('Continent updated successfully !');
          this.router.navigate(['/']);
        },
        error: (err) => console.error('Error updating continent: ', err),
      });
    } else {
      this.continentService.createContinent(this.continent).subscribe({
        next: () => {
          alert('Continent created successfully !');
          this.router.navigate(['/']);
        },
        error: (err) => console.error('Error creating continent: ', err),
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}
