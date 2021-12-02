import {createSelector} from 'reselect';

export const selectAnnouncement = (state) => state.announcements


export const SelectAllAnnouncementSelect = createSelector(//
    selectAnnouncement,
    (announcements) => announcements.announcements,
);


export const SelectSimilar = createSelector(//
    selectAnnouncement,
    (announcements) => announcements.similar,
);

export const SelectIsFiltered = createSelector(
    selectAnnouncement,
    (announcements) => announcements.isFiltered,
);
export const SelectFiltered = createSelector(
    selectAnnouncement,
    (announcements) => announcements.filtered,
);
export const SelectSingle = createSelector(
    selectAnnouncement,
    (announcements) => announcements.single,
);
