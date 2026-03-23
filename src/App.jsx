import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Log/Login'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import RecoveryPassword from './pages/RecoveryPassword/RecoveryPassword'
import Test from './pages/Test/Test'
import CreateTest from './pages/CreateTest/CreateTest'
import NameDescription from './PageInnerComponent/CreateTest/NameDescription'
import TestGeneralSettings from './PageInnerComponent/CreateTest/TestGeneralSettings'
import LaunchCompleteMsg from './PageInnerComponent/CreateTest/LaunchCompleteMsg'
import QuestionBank from './pages/QuestionBank/QuestionBank'
import CreateNewDomain from './PageInnerComponent/QuestionBank/CreateNewDomain'
import CreateNewTopic from './PageInnerComponent/QuestionBank/CreateNewTopic'
import AddTopic from './PageInnerComponent/QuestionBank/AddTopic'
import AddTopicPageMain from './PageInnerComponent/QuestionBank/AddTopicPageMain'
import McqCreateQuestions from './PageInnerComponent/QuestionBank/McqCreateQuestions'
import McqQuestionMain from './PageInnerComponent/QuestionBank/McqQuestionMain'
import UploadQuestions from './PageInnerComponent/QuestionBank/UploadQuestions'
import PreviewPage from './PageInnerComponent/Test/PreviewPage'
import PreviewPageQuestions from './PageInnerComponent/Test/PreviewPageQuestions'
import InvitePage from './PageInnerComponent/Test/InvitePage'
import Library from './pages/Library/Library'
import Settings from './pages/Settings/Settings'
import Account from './pages/My Account/Account'
import DifficultyLevel from './pages/DifficultyLevel/DifficultyLevel'
import User from './pages/User/User'
import Company from './pages/Company/Company'
import Report from './PageInnerComponent/Test/Report'



const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} /> 
        <Route path='/forgotPassword' element={<ForgotPassword/>} />
        <Route path='/recoveryPassword' element={<RecoveryPassword/>} />
        <Route path='/admin/dashboard' element={<Dashboard/> }/>
        <Route path='/admin/test' element={<Test/>}/>
        <Route path='/admin/createTest' element={<CreateTest/>}/>
        <Route path='/admin/createTestOne' element={<NameDescription/>}/>
        <Route  path='/admin/generalTestSettings' element={<TestGeneralSettings/>}/>
        <Route path='/admin/launchCompleteTest' element={<LaunchCompleteMsg/>}/>
        <Route path='/admin/previewPage' element={<PreviewPage/>}/>
        <Route path='/admin/previewPageQuestions' element={<PreviewPageQuestions/>}/>
        <Route path='/admin/testInvite' element={<InvitePage/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/myAccount' element={<Account/>}/>
        <Route path="/admin/users" element={<User/>}/>
        <Route path="/admin/Company" element={<Company/>}/>
        <Route path='/admin/report' element={<Report/>}/>



        <Route path='/contentCreator/questionBank' element={<QuestionBank/>}/>
        <Route path='/contentCreator/createNewDomain' element={<CreateNewDomain/>}/>
        <Route path='/contentCreator/createNewTopic' element={<CreateNewTopic/> }/>
        <Route path='/contentCreator/addTopic' element={<AddTopic/>}/>
        <Route path='/contentCreator/addTopicMain' element={<AddTopicPageMain/>}/>
        <Route  path='/contentCreator/mcqCreateQuestions' element={<McqCreateQuestions/>}/>
        <Route path='/contentCreator/mcqCreateQuestionMain' element={<McqQuestionMain/>}/>
        <Route path='/contentCreator/uploadQuestion' element={<UploadQuestions/>}/>
        <Route path='/contentCreator/library' element={<Library/>}/>
        <Route path='/contentCreator/difficultyLevel' element={<DifficultyLevel/>}/>
        
      </Routes>
    </div>
  )
}

export default App
