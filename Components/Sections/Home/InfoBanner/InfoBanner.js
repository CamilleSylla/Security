import style from './infobanner.module.scss'

export default function InfoBanner () {


    const data = [
        {
            label: "Lorem Ipsum",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
            label: "Lorem Ipsum",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }
    ]

    const Card = ({data, key}) => {
        return (
        <article className={style.card}>
            <div className={style.bar}/>
            <h1>{data.label}</h1>
            <p>{data.para}</p>
        </article>
        )
    }

    const Phone = () => {

        return (
            <article className={style.phone}>
                <h1>Appelez nous !</h1>
                <p>+33 06 06 06 06 06</p>
            </article>
        )
    }

    return (
        <section className={style.wrapper} > 
            {data.map((el, i) => {
                return <Card data={el} key={i}/>
            })}
            <Phone/>
        </section>
    )
}