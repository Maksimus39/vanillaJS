type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechnologiesType[]
}
type AddressType = {
    streetTitle: string
    city: CityTypeLocal
}
type CityTypeLocal = {
    title: string
    counterTitle: string
}
type TechnologiesType = {
    id: number
    title: string
}

const user: StudentType = {
    id: 1,
    name: 'Max',
    age: 40,
    isActive: true,
    address: {
        streetTitle: 'Narodnay stroyka',
        city: {
            title: 'Gryzi',
            counterTitle: 'Russia'
        }
    },
    technologies: [
        {id: 1, title: 'HTML'},
        {id: 2, title: 'CSS'},
        {id: 3, title: 'JS'},
        {id: 4, title: 'REACT'}
    ]
}


