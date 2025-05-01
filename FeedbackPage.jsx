import { useEffect } from 'react'
import { Box, Typography, Paper, CircularProgress, Alert } from '@mui/material'
import FeedbackForm from '../components/Feedback/FeedbackForm'
import FeedbackList from '../components/Feedback/FeedbackList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFeedback } from '../store/slices/feedbackSlice'

const FeedbackPage = () => {
  const dispatch = useDispatch()
  const { items, loading, error } = useSelector(state => state.feedback)

  useEffect(() => {
    dispatch(fetchFeedback())
  }, [dispatch])

  return (
    <Box sx={{ position: 'relative' }}>
      <Typography variant="h4" gutterBottom>Обратная связь</Typography>

      {loading && <CircularProgress sx={{ mb: 2 }} />}
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <FeedbackForm />
      </Paper>

      <FeedbackList items={items} />
    </Box>
  )
}

export default FeedbackPage
