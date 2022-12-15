import React, { PropsWithChildren } from "react"

import { BulletsSchema } from "./BulletTypes"
import { getBulletsAsTSXList } from './modules/BulletsAsList'

import { useDevice } from 'vtex.device-detector'
import { useListContext, ListContextProvider } from 'vtex.list-context'

export interface BulletGroupProps {
  bullets: BulletsSchema
}

const BulletGroup = ({ bullets, children}: PropsWithChildren<BulletGroupProps>) => {
  const { isMobile } = useDevice();
  const { list } = useListContext() || []

  console.log("Bullets", bullets)

  const bulletGroup = getBulletsAsTSXList(bullets)
  const newListContextValue = list.concat(bulletGroup)

  if (false) {
    console.log(children, list)
  }


  return (
    <ListContextProvider list={newListContextValue}>
      {
        isMobile
        ?
        <div> {bulletGroup} </div>
        :
        children
      }
    </ListContextProvider>
  )
}

export default BulletGroup
