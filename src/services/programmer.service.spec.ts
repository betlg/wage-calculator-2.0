import { ProgrammerService } from './programmer.service';
import { Programmer } from '../models/programmer.model';

describe('Programmer Service', () => {
    it('should be capable of adding new programmers', () => {
        const service = new ProgrammerService();
        service.addProgrammer(new Programmer('Pitty'));
        expect(service.programmers.length).toEqual(1);
    });

    it('should list added programmers', () => {
        // Arrange
        const service = new ProgrammerService();
        const expectedProgrammer = new Programmer('mark');

        // Act
        service.addProgrammer(expectedProgrammer);

        // Assert
        expect(service.programmers[0]).toBe(expectedProgrammer);
    });
});
