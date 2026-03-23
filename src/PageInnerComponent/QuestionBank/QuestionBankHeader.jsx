import React, { useState } from 'react'
import { Box, Button, TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import './QuestionBank.css'
import { Link } from 'react-router-dom';

const QuestionBankHeader = () => {

const [search, setSearch] = useState('');

  return (
     <Box className='QuestionBankHeader'>
      <Box className='que_bank_btns'>
        <Button className='que_bank_btn'>
          Question bank
        </Button>

        <Link to='/contentCreator/createNewDomain'>  <Button className='que_domain_btn'>
          Create Domain
        </Button> </Link>
      </Box>
      <Box>
        <TextField
          placeholder="Search "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          variant="outlined"
          className="test-search-field"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              border: 'none',
              '& fieldset': {
                border: 'none',
              },
              '& .MuiInputBase-input::placeholder': {
                color: '#000000A8 !important',
                fontFamily: 'Poppins',
                fontSize: '14px',
                fontStyle: '400',
                opacity: 1,
              },
            },
          }}
        />
      </Box>
    </Box>
  )
}

export default QuestionBankHeader


