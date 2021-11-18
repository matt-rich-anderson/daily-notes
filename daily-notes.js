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

for (const note of notes) {
    console.log(`On ${note.date} I spent ${note.timeSpent}hr/s studying ${note.subject} and I felt ${note.feeling} about it.`)
}

const searchTerm = "Apathetic"

for (const note of notes) {
    if (note.feeling === searchTerm) {
        console.log (`When you were studying ${note.subject}, you were feeling ${note.feeling}`)
    }
}


const latestNote = {
    subject: "More Javascript",
    date: "11/17/21",
    feeling: "Weird",
    timeSpent: 2, 
}

const createNote = (noteObject) => {
    //I need to ge the length of the array to determine the index
    const lastIndex = notes.length - 1
    //once I have the index, I can determine what the last object is and what it's id is
    const mostRecentId = notes[lastIndex].id
    console.log(mostRecentId)
    //once i have the latest note's id, I can increase it by 1 and then push the note into the arrary
    noteObject.id = mostRecentId + 1
    notes.push(noteObject)
} 

createNote(latestNote)

for (const note of notes) {
    console.log(note.id)
}