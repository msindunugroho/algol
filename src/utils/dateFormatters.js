    // set base day
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const lastWeek = new Date(today);
    lastWeek.setDate(lastWeek.getDate() - 7);

    // date today
    const currentYear = today.getFullYear();
    const currentMonth = String(today.getMonth() + 1).padStart(2, '0');
    const currentDay = String(today.getDate()).padStart(2, '0');
    export const formattedCurrentDate = `${currentYear}-${currentMonth}-${currentDay}`;

    // date yesterday
    const yesterdayYear = yesterday.getFullYear();
    const yesterdayMonth = String(yesterday.getMonth() + 1).padStart(2, "0");
    const yesterdayDay = String(yesterday.getDate()).padStart(2, "0");
    export const formattedYesterdayDate = `${yesterdayYear}-${yesterdayMonth}-${yesterdayDay}`;

    // last week date
    const lastweekYear = lastWeek.getFullYear();
    const lastweekMonth = String(lastWeek.getMonth() + 1).padStart(2, "0");
    const lastweekDay = String(lastWeek.getDate()).padStart(2, "0");
    export const formattedLastweekDate = `${lastweekYear}-${lastweekMonth}-${lastweekDay}`;
