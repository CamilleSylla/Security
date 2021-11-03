import Button from '../../../../Template/Button/Button'
import style from './agrements.module.scss'

export default function Agrements () {

    const data = [
        {
            event: "Fête de la biere",
            desc: "Lorem ipsum ret kevis thuc + 2 mogf las delis stof",
            date: "01/09/2021"
        },
        {
            event: "Fête de la biere",
            desc: "Lorem ipsum ret kevis thuc + 2 mogf las delis stof",
            date: "01/09/2021"
        },
        {
            event: "Fête de la biere",
            desc: "Lorem ipsum ret kevis thuc + 2 mogf las delis stof",
            date: "01/09/2021"
        },
        {
            event: "Fête de la biere",
            desc: "Lorem ipsum ret kevis thuc + 2 mogf las delis stof",
            date: "01/09/2021"
        },
    ]

    const headData = [
        {
            icon: "/assets/img/shield.svg",
            number: 10,
            label: "Lorem Ipsum"
        },
        {
            icon: "/assets/img/shield.svg",
            number: 10,
            label: "Lorem Ipsum"
        },
        {
            icon: "/assets/img/shield.svg",
            number: 10,
            label: "Lorem Ipsum"
        },
        {
            icon: "/assets/img/shield.svg",
            number: 10,
            label: "Lorem Ipsum"
        },
    ]

    const HeadCard = ({data, i}) => {

        return (
            <div key={i} className={style.headCard}>
                <img src={data.icon} />
                <span> {data.number} </span>
                <h1> {data.label} </h1>
            </div>
        )
    }

    const Head = () => {
        return (
            <div className={style.head}>
                <div className={style.container}>
                    {headData.map((el, i) => {
                        return <HeadCard data={el} i={i}/>
                    })}
                </div>
            </div>
        )
    }

    const Illustration = () => {
        return <img src="/assets/img/dog.png" className={style.illustration}/>
    }

    const PlanningCard = ({data, i}) => {

        return (
            <article className={style.card}>
                <h1>{data.event}</h1>
                <p> {data.desc} </p>
                <p> {data.date} </p>
            </article>
        )
    } 

    const Planning = () => {
        return (
            <div className={style.planning}>
                <h1>Nos dernières references</h1>
                <div className={style.planning_wrapper}>
                    {data.map((el, i) => {
                        return <PlanningCard data={el} i={i}/>
                    })}
                </div>
                <Button text="Plannifier"/>
            </div>
        )
    }

    return (
        <section className={style.wrapper}>
            <Head/>
            <Illustration/>
            <div className={style.content}>
                <Planning/>
            </div>
        </section>
    )
}