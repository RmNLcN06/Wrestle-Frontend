import { Component, OnInit } from '@angular/core';
import { ContinentService} from '../continent.service';
import { Continent } from '../continent';
import { Router } from '@angular/router';

@Component({
  selector: 'app-continent-list',
  imports: [],
  templateUrl: './continent-list.component.html',
  styleUrl: './continent-list.component.scss'
})
export class ContinentListComponent implements OnInit {

  continents: Continent[] = [];

  constructor(private continentService: ContinentService, private router: Router) {}

  ngOnInit(): void {
      this.loadContinents();
  }

  loadContinents(): void {
    this.continentService.getContinents().subscribe({
      next: (data) => (this.continents = data),
      error: (err) => console.error('Error loading continents: ', err),
    });
  }

  addContinent(): void {
    this.router.navigate(['/add']);
  }

  editContinent(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  deleteContinent(id: number): void {
    if(confirm('Are you sure you want to delete this continent ?')) {
      this.continentService.deleteContinent(id).subscribe({
        next: () => {
          alert('Continent deleted successfully !');
          this.loadContinents();
        },
        error: (err) => console.error('Error deleting continent: ', err),
      });
    }
  }
}
