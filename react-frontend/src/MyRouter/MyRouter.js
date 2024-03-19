import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import NoMatch from './NoMatch';

import LoginPage from '../components/LoginPage/LoginPage';
import SignUpPage from '../components/LoginPage/SignUpPage';
import Account from '../components/Account/Account';
import Dashboard from '../components/Dashboard/Dashboard';
import WhatToDoPage from '../components/WhatTodo';

import UsersPage from "../components/UsersPage/UsersPage";
import SingleUsersPage from "../components/UsersPage/SingleUsersPage";
import HCMasterFormPage from "../components/HCMasterFormPage/HCMasterFormPage";
import SingleHCMasterFormPage from "../components/HCMasterFormPage/SingleHCMasterFormPage";
import HCMasterFormProjectLayoutPage from "../components/HCMasterFormPage/HCMasterFormProjectLayoutPage";
import CBMasterFormPage from "../components/CBMasterFormPage/CBMasterFormPage";
import SingleCBMasterFormPage from "../components/CBMasterFormPage/SingleCBMasterFormPage";
import CBMasterFormProjectLayoutPage from "../components/CBMasterFormPage/CBMasterFormProjectLayoutPage";
import HcStage1Page from "../components/HcStage1Page/HcStage1Page";
import SingleHcStage1Page from "../components/HcStage1Page/SingleHcStage1Page";
import HcStage1ProjectLayoutPage from "../components/HcStage1Page/HcStage1ProjectLayoutPage";
import HcStage2Page from "../components/HcStage2Page/HcStage2Page";
import SingleHcStage2Page from "../components/HcStage2Page/SingleHcStage2Page";
import HcStage2ProjectLayoutPage from "../components/HcStage2Page/HcStage2ProjectLayoutPage";
import HcStage1AgreePage from "../components/HcStage1AgreePage/HcStage1AgreePage";
import SingleHcStage1AgreePage from "../components/HcStage1AgreePage/SingleHcStage1AgreePage";
import HcStage1AgreeProjectLayoutPage from "../components/HcStage1AgreePage/HcStage1AgreeProjectLayoutPage";
import HcStage2AgreePage from "../components/HcStage2AgreePage/HcStage2AgreePage";
import SingleHcStage2AgreePage from "../components/HcStage2AgreePage/SingleHcStage2AgreePage";
import HcStage2AgreeProjectLayoutPage from "../components/HcStage2AgreePage/HcStage2AgreeProjectLayoutPage";
import CbStage1Page from "../components/CbStage1Page/CbStage1Page";
import SingleCbStage1Page from "../components/CbStage1Page/SingleCbStage1Page";
import CbStage1ProjectLayoutPage from "../components/CbStage1Page/CbStage1ProjectLayoutPage";
import CbStage2Page from "../components/CbStage2Page/CbStage2Page";
import SingleCbStage2Page from "../components/CbStage2Page/SingleCbStage2Page";
import CbStage2ProjectLayoutPage from "../components/CbStage2Page/CbStage2ProjectLayoutPage";
import CbStage1AgreePage from "../components/CbStage1AgreePage/CbStage1AgreePage";
import SingleCbStage1AgreePage from "../components/CbStage1AgreePage/SingleCbStage1AgreePage";
import CbStage1AgreeProjectLayoutPage from "../components/CbStage1AgreePage/CbStage1AgreeProjectLayoutPage";
import CbStage2AgreePage from "../components/CbStage2AgreePage/CbStage2AgreePage";
import SingleCbStage2AgreePage from "../components/CbStage2AgreePage/SingleCbStage2AgreePage";
import CbStage2AgreeProjectLayoutPage from "../components/CbStage2AgreePage/CbStage2AgreeProjectLayoutPage";
// ~cb-add-import~

const MyRouter = () => {
    return (
        <Routes>
            <Route path="" exact element={<Dashboard />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/login" exact element={<LoginPage />} />
            <Route path="/signup" exact element={<SignUpPage />} />

            <Route element={<ProtectedRoute redirectPath={'/login'} />}>
                <Route path="/account" exact element={<Account />} />
                    <Route path="/users" exact element={<UsersPage />} />
                    <Route path="/users/:singleUsersId" exact element={<SingleUsersPage />} />
                    <Route path="/hCMasterForm" exact element={<HCMasterFormPage />} />
                    <Route path="/hCMasterForm/:singleHCMasterFormId" exact element={<HCMasterFormProjectLayoutPage />} />
                    <Route path="/hCMasterForm/:singleHCMasterFormId/single" exact element={<SingleHCMasterFormPage />} />
                    <Route path="/cBMasterForm" exact element={<CBMasterFormPage />} />
                    <Route path="/cBMasterForm/:singleCBMasterFormId" exact element={<CBMasterFormProjectLayoutPage />} />
                    <Route path="/cBMasterForm/:singleCBMasterFormId/single" exact element={<SingleCBMasterFormPage />} />
                    <Route path="/hCMasterForm/:singleHCMasterFormId/hcStage1" exact element={<HcStage1ProjectLayoutPage />} />
                    <Route path="/hCMasterForm/:singleHCMasterFormId/hcStage1/:singleHcStage1Id" exact element={<SingleHcStage1Page />} />
                    <Route path="/hCMasterForm/:singleHCMasterFormId/hcStage2" exact element={<HcStage2ProjectLayoutPage />} />
                    <Route path="/hCMasterForm/:singleHCMasterFormId/hcStage2/:singleHcStage2Id" exact element={<SingleHcStage2Page />} />
                    <Route path="/hCMasterForm/:singleHCMasterFormId/hcStage1Agree" exact element={<HcStage1AgreeProjectLayoutPage />} />
                    <Route path="/hCMasterForm/:singleHCMasterFormId/hcStage1Agree/:singleHcStage1AgreeId" exact element={<SingleHcStage1AgreePage />} />
                    <Route path="/hCMasterForm/:singleHCMasterFormId/hcStage2Agree" exact element={<HcStage2AgreeProjectLayoutPage />} />
                    <Route path="/hCMasterForm/:singleHCMasterFormId/hcStage2Agree/:singleHcStage2AgreeId" exact element={<SingleHcStage2AgreePage />} />
                    <Route path="/cBMasterForm/:singleCBMasterFormId/cbStage1" exact element={<CbStage1ProjectLayoutPage />} />
                    <Route path="/cBMasterForm/:singleCBMasterFormId/cbStage1/:singleCbStage1Id" exact element={<SingleCbStage1Page />} />
                    <Route path="/cBMasterForm/:singleCBMasterFormId/cbStage2" exact element={<CbStage2ProjectLayoutPage />} />
                    <Route path="/cBMasterForm/:singleCBMasterFormId/cbStage2/:singleCbStage2Id" exact element={<SingleCbStage2Page />} />
                    <Route path="/cBMasterForm/:singleCBMasterFormId/cbStage1Agree" exact element={<CbStage1AgreeProjectLayoutPage />} />
                    <Route path="/cBMasterForm/:singleCBMasterFormId/cbStage1Agree/:singleCbStage1AgreeId" exact element={<SingleCbStage1AgreePage />} />
                    <Route path="/cBMasterForm/:singleCBMasterFormId/cbStage2Agree" exact element={<CbStage2AgreeProjectLayoutPage />} />
                    <Route path="/cBMasterForm/:singleCBMasterFormId/cbStage2Agree/:singleCbStage2AgreeId" exact element={<SingleCbStage2AgreePage />} />
                {/* ~cb-add-protected-route~ */}
            </Route>
            {/* ~cb-add-route~ */}

            <Route path="*" element={<NoMatch />} />
        </Routes>
    );
};

export default MyRouter;
