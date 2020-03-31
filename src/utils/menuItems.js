import {routes} from "../routes";

export const MENU_ITEMS = {

    TEACHER_ITEMS: [
        {
            option: 'Dashboard',
            route: routes.TEACHER_DASHBOARD,
            // icon: TODO: add icon
            // icon_active: TODO: add active_icon
        },
        {
            option: 'Twoje kursy',
            route: routes.TEACHER_COURSES,
            // icon: TODO: add icon
            // icon_active: TODO: add active_icon
        },
        {
            option: 'Dodaj kurs',
            route: routes.TEACHER_ADD_COURSE,
            // icon: TODO: add icon
            // icon_active: TODO: add active_icon
        },
        {
            option: 'Aktualności',
            route: routes.TEACHER_NEWS,
            // icon: TODO: add icon
            // icon_active: TODO: add active_icon
        },
        {
            option: 'Publikacje',
            route: routes.TEACHER_PUBLICATIONS,
            // icon: TODO: add icon
            // icon_active: TODO: add active_icon
        }
    ]
};