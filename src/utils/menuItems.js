import {routes} from "../routes";

// --- DEFAULT ---
import dashboard_icon from '../assets/MenuIcons/dashboard-icon.svg'
import courses_icon from '../assets/MenuIcons/courses-icon.svg'
import add_course_icon from '../assets/MenuIcons/add-course-icon.svg'
import news_icon from '../assets/MenuIcons/news-icon.svg'
import publications_icon from '../assets/MenuIcons/publications-icon.svg'
// --- ACTIVE ---
import dashboard_icon_active from '../assets/MenuIcons/dashboard-icon-active.svg'
import courses_icon_active from '../assets/MenuIcons/courses-icon-active.svg'
import add_course_icon_active from '../assets/MenuIcons/add-course-icon-active.svg'
import news_icon_active from '../assets/MenuIcons/news-icon-active.svg'
import publications_icon_active from '../assets/MenuIcons/publications-icon-active.svg'

export const MENU_ITEMS = {

    TEACHER_ITEMS: [
        {
            option: 'Dashboard',
            route: routes.TEACHER_DASHBOARD,
            icon: dashboard_icon,
            icon_active: dashboard_icon_active
        },
        {
            option: 'Twoje kursy',
            route: routes.TEACHER_COURSES,
            icon: courses_icon,
            icon_active: courses_icon_active
        },
        {
            option: 'Dodaj kurs',
            route: routes.TEACHER_ADD_COURSE,
            icon: add_course_icon,
            icon_active: add_course_icon_active
        },
        {
            option: 'Aktualności',
            route: routes.TEACHER_NEWS,
            icon: news_icon,
            icon_active: news_icon_active
        },
        {
            option: 'Publikacje',
            route: routes.TEACHER_PUBLICATIONS,
            icon: publications_icon,
            icon_active: publications_icon_active,
        }
    ]
};