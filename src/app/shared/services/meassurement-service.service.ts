import { Injectable } from '@angular/core';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Meassure } from 'src/app/shared/models/Meassure';

@Injectable({
  providedIn: 'root'
})
export class MeassurementServiceService {

  collectionName :string =  "Meassure";

  constructor(private afs: AngularFirestore) { }

  create(measure: Meassure) {
    return this.afs.collection<Meassure>(this.collectionName).add(measure);
  }
  
  getAll(): Observable<Meassure[]> {
    return this.afs.collection<Meassure>(this.collectionName).valueChanges();
  }
  
  /*
  update(measure: Meassure) {
    return this.afs.collection<Meassure>(this.collectionName).doc(measure.id).update(measure);
  }
  
  delete(measure: Meassure) {
    return this.afs.collection<Meassure>(this.collectionName).doc(measure.id).delete();
  }
*/
}
