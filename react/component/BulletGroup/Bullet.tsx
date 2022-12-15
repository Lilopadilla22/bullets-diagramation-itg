import React from "react";

import { Link } from 'vtex.render-runtime'
import { useCssHandles } from 'vtex.css-handles'

import { LinkProps } from "./BulletTypes";
import "./styles.css"


type Props = {
  src: string
  titleBullet: string
  link: LinkProps
}

const Bullet = ({ src, titleBullet, link }: Props) => {
  const CSS_HANDLES = [
    "bullet__item",
    "bullet__item--title",
    "bullet__item--image",
    "bullet__item--link"
  ]
  const handles = useCssHandles(CSS_HANDLES)

  //console.log("Datos para mi bullet", src, titleBullet, link)

  return (
    <div className= {handles["bullet__item"]}>
      <Link
        to={link.url} className={handles["bullet__item--link"]}
      >
        <img className={`${handles["bullet__item--image"]} externalClass`} src={src} alt={titleBullet}/>
        <p className={handles["bullet__item--title"]}>{titleBullet}</p>

      </Link>
    </div>
  )
}

Bullet.Schema = {
  title: "Bullet",
  type: "objetc",
  properties: {
    src: {
      title: "Imagen de Bullet",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    }
  }

}

export default Bullet


