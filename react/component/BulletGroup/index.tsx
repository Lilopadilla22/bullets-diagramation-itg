import React, { PropsWithChildren } from "react"

import { BulletsSchema } from "./BulletTypes"
import { getBulletsAsTSXList } from './modules/BulletsAsList'

import { useDevice } from 'vtex.device-detector'
import { useListContext, ListContextProvider } from 'vtex.list-context'
import { useCssHandles } from 'vtex.css-handles'

export interface BulletGroupProps {
  bullets: BulletsSchema
}

const BulletGroup = ({ bullets, children}: PropsWithChildren<BulletGroupProps>) => {
  const { isMobile } = useDevice();
  const { list } = useListContext() || []

  console.log("Bullets", bullets)

  const bulletGroup = getBulletsAsTSXList(bullets)
  const newListContextValue = list.concat(bulletGroup)
  const CSS_HANDLES = ["bullet__container"]
  const handles = useCssHandles(CSS_HANDLES)

  // if (false) {
  //   console.log(children, list)
  // }


  return (
    <ListContextProvider list={newListContextValue}>
      {
        isMobile
        ?
        <div className={handles.bullet__container}> {bulletGroup} </div>
        :
        children
      }
    </ListContextProvider>
  )
}

export default BulletGroup
