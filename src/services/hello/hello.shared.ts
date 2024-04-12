// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Hello, HelloData, HelloPatch, HelloQuery, HelloService } from './hello.class'

export type { Hello, HelloData, HelloPatch, HelloQuery }

export type HelloClientService = Pick<HelloService<Params<HelloQuery>>, (typeof helloMethods)[number]>

export const helloPath = 'hello'

export const helloMethods = ['get'] as const

export const helloClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(helloPath, connection.service(helloPath), {
    methods: helloMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [helloPath]: HelloClientService
  }
}
