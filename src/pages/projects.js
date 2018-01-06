import React from 'react'
import MainContent from '../components/MainContent'

const Projects = ({ data }) => (
    <MainContent title="Projects" data={data} current="Projects">
        <p>This website itself is one of my projects. It is built following the <a href="https://jamstack.org" target="_blank">JAMstack</a> architecture with a static site generator called <a href="https://www.gatsbyjs.org" target="_blank">Gatsby</a>, which uses <a href="https://reactjs.org" target="_blank">React.js</a>.</p>

        <p>This page is still under construction. Here is my <a href="https://github.com/deslee">Github</a>.</p>
    </MainContent>
)

export default Projects

export const query = graphql`
query projectsPageQuery {
    logo: imageSharp(id: {regex: "/images\/logo.png/"}) {
      resize(width: 350, traceSVG: {color: "#3DAEE3"}) {
        tracedSVG
      }
    },
}
`