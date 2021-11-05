export const getCurrentAge = (date: number, month: number, fullYear: number): number => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() - fullYear;
    if (date < currentDate.getDate() && month < (currentDate.getMonth() + 1)) {
        return currentYear - 1
    }
    return currentYear;
} 