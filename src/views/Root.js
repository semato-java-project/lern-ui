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
import PrivateRoute from "../routes/PrivateRoute";
import News from "./Teacher/News";
import Publications from "./Teacher/Publications";

const {store,persistor} = configureStore();

const Root = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
    <MainTemplate>
        <BrowserRouter>
            <Switch>
                <Route exact path={routes.HOME} component={HomePage}/>
                <PrivateRoute exact path={routes.TEACHER_DASHBOARD} component={DashboardTeacher}/>
                <PrivateRoute exact path={routes.TEACHER_COURSES} component={CoursesTeacher}/>
                <PrivateRoute exact path={routes.TEACHER_COURSE_DETAILS} component={TeacherCourseDetails}/>
                <PrivateRoute exact path={routes.TEACHER_ADD_COURSE} component={AddCourse}/>
                <PrivateRoute exact path={routes.TEACHER_NEWS} component={News}/>
                <PrivateRoute exact path={routes.TEACHER_PUBLICATIONS} component={Publications}/>
            </Switch>
        </BrowserRouter>
    </MainTemplate>
        </PersistGate>
    </Provider>
);

export default Root;
