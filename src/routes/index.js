export const routes = {

    PUBLIC: {
        HOME: '/',
    },
    ROLE_LECTURER: {
        DASHBOARD: '/teacher/dashboard',
        COURSES: '/teacher/courses',
        COURSE_DETAILS: '/teacher/courses/:id',
        ADD_COURSE: '/teacher/add/course',
        NEWS: '/news',
        PUBLICATIONS: '/publications',
    },
    ROLE_STUDENT: {
        COURSES: '/courses',
        COURSE_DETAILS: '/courses/:id',
        NEWS: '/news',
        PUBLICATIONS: '/publications',
    },
};