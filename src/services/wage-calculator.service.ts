import { Programmer} from '../models/programmer.model';

const MISSING_DAYS_DISCOUNT = 0.5;
const PRODUCTIVITY_BONUS = 1.10;

export class WageCalculatorService {
    private salaries = {
        1: 1500, // Junior
        2: 3000, // Mid
        3: 5000  // Senior
    };

    public calculateSalary(programmer: Programmer): number {
        return this.salaries[programmer.tier]
            * this.calculateMissingDaysFactor(programmer.missingDays)
            * this.calculateBonusFactor(programmer.goalsCompleted);
    }

    /**
     * Given the number of missing days a programmer has and applying the discount for each missing day
     * defined in the constant return the % of the payout this programmer will have
     *
     * @param missingDays
     */
    protected calculateMissingDaysFactor(missingDays: number): number {
        return 1 - ((missingDays * MISSING_DAYS_DISCOUNT ) / 10);
    }


    protected calculateBonusFactor(goalsReached: Boolean): number {
        return (goalsReached) ? PRODUCTIVITY_BONUS : 1;
    }
}
