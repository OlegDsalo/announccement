import {current} from "@reduxjs/toolkit";

const {createSlice} = require("@reduxjs/toolkit");

const announcements = createSlice({
    name: 'announcements',
    initialState: {
        announcements: [
            {id: 0, title: 'dog', description: 'dog eat apple', dateAdded: '21.10.1120'},
            {
                id: 1,
                title: 'dog play in forest ',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. s eu purus dapibus condimentum in nec turpis. Pellentesque dictum id.',
                dateAdded: '21.10.1120'
            },
            {id: 2, title: 'dog gav gav', description: 'dog eat apple', dateAdded: '21.10.1120'},
            {id: 3, title: 'ogston raw asas', description: 'og eat apple', dateAdded: '21.10.1120'},
            {id: 4, title: 'cat', description: 'cat eat meat', dateAdded: '11.1.2020'},
            {id: 5, title: 'monkey', description: 'monkey code javascript', dateAdded: '11.5.2021'},
            {id: 6, title: 'dxgcfgvjhbkjnl', description: 'jnkm;;mmk; mk', dateAdded: '11.5.2021'},
            {id: 7, title: 'map is a function', description: 'map is array based function', dateAdded: '11.5.2021'},
        ],
        single: [],
        filtered: [],
        isFiltered: false,
        similar: []
    },
    reducers: {
        addAnnouncement: (state, action) => {
            state.announcements = [...state.announcements, action.payload];
        },
        deleteAnnouncement: (state, action) => {
            state.announcements = state.announcements.filter(announcement => announcement.id !== action.payload.id);
        },
        editAnnouncement: (state, action) => {
            const {id} = action.payload;
            // console.log('announcements', JSON.stringify((state.announcements), null, 2));
            console.log('curent-announcements', current(state.announcements));
            const announcements = current(state.announcements);
            state.announcements = announcements.map(announcement => announcement.id === id ? action.payload : announcement);
        },
        singleAnnouncement: (state, action) => {
            const id = action.payload;
            console.log('slice', id);
            state.single = state.announcements.find(announcement => announcement.id === id);
        },
        filterAnnouncement: (state, action) => {
            const inputValue = action.payload
            const result = current(state.announcements);
            if (inputValue) {
                state.filtered = result.filter((announcement) => {
                    state.isFiltered = true;
                    return announcement.title.search(inputValue) !== -1;
                });
            } else {
                state.isFiltered = false;
                state.filtered = state.announcements;
            }

        },
        similarAnnouncement: (state, action) => {
            let {title, id} = action.payload;
            // console.log('similar-action',action.payload)

            let similarLetter = title.charAt(0);
            // console.log('similarLetter', similarLetter);

            const filteredSame = state.announcements.filter(announcement => announcement.id !== id)

            const filteredByTitle = filteredSame.filter(announcement => {
                return announcement.title.search(similarLetter) !== -1 && announcement.description.search(similarLetter) !== -1;
            })
            state.similar = filteredByTitle.slice(0,3);
        }

    }
})
export default announcements.reducer;

export const {
    addAnnouncement,
    deleteAnnouncement,
    editAnnouncement,
    singleAnnouncement,
    filterAnnouncement,
    similarAnnouncement,
} = announcements.actions;

export const announcementSelect = state => state.announcements.announcements;
export const singleSelect = state => state.announcements.single;
export const filteredSelect = state => state.announcements.filtered;
export const SelectIsFiltered = state => state.announcements.isFiltered;
export const SelectedSimilar = state => state.announcements.similar;

