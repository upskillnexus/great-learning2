import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    university: [
        {
            id: 1,
            img: 'https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/page-banners/home/univ-logos/mit-idss.png',
            title: 'this is just a testing text'
        },
        {
            id: 2,
            img: 'https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/page-banners/home/univ-logos/iit-roorkee.png',
            title: 'this is just a testing text'
        },
        {
            id: 3,
            img: 'https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/page-banners/home/univ-logos/arizona-university.png',
            title: 'this is just a testing text'
        },
        {
            id: 4,
            img: 'https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/page-banners/home/univ-logos/nus.png',
            title: 'this is just a testing text'
        },
        {
            id: 5,
            img: 'https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/page-banners/home/univ-logos/texas-austin.png',
            title: 'this is just a testing text'
        },
        {
            id: 6,
            img: 'https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/page-banners/home/univ-logos/great-lakes.png',
            title: 'this is just a testing text'
        },
        {
            id: 7,
            img: 'https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/page-banners/home/univ-logos/northwestern.png',
            title: 'this is just a testing text'
        },
        {
            id: 8,
            img: 'https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/page-banners/home/univ-logos/stanford-business.png',
            title: 'this is just a testing text'
        },
    ],
}

const universitiesSlice = createSlice({
    name: 'universities',
    initialState,
    reducers: {
        AddUni: {}
    }
})


export const { AddUni } = universitiesSlice.actions
export default universitiesSlice.reducer