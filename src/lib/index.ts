// place files you want to import through the `$lib` alias in this folder.

// This the type of data that the AnimeProp object will return and these are the properties that are on the anime prop object
export type AnimeProp = {
    id: string
    name: string
    image: {
        original: string
    }
    kind: string
    episodes: string
    episodes_aired: string
    score: string
}