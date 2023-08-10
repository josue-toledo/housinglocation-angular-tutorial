import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})

export class HousingService {
  
  constructor() { }

  url = 'assets/db.json';

  async getAllHousingLocation(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);

    return (await data.json()).locations ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(this.url)
    
    return (await data.json()).locations.find((house: { id: number; }) => house.id === id) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName ${firstName}, lastName: ${lastName}, email: ${email}`)
  }
}
