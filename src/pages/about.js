import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { css } from 'glamor';

import GenericContent from '../components/GenericContent'

const unstyledLink = {
    color: 'inherit',
    textDecoration: 'none'
  }

const AboutPage = ({ data }) => (
    <GenericContent title="About">
        <Helmet>
            <title>About | Desmond Lee</title>
        </Helmet>
        <article dangerouslySetInnerHTML={{__html: data.markdownRemark.html }}></article>
    </GenericContent>
  )
  
export default AboutPage

export const query = graphql`
query aboutPageQuery {
    markdownRemark(id:{regex:"/about.md/"}) {
        html
    }
}
`