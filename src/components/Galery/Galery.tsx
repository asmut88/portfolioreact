import React from "react"
import { ContainerWare } from "../Containers"
import { IGalery } from "./interface"
import styles from './stylesGalery/Galery.module.css'

//**Временный источник данных */
const res: string[] = ['First', 'Second', 'Third', 'Fourth', 'Fifth']

const Galery: React.FC<IGalery> = (props) => {
    const { countColumn = 3 } = props

    //**Dynamic css propertion */
    const cssGridRepeat = 'repeat('+countColumn+', 1fr)'

    return <div 
    className={styles.flexwrapper}
    style ={{gridTemplateColumns: cssGridRepeat} as React.CSSProperties}>
        {
            res.map((e) => {
                return <ContainerWare text={e} />
            })
        }
    </div>

}

export { Galery }