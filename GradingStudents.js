function gradingStudents(grades) {
    const value = getNextMultiplos({ value: 73, multiplo: 5});
    console.log('Proximo valor que é multiplo', value);
}

function getNextMultiplos({ value, multiplo}) {
    let nextNumber = value + 1;
        if (nextNumber % multiplo) {
            return getNextMultiplos({ value: nextNumber, multiplo});
        } else {
            console.log('Estou retornando', nextNumber)
            return nextNumber;
        }
}

gradingStudents()