export const getAllSkills = `
  *[_type == "skillDocument"] | order(_createdAt asc) {
    title,
    icon
  }
`

export const getAllProjects = `
  *[_type == "projectDocument"] | order(_createdAt desc) {
    title,
    description,
    skills[]->{
      title
    },
    link
  }
`