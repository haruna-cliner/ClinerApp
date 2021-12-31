import {DateTime} from 'luxon';

const zone = 'utc';

export const getNow = () => {
    return DateTime.now().setZone(zone).plus({hours: 3});
};

export const fromSql = (sql) => {
    return DateTime.fromSQL(sql).setZone(zone).plus({hours: 3});
};