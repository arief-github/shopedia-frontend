import React from 'react'
import { Alert } from 'reactstrap'

export default function Success({ success }) {
  return (
    <Alert color="primary">
        {success}
    </Alert>
  )
}
