import { IsEnum, IsDateString, IsObject, MinDate } from "class-validator";
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
    end_date: string;
    @IsEnum(EnergySource, {
        message: 'Fonte de energia inválida.'
    })
    energy_source: EnergySource;
    @IsEnum(Submarket, {
        message: 'Submercado inválido.'
    })
    submarket: Submarket;
    hired: boolean;
    proposal_value: number;
}