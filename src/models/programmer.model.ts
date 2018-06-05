
// Constants required
const MISSING_DAYS_DISCOUNT = 0.5;
const PRODUCTIVITY_BONUS = 1.10;

/**
 * Programmer DTO (Data Transfer Object)
 */
export abstract class Programmer {
    public name: String;
    protected _missingDays: number;
    protected _goalsCompleted: boolean;

    protected abstract get baseWage(): number;

    public get wage(): number {
        return this.baseWage
            * this.calculateMissingDaysFactor()
            * this.calculateBonusFactor();
    }

     /**
     * Given the number of missing days a programmer has and applying the discount for each missing day
     * defined in the constant return the % of the payout this programmer will have
     *
     */
    protected calculateMissingDaysFactor(): number {
        return 1 - ((this.missingDays * MISSING_DAYS_DISCOUNT ) / 10);
    }

    protected calculateBonusFactor(): number {
        return (this.goalsCompleted) ? PRODUCTIVITY_BONUS : 1;
    }

    constructor(name: String) {
        this.name = name;
        this._goalsCompleted = false;
        this._missingDays = 0;
    }

    public set missingDays(days: number) {
        this._missingDays = days;
    }

    public get missingDays(): number {
        return this._missingDays;
    }

    public set goalsCompleted(completed: boolean) {
        this._goalsCompleted = completed;
    }

    public get goalsCompleted(): boolean {
        return this._goalsCompleted;
    }
}

export class SeniorProgrammer extends Programmer {
    public get baseWage(): number {
        return 5000;
    }
}

export class MidProgrammer extends Programmer {
    public get baseWage(): number {
        return 3000;
    }
}

export class JuniorProgrammer extends Programmer {
    public get baseWage(): number {
        return 1500;
    }
}
