import {NotFoundContainer, Para, Heading, Img} from './style'

const NotFound = () => (
  <NotFoundContainer>
    <Img
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <Heading>Page not found</Heading>
    <Para>We are sorry, the page you requested could not be found.</Para>
  </NotFoundContainer>
)

export default NotFound
