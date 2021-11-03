import DarkFilter from '../../../../Template/DarkFilter/DarkFilter'
import style from './banner.module.scss'

export default function Banner () {

    const Content = () => {
        return (
            <div className={style.content}>
                <img src="/assets/img/logo_w.png"/>
                <h1>La securité n'a pas de prix</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
        )
    }


    return (
        <section className={style.wrapper}>
            <Content/>
            <DarkFilter/>
            <h2>Sécurité</h2>
        </section>
    )
}