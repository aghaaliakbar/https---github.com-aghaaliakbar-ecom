import { type SchemaTypeDefinition } from 'sanity'
import {category}  from '../sanity/catagory'
import product  from '../sanity/product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category]
}
