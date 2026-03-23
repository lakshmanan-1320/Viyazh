import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import { Box } from '@mui/material'
import QuestionBankHeader from '../../PageInnerComponent/QuestionBank/QuestionBankHeader'
import QuestionBankBody from '../../PageInnerComponent/QuestionBank/QuestionBankBody'

const QuestionBank = () => {
    return (
        <Box sx={{ display: "flex" }}>
            <Sidebar />

            <Box sx={{ flexGrow: 1 }}>
                <Navbar />

                <Box component="main" sx={{ p: 3 }}>
                  <QuestionBankHeader/>
                  <QuestionBankBody/>
                </Box>
            </Box>
        </Box>
    )
}

export default QuestionBank

