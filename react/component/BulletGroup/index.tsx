import React, { PropsWithChildren } from "react"

import { BulletsSchema } from "./BulletTypes"
// import { getBulletsAsTSXList } fro

import { useDevice } from 'vtex.device-detector'
import { useListContext } from 'vtex.list-context'

export interface BulletGroupProps {
  bullets: BulletsSchema
}

const BulletGroup = ({ bullets, children }: PropsWithChildren<BulletGroupProps>) => {
  const { isMobile } = useDevice();
  const { list } = useListContext() || []


  console.log("Bullets", bullets)
  if (false) {
   console.log(children, list)
  }

  return (
    isMobile
      ?
      <div>Estamos en mobile</div>
      :
      <div> Estamos en desktop</div>
  )
}

export default BulletGroup
