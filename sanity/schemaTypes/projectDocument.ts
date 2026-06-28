import { defineType, defineField } from "sanity";
import skillDocument from "./skillDocument";

export default defineType({
  name: "projectDocument",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string"
    }),
    defineField({
      name: "description",
      type: "text"
    }),
    defineField({
      name: "skills",
      type: "array",
      of: [{ type: "reference", to: [{ type: "skillDocument" }] }]
    }),
    defineField({
      name: "link",
      type: "url"
    })
  ]
})