import React from 'react'
import { Grid, Cell } from 'react-mdl'

export const Contact = () => {
  return (
    <div className='all-content'>
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6}>half page</Cell>
          <Cell col={6}>half page</Cell>
        </Grid>
      </div>
    </div>
  )
}
