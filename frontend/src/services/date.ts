export function sameDay(d1?: Date, d2?: Date): boolean {
    return d1 !== undefined && d2 !== undefined
        && d1.getFullYear() === d2.getFullYear()
        && d1.getMonth() === d2.getMonth()
        && d1.getDate() === d2.getDate();
}


export function before(d1?: Date, d2?: Date): boolean {
    return d1 !== undefined && d2 !== undefined
        && ( d1.getFullYear() < d2.getFullYear()
        || d1.getMonth() < d2.getMonth()
        || d1.getDate() < d2.getDate());
}

export function addDays(date: Date, days: number): Date {
    return new Date(date.getTime() + 86400000 * days);
}
