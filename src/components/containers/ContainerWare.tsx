import { IContainer } from "./interface"
import styles from './ContainerWare.module.css'

export const ContainerWare = (props: IContainer) => {

    const {text = ''} = props

    return (
        <div className={styles.block}>
            {text}
        </div>
    )
}

