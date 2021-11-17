const notes = [
    {
        id: 1,
        subject: "HTML",
        date: "11/11/21",
        feeling: "Good",
        timeSpent: 5,
    },
    {
        id: 2,
        subject: "CSS",
        date: "11/15/21",
        feeling: "Apathetic",
        timeSpent: 4, 
    },
    {
        id: 3,
        subject: "Javascript",
        date: "11/16/21",
        feeling: "Fearful",
        timeSpent: 6, 
    }
]

console.log(notes)

const todaysNote = {
    id: 4,
    subject: "More Javascript",
    date: "11/17/21",
    feeling: "OK",
    timeSpent: 2, 
}

notes.push(todaysNote)

console.log(notes)

for (const note of notes) {
    console.log(note.subject)
}