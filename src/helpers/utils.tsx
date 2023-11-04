
export default class utils {

    public static DateFormated(date: Date) {
        const period = {
            day: date.getDate().toString().padStart(2, '0'),
            month: date.getMonth().toString().padStart(2, '0'),
            year: date.getFullYear().toString().padStart(2, '0'),
            hours: date.getHours().toString().padStart(2, '0'),
            minutes: date.getMinutes().toString().padStart(2, '0'),
            seconds: date.getSeconds().toString()
        };
        return `${period.day}/${period.month}/${period.year} ${period.hours}h${period.minutes}m`;
    }

    public static generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0,
                v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }

}