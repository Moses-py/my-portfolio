import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FeedBackFormContainer, FormContainer } from './style';
import { Button } from '../../components/UI/Button';
import CancelIcon from '@mui/icons-material/Cancel';


export default function FeedbackForm({closeForm}) {
  return (
    <FeedBackFormContainer>
      <div className='overlay'></div>
      <FormContainer initial={{transform: "scale(0)"}} animate={{transform: "scale(1)"}} transition={{duration: 0.5}}>
      <CancelIcon onClick={() => closeForm(false)} className="cancelButton" />

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, minWidth: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <div>
        <TextField
          id="outlined-multiline-static"
          label="Leave a feedback"
          multiline
          rows={4}
          columns={100}
          style={{width: "100%"}}
        />
        </div>
      </Box>
      <div className='btnContainer'>
        <Button title="Send" />
      </div>
      </FormContainer>
    </FeedBackFormContainer>
  );
}
