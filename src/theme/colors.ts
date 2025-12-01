export const colors = {
    white: '#ffffff',
    black: '#000000',

    neutral: {
        30: '#76777A',
        60: '#DBDCDF',
        80: '#EEF0F5',
    },

    primary: {
        40: '#3B5AAE',
        60: '#254699',
    },

    red: '#FF3B30',
} as const;

export type Colors = typeof colors;
