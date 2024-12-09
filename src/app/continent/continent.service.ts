import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Continent } from './continent';

@Injectable({
  providedIn: 'root'
})
export class ContinentService {

  private apiUrl = 'http://localhost:8080/api/continents';

  constructor(private http: HttpClient) { }

  /**
   * GET a list of continents from the database
   * @returns List of continents
   */
  getContinents(): Observable<Continent[]> {
    return this.http.get<Continent[]>(this.apiUrl);
  }

  /**
   * GET a continent by its ID from the database
   * @param id ID of the continent
   * @returns Continent by its ID
   */
  getContinentById(id: number): Observable<Continent> {
    return this.http.get<Continent>(`${this.apiUrl}/${id}`);
  }

  /**
   * CREATE a new continent into the database
   * @param continent Continent to create
   * @returns New continent
   */
  createContinent(continent: Continent): Observable<Continent> {
    return this.http.post<Continent>(this.apiUrl, continent);
  }

  /**
   * UPDATE datas from an existing continent from the database
   * @param id ID of the continent to update
   * @param continent Continent to update
   * @returns Continent updated
   */
  updateContinent(id: number, continent: Continent): Observable<Continent> {
    return this.http.put<Continent>(`${this.apiUrl}/${id}`, continent);
  }

  /**
   * DELETE an existing continent from the database
   * @param id ID of the continent to delete
   * @returns Continent deleted
   */
  deleteContinent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
