// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import type { Application } from '../../declarations'
import { HelloService, getOptions } from './hello.class'
import { helloPath, helloMethods } from './hello.shared'

export * from './hello.class'

// A configure function that registers the service and its hooks via `app.configure`
export const hello = (app: Application) => {
  // Register our service on the Feathers application
  app.use(helloPath, new HelloService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: helloMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(helloPath).hooks({
    around: {
      all: []
    },
    before: {
      all: [],
      get: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [helloPath]: HelloService
  }
}
