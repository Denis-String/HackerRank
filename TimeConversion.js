function timeConversion(s) {
    const hour = s.split(':')[0];
    let militaryHour;

    if (s.includes('AM')) {
        s = s.replace('AM', '');
        militaryHour = hour === '12' ? '00' : hour;
    } else {
        s = s.replace('PM', '');
        militaryHour = hour === '12' ? hour : Number(hour) + 12;
    }
    s = s.replace(hour, militaryHour);
    return s;
}
timeConversion('15:01:00AM');