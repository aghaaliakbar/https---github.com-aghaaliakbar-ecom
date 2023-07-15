
import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, useCdn } from '../env';

export const client = createClient({
  apiVersion:"v2023-07-14",
  dataset:"production",
  projectId:"18rgpr7i",
  useCdn:true,
})