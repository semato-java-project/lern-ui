// --- GET ---
export const GET_COURSES = {
    path: 'course',
    itemType: 'courses',
};

export const GET_GROUPS = {
    path: 'group',
    itemType: 'groups',
};

export const GET_COURSE_DETAILS = course_id => ({
    path: `course/${course_id}`,
    itemType: 'courseDetails',
});

export const GET_NEWS = {
    path: 'news',
    itemType: 'news',
};

export const GET_PUBLICATIONS = {
    path: 'publication',
    itemType: 'publications',
};

export const GET_PROJECT_GROUPS = course_id => ({
    path: `course/${course_id}/project-group`,
    itemType: 'projectGroups',
});

// --- POST ---
export const ADD_COURSE = {
    path: 'course',
};

export const ADD_NEWS = {
    path: 'news',
};

export const ADD_PUBLICATION = {
    path: 'publication',
};

export const ADD_PROJECT_GROUP = course_id => ({
    path: `course/${course_id}/project-group`,
});


// --- PUT ---
export const EDIT_GRADE = grade_id => ({
    path: `grade/${grade_id}`,
});

export const EDIT_PROJECT_GROUP = group_id => ({
    path: `project-group/${group_id}`,
});

