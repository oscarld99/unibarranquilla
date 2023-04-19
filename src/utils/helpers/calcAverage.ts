/* eslint-disable prettier/prettier */
import { ICourt } from "@interfaces/data/grades.interface"
import { PeriodsModule } from "@interfaces/data/oldGrades.interface"

/**
 * calcAverage helper for calculate the average of the grades
 * @function calcAverage
 * @param {ICourt []} courts
 * @description we reduce the value of all courts in module to sum it into one value
 */

export const calcAverage = (courts: ICourt[]): string => {
    if (!courts || courts.length === 0) return '0'
    return (courts.reduce((value, court) => value + court.grade, 0) / courts.length).toFixed(1)
}

export const calcModuleAverage = (modules: PeriodsModule[]): string => {
    if (!modules || modules.length === 0) return '0'
    return (modules.reduce((value, module) => value + module.grade, 0) / modules.length).toFixed(1)
}
