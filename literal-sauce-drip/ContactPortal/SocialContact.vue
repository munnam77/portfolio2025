<template>
  <StyledSocialContact class="social-contact">
    <NavItem external :href="_.twitter" ariaLabel="Moazzem on Twitter">
          TW
        </NavItem>
        <NavItem external :href="_.github" ariaLabel="Moazzem on GitHub">
          GH
        </NavItem>
        <NavItem external :href="_.linkedIn" ariaLabel="Moazzem on LinkedIn">
          LN
        </NavItem>
        <NavItem external :href="_.youtube" ariaLabel="Moazzem's YouTube channel">
      YT
    </NavItem>
  </StyledSocialContact>
</template>

<script>
import NavItem from '../NavItem'
import styled from 'vue-styled-components'

const StyledSocialContact = styled.ul`
  position: relative;

  li {
    display: inline-block;

    &:not(:last-of-type) {
      margin-right: 2.5em;
    }
  }

  a {
    color: currentColor;
  }
`

export default {
  computed: {
    _() {
      return this.socialProfiles
    },
  },

  components: {
    NavItem,
    StyledSocialContact,
  },
}

StyledSocialContact.name = 'StyledSocialContact'
</script>
