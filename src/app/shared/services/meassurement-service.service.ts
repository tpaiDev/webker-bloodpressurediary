import { Injectable } from '@angular/core';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Meassure } from 'src/app/shared/models/Meassure';

@Injectable({
  providedIn: 'root'
})
export class MeassurementServiceService {

  collectionName :string =  "Meassure";
  modify :boolean = false;
  meassurementModify: Meassure = new Meassure;

  constructor(private afs: AngularFirestore) { }

  create(measure: Meassure) {
    measure.id = this.afs.createId();
    return this.afs.collection<Meassure>(this.collectionName).doc(measure.id).set(measure);
  }
  
  getAll(): Observable<Meassure[]> {
    return this.afs.collection<Meassure>(this.collectionName).valueChanges();
  }

  update(measure: Meassure) {
    return this.afs.collection<Meassure>(this.collectionName).doc(measure.id).update(measure);
  }
  
  delete(measure: Meassure) {
    return this.afs.collection<Meassure>(this.collectionName).doc(measure.id).delete();
  }


}
