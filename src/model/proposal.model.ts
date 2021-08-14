import { IsEnum, IsDateString } from "class-validator";
import { IsEndDateNotGreaterThanStartDate } from "src/validators/is-end-date-not-greater-than-start-date.validator";
import { EnergySource } from "./energySource.enum";
import { Submarket } from "./submarket.enum";

export class Proposal {
    id: number;
    public_id: string;
    @IsDateString({}, {
        message: 'Data de inicio inválida.'
    })
    start_date: string;

    @IsDateString({}, {
        message: 'Data de termino inválida.'
    })
    @IsEndDateNotGreaterThanStartDate({
        message: 'A data de termino do contrato tem que ser maior que a de inicio.'
    })
    end_date: string;

    @IsEnum(EnergySource, {
        message: 'Fonte de energia inválida.'
    })
    energy_source: EnergySource;

    @IsEnum(Submarket, {
        message: 'Submercado inválido.'
    })
    submarket: Submarket;

    hired: boolean = false;
    proposal_value: number;
}