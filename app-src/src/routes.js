import store from './store/store'

export const loginRoute = {
  path: '/login',
  beforeEnter: (to, from, next) => {
    if (window.lock === undefined) {
      window.lock = new window.Auth0Lock(
        'iHhlL8Eb1z3dPKwpYITqah7ZZdyGKvvx',
        'opentrons.auth0.com',
        {auth: { redirect: false }}
      )
    }
    window.lock.show()
    window.lock.on('authenticated', (authResult) => {
      localStorage.setItem('id_token', authResult.idToken)
      window.lock.getProfile(authResult.idToken, (err, profile) => {
        console.log(err)
        window.ot_dataLayer.push({UserId: profile.user_id})
        localStorage.setItem('profile', JSON.stringify(profile))
        store.commit('AUTHENTICATE', {isAuthenticated: true, userProfile: profile})
        window.lock.hide()
      })
    })
    next(from)  // Redirect to previous page
  }
}

export const logoutRoute = {
  path: '/logout',
  beforeEnter: (to, from, next) => {
    localStorage.removeItem('id_token')
    localStorage.removeItem('profile')
    store.commit('AUTHENTICATE', {isAuthenticated: false, userProfile: null})
    next(from)  // Redirect to previous page
  }
}
