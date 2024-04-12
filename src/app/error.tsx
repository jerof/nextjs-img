"use client"; // useclient directive
import { Button } from 'react-bootstrap'

interface ErrorPageProps {
  error: Error,
  reset: () => void,
}

export default function Error({error, reset}: ErrorPageProps) {
  return (
    <div>
      <h1>Error :O</h1>
      <p>Something went wrong</p>
      <Button onClick={reset}>Try again</Button>
    </div>
  )
}