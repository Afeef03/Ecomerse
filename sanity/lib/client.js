import { createClient } from 'next-sanity'
import 'react/jsx-runtime'
import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})
