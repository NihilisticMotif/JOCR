export function uGetOnlyNumber(input: string): number | null {
    const match = input.match(/\((\d+)\)/);
    if (match) {
        const number = parseInt(match[1], 10);
        return isNaN(number) ? null : number;
    }
    return null;
}