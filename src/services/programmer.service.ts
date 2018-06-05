import { Programmer } from '../models/programmer.model';

export class ProgrammerService {
    public programmers = new Array<Programmer>();


    public addProgrammer(programmer: Programmer) {
        this.programmers.push(programmer);
    }
}
