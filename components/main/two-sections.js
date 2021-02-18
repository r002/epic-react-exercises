import styles from "./Styles.module.css"
import { DivBg2 } from "../pretty-defaults"

const TwoSections = ({ div1, div2 }) => {
    const section1 = (
        <DivBg2 Component="section" className={styles.div1}>
            {div1}
        </DivBg2>
    )

    let section2 = null
    if (div2) {
        section2 = (
            <DivBg2 Component="section" className={styles.div2}>
                {div2}
            </DivBg2>
        )
    }

    return (
        <div className={styles.twoSectionsLayout}>
            {section1} {section2}
        </div>
    )
}

export default TwoSections
