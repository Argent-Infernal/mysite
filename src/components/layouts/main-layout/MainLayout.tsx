import { PropsWithChildren } from "react";
import styles from './MainLayout.module.scss'
import Header from "./Header/Header";

export default function MainLayout({children}:PropsWithChildren<{}>) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.layout}>
                <Header/>
                <main>{children}</main>
                {/* <Footer></Footer> */}
            </div>
        </div>
    )
}