import express, { Request, Response} from 'express'

// import { Cassette } from "./interfaces/cassette"
// import { User } from "./interfaces/user"
import { Event } from "./interfaces/event"

const PORT = process.env.PORT || 3000

const app = express()

// const users: User[] = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Jane' },
//     { id: 3, name: 'Jack' },
// ]

// const cassettes: Cassette[] = [
//     { id: 1, name: 'The Matrix' },
//     { id: 2, name: 'The Matrix Reloaded' },
//     { id: 3, name: 'The Matrix Revolutions' },
// ]

const events: Event[] = [
    { id: 1, type: 'watch', date: new Date('2021-03-02'), user: 2, cassette: 1 },
    { id: 2, type: 'loan', date: new Date('2021-04-01'), user: 1, cassette: 1 },
    { id: 3, type: 'loan', date: new Date('2021-05-01'), user: 2, cassette: 3 },
    { id: 4, type: 'watch', date: new Date('2021-06-06'), user: 3, cassette: 3 },
    { id: 5, type: 'loan', date: new Date('2021-07-16'), user: 1, cassette: 3 },
]

app.get('/cassette/:id/:event/:from/:to', (req: Request, res: Response) => {
    const { id, event, from, to }: {
        id: string
        event: Event['type']
        from: string
        to: string
    } = req.params as any


    const response = events.filter(item => {
        return item.cassette === parseInt(id) && item.type === event && item.date >= new Date(from) && item.date <= new Date(to)
    })


    if (response.length !== 0) {
        res.json(response)
        return
    }
    else {
        res.status(404).send([])
        return
    }
})

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
})