import { current } from '@reduxjs/toolkit';

const { createSlice } = require('@reduxjs/toolkit');

const announcements = createSlice({
  name: 'announcements',
  initialState: {
    announcements: [
      {
        id: 0, title: 'dog', description: 'dog eat apple', dateAdded: '21.10.1120',
      },
      {
        id: 1,
        title: 'dog play in forest ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. s eu purus dapibus condimentum in nec turpis. Pellentesque dictum id.',
        dateAdded: '21.10.1120',
      },
      {
        id: 2, title: 'dog gav gav', description: 'dog eat apple', dateAdded: '21.10.1120',
      },
      {
        id: 3, title: 'ogston raw asas', description: 'og eat apple', dateAdded: '21.10.1120',
      },
      {
        id: 4, title: 'cat', description: 'cat eat meat', dateAdded: '11.1.2020',
      },
      {
        id: 5, title: 'monkey', description: 'monkey code javascript', dateAdded: '11.5.2021',
      },
      {
        id: 6, title: 'dxgcfgvjhbkjnl', description: 'jnkm;;mmk; mk', dateAdded: '11.5.2021',
      },
      {
        id: 7, title: 'map is a function', description: 'map is array based function', dateAdded: '11.5.2021',
      },
    ],
    announcement: [],
    filtered: [],
    isFiltered: false,
    similar: [],
  },
  reducers: {
    addAnnouncement: (state, action) => {
      state.announcements = [...state.announcements, action.payload];
    },
    deleteAnnouncement: (state, action) => {
      state.announcements = state.announcements.filter((announcement) => announcement.id !== action.payload.id);
    },
    editAnnouncement: (state, action) => {
      const { id } = action.payload;
      // console.log('announcements', JSON.stringify((state.announcements), null, 2));
      // console.log('curent-announcements', current(state.announcements));
      const announcements = current(state.announcements);
      state.announcements = announcements.map((announcement) => (announcement.id === id ? action.payload : announcement));
    },
    getAnnouncementById: (state, action) => {
      const id = action.payload;
      state.single = state.announcements.find((announcement) => announcement.id === id);
    },
    filterAnnouncement: (state, action) => {
      const inputValue = action.payload;
      const result = current(state.announcements);
      if (inputValue) {
        state.filtered = result.filter((announcement) => announcement.title.include(inputValue));
        state.isFiltered = true;
      } else {
        state.isFiltered = false;
        state.filtered = state.announcements;
      }
    },
    similarAnnouncement: (state, action) => {
      const { title, id } = action.payload;
      const similarLetter = title.charAt(0);
      const filteredSame = state.announcements.filter((announcement) => announcement.id !== id);
      const filteredByTitle = filteredSame.filter((announcement) => announcement.title.search(similarLetter) !== -1 && announcement.description.search(similarLetter) !== -1);
      state.announcement = filteredByTitle.slice(0, 3);
    },
  },
});
export default announcements.reducer;

export const {
  addAnnouncement,
  deleteAnnouncement,
  editAnnouncement,
  getAnnouncementById,
  filterAnnouncement,
  similarAnnouncement,
} = announcements.actions;
