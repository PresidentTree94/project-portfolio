import { defineType, defineField } from "sanity";

export default defineType({
  name: "skillDocument",
  title: "Skill",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string"
    }),
    defineField({
      name: "icon",
      type: "string"
    })
  ]
})