import { SeniorProgrammer, MidProgrammer, JuniorProgrammer } from './programmer.model';

describe('Programmer model', () => {
    it('should calculate correct salary for a senior developer', () => {
        const programmer = new SeniorProgrammer('John Wick');
        const expectedWage = 5000;

        expect(programmer.wage).toEqual(expectedWage);
    });

    it('should calculate correct salary of a mid developer', () => {
        const programmer = new MidProgrammer('Pitty');
        const expectedWage = 3000;

        expect(programmer.wage).toEqual(expectedWage);
    });

    it('should calculate correct salary of a junior developer', () => {
        const programmer = new JuniorProgrammer('Mark');
        const expectedWage = 1500;

        expect(programmer.wage).toEqual(expectedWage);
    });

    it('should take in consideration missing days at work', () => {
        const programmer = new JuniorProgrammer('Mark');
        programmer.missingDays = 1;
        const expectedWage = 1500 * 0.95;

        expect(programmer.wage).toEqual(expectedWage);
    });

    it('should take in consideration bonus for productivity', () => {
        const programmer = new SeniorProgrammer('John Wick');
        programmer.goalsCompleted = true;
        const expectedWage = 5000 * 1.10;

        expect(programmer.wage).toEqual(expectedWage);
    });
});
