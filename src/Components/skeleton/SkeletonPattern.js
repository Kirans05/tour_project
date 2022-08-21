import { Box } from '@mui/material'
import React from 'react'
import Skeleton from '@mui/material/Skeleton'


const SkeletonPattern = () => {
  return (
    <Box>
        <Skeleton /> 
        <Skeleton /> 
        <Skeleton /> 
        <Skeleton /> 
        <Skeleton /> 
    </Box>
  )
}

export default SkeletonPattern