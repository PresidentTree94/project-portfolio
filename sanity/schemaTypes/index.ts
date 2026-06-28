import { type SchemaTypeDefinition } from 'sanity'
import projectDocument from './projectDocument'
import skillDocument from './skillDocument'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectDocument, skillDocument],
}
