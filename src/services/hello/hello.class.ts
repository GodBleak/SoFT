// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#custom-services
import type { Params, ServiceInterface } from '@feathersjs/feathers'

import type { Application } from '../../declarations'

type Hello = { text: string }
type HelloData = any
type HelloPatch = any
type HelloQuery = any

export type { Hello, HelloData, HelloPatch, HelloQuery }

export interface HelloServiceOptions {
  app: Application
}

export interface HelloParams extends Params<HelloQuery> {}

// This is a skeleton for a custom service class. Remove or add the methods you need here
export class HelloService<ServiceParams extends HelloParams = HelloParams>
  implements ServiceInterface<Hello, HelloData, ServiceParams, HelloPatch>
{
  constructor(public options: HelloServiceOptions) {}

  async get(id: number | string | null, _params?: ServiceParams): Promise<Hello> {
    return {
      text: 'Hello, from FeathersJS!'
    }
  }
}

export const getOptions = (app: Application) => {
  return { app }
}
