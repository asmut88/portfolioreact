import { IContainer } from "./interface"
import styles from './stylesContainers/ContainerWare.module.css'

export const ContainerWare: React.FC<IContainer> = (props) => {

    const {text = ''} = props

    return (
        <div className={styles.boxWare}>
            {text}
        </div>
    )
}

