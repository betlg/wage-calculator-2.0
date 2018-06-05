import { Programmer, ProgrammerTier } from '../models/programmer.model';
import { WageCalculatorService } from './wage-calculator.service';

describe('Wage calculator', () => {
    const engine = new WageCalculatorService();

    it('should calculate correct salary for a senior developer', () => {
        const expectedProgrammer = new Programmer('Pitty', ProgrammerTier.Senior);
        const expectedResult = 5000;

        const result = engine.calculateSalary(expectedProgrammer);

        expect(result).toBe(expectedResult);
    });

    it('should calculate correct salary of a mid developer', () => {
        const expectedProgrammer = new Programmer('John Wick', ProgrammerTier.Mid);
        const expectedResult = 3000;

        const result = engine.calculateSalary(expectedProgrammer);

        expect(result).toBe(expectedResult);
    });

    it('should calculate correct salary of a junior developer', () => {
        const expectedProgrammer = new Programmer('Mark', ProgrammerTier.Junior);
        const expectedResult = 1500;

        const result = engine.calculateSalary(expectedProgrammer);

        expect(result).toBe(expectedResult);
    });

    it('should take in consideration missing days at work', () => {
        const expectedProgrammer = new Programmer('Mark', ProgrammerTier.Junior, 1);
        const expectedResult = 1500 * 0.95;

        const result = engine.calculateSalary(expectedProgrammer);

        expect(result).toBe(expectedResult);
    });

    it('should take in consideration bonus for productivity', () => {
        const expectedProgrammer = new Programmer('John Wick', ProgrammerTier.Senior, 0, true);
        const expectedResult = 5000 * 1.10;

        const result = engine.calculateSalary(expectedProgrammer);

        expect(result).toBe(expectedResult);
    });
});
