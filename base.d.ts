
type sex = 'boy' | 'gril'

declare interface IOpt  {
    people: {
        readonly id: number
        sex?: sex
    }
}