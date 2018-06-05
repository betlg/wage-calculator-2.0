export enum ProgrammerTier {
    Junior = 1,
    Mid,
    Senior
}

/**
 * Programmer DTO (Data Transfer Object)
 */
export class Programmer {
    public name: String;
    public tier: ProgrammerTier;
    public missingDays: number;
    public goalsCompleted: Boolean;

    constructor(name: String,
        tier: ProgrammerTier = ProgrammerTier.Junior,
        missingDays: number = 0,
        goalsCompleted: Boolean = false
    ) {
        this.name = name;
        this.tier = tier;
        this.missingDays = missingDays;
        this.goalsCompleted = goalsCompleted;
    }
}
