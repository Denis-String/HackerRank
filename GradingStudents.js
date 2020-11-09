function gradingStudents(grades) {
    const roundedGrades = [];
    grades.forEach(grade => {
        const gradeWithRole = applyRole({ grade });
        roundedGrades.push(gradeWithRole);
    });

    return roundedGrades;
}

function applyRole({ grade }) {
    if (grade < 38) return grade;
    else {
        const roundedGrade = getNextMultiplos({ value: grade, multiplo: 5})
        if (roundedGrade - grade > 3) return grade;
        else if (roundedGrade - grade < 3) return roundedGrade;
        else return grade;
    }
}

function getNextMultiplos({ value, multiplo}) {
    let nextNumber = value + 1;
        if (nextNumber % multiplo) {
            return getNextMultiplos({ value: nextNumber, multiplo});
        } else {
            return nextNumber;
        }
}

gradingStudents([73, 67, 38, 33]);