import style from './domaines.module.scss'

export default function Domaines () {
    

    const data = [
        {
            label:"Domaines",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            img : "/assets/img/shield.svg"
        },
        {
            label:"Domaines",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            img : "/assets/img/shield.svg"
        },
        {
            label:"Domaines",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            img : "/assets/img/shield.svg"
        },
        {
            label:"Domaines",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            img : "/assets/img/shield.svg"
        },
        {
            label:"Domaines",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            img : "/assets/img/shield.svg"
        },
        {
            label:"Domaines",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            img : "/assets/img/shield.svg"
        },
    ]

    const Illustration = () => {

        return (
            <div className={style.illustration}>
                <img src="/assets/img/coffre.jpg"/>
            <div className={style.filter}/>
            </div>
        )
    }

    const Logo = () => {
        return <img src="/assets/img/logo.png" className={style.logo}/>
    }

    const Card = ({data, i}) => {
        console.log(i);
        return (
            <article key={i} className={style.card}>
                <div className={style.icon}>
                    <img src={data.img} />
                    </div>
                <h1> {data.label} 0{i}</h1>
                <p> {data.para} </p>
            </article>
        )
    }

    const Content = () => {

        return (
            <div className={style.content} >
                <h1>Pourquoi SAFE ?</h1>
                <div className={style.grid}>
                    {data.map((el, i) => {
                        return <Card data={el} i={i}/>
                    })}
                </div>
            </div>
        )
    }

    return (
        <section className={style.wrapper}>
            <Illustration/>
            <Logo/>
            <Content/>
        </section>
    )
}