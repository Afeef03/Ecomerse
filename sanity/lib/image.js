import createImageUrlBuilder from '@sanity/image-url'

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || 'fz2g5z5e',
  dataset: dataset || 'production',
})

export const urlForImage = (source) => {
  return imageBuilder?.image(source).auto('format').fit('max').url()
}
