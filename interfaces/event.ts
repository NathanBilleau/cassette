import { User } from './user'
import { Cassette } from './cassette'

export interface Event {
    id: number
    type: 'watch' | 'loan' | 'return'
    date: Date
    user: User['id']
    cassette: Cassette['id']
}