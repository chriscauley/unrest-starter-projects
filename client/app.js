import uR from 'unrest.io'
import models from './models'

import './tags'
import './routes'

uR.auth.enabled = false // uses a dummy super user

uR.ready(() => {
  uR.admin.start()
})
