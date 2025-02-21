import Vue from 'vue'
import StyledNavigation from './styles'

export default Vue.component('Navigation', {
  render() {
    return (
      <StyledNavigation aria-label="Main navigation.">
        <ul ref="list">
          <li>
            <router-link to="/work" aria-label="Go to My Work section">
              My Work
            </router-link>
          </li>
          <li>
            <router-link to="/shelf" aria-label="Go to My Shelf section">
              My Shelf
            </router-link>
          </li>
          <li>
            <router-link to="/resume" aria-label="Go to My Resume section">
              My Resume
            </router-link>
          </li>
        </ul>
      </StyledNavigation>
    )
  },
})
