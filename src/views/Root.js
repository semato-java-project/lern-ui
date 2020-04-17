import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";
import {routes} from "../routes";
import DashboardTeacher from "./Teacher/DashboardTeacher";
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import configureStore from "../store/configureStore";
import HomePage from "./HomePage";
import CoursesTeacher from "./Teacher/CoursesTeacher";
import AddCourse from "./Teacher/AddCourse";
import TeacherCourseDetails from "./Teacher/TeacherCourseDetails";

const {store,persistor} = configureStore();

const Root = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
    <MainTemplate>
        <BrowserRouter>
            <Switch>
                <Route exact path={routes.HOME} component={HomePage}/>
                <Route exact path={routes.TEACHER_DASHBOARD} component={DashboardTeacher}/>
                <Route exact path={routes.TEACHER_COURSES} component={CoursesTeacher}/>
                <Route exact path={routes.TEACHER_COURSE_DETAILS} component={TeacherCourseDetails}/>
                <Route exact path={routes.TEACHER_ADD_COURSE} component={AddCourse}/>
            </Switch>
        </BrowserRouter>
    </MainTemplate>
        </PersistGate>
    </Provider>
);

export default Root;
