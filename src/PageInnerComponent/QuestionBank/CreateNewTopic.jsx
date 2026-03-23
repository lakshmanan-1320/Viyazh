import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Modal } from '@mui/material';
// import cancel from '../../assets/icon/cancel.svg';
import { Link } from 'react-router-dom';

const CreateNewTopic = () => {
  const [domainName, setDomainName] = useState('');
  const [error, setError] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  return (
    <Box>
      

      <Box className="create-new-domain-inner">
        <Box className="create-new-domain-inner-Box">
          <Typography className="create-new-domain-heading">
            Create New Topic
          </Typography>

          <Box className="cre_domain_textfield" sx={{ marginTop: '72px' }}>
            <TextField
              id="outlined-basic"
              label="Topic Name"
              variant="outlined"
              value={domainName}
              error={error}
              helperText={error ? 'Please enter a topic name.' : ''}
              onChange={(e) => setDomainName(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    border: 'none',
                  },
                },
                '& .MuiInputBase-input': {
                  color: '#000!important',
                  fontFamily: 'Poppins, sans-serif !important',
                  fontSize: '16px !important',
                  opacity: 0.8,
                  fontWeight: 400,
                },
                '& .MuiInputLabel-root': {
                  color: '#3B3B3B70',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '16px',
                },
              }}
            />
          </Box>

          <Box className="create-new-domain-btns">
            <Button className="cancel_btn_domain">
             <Link to='/contentCreator/questionBank'>Cancel</Link>  
            </Button>

            <Button className="cancel_btn_domain create_btn_domain">
           <Link to='/contentCreator/addTopicMain'>   Create</Link>
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Error Modal */}
      <Modal open={errorModal} onClose={() => setErrorModal(false)}>
        <Box
          className="modal-box"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography
            sx={{
              color: 'red',
              mt: 2,
              fontFamily: 'Poppins, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              textAlign: 'center',
            }}
          >
            Already Domain Exists
          </Typography>

          <Button
            onClick={() => setErrorModal(false)}
            className="modal_save_btn"
            sx={{
              display: 'flex',
              mt: 2,
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              width: '100%',
              height: '50px',
              borderRadius: '8px',
              backgroundColor: 'black',
              color: 'white',
              fontWeight: '600',
            }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default CreateNewTopic;
