// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type Property = {
    address: string
    image: string
    desc: string
}

export type Landing = {
    title: string
    desc: string
    slug: string
}

export type Body = {
    type: string 
    text: string
}