import Button from '../../../../Template/Button/Button'
import style from './sectors.module.scss'

export default function Sectors () {

    const data = [
        {
            label:"Domaines",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            img : "/assets/img/house.svg"
        },
        {
            label:"Domaines",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            img : "/assets/img/building.svg"
        },
        {
            label:"Domaines",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            img : "/assets/img/people.svg"
        },
        {
            label:"Domaines",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            img : "/assets/img/car.svg"
        },
        {
            label:"Domaines",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            img : "/assets/img/shield.svg"
        },
    ]

    const Card = ({data, i}) => {

        return (
            <article className={style.card}>
                <div className={style.head}><p>0{i+1}</p> <img src={data.img}/></div>
                <div className={style.bar}/>
                <p className={style.para}>{data.para}</p>
            </article>
        )
    }

    const Menu = () => {
        return (
            <div className={style.menu}>
                <ul>
                    <li>Professionelles</li>
                    <li>Particulier</li>
                </ul>
            </div>
        )
    }

    const Head = () => {
        return (
            <div className={style.header}>
                <h1>Nos secteurs</h1>
                <Menu/>
            </div>
        )
    }


    const Grid = () => {

        return (
            <div className={style.grid}>
                {data.map((el, i) => {
                    return <Card data={el} i={i}/>
                })}
            </div>
        )
    }

    return (
        <section className={style.wrapper}>
            <img className={style.illustration} src="/assets/img/security.jpg"/>
            <div className={style.img_filter}>
                <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <p>+33 6 06 06 06 06</p>
                <Button text="En Savoir plus"/>
                </div>
            </div>
            <Grid/>
            <Head/>
        </section>
    )
}