import style from './layoutStyle.module.css';

const LayoutBlock = ({id, title, desc, urlBg, colorBg}) => {
    const picBg = {
        backgroundImage: `url(${urlBg})`
    };
    const colorBgc = {
        backgroundColor: `${colorBg}`
    }
    return (
        <section className={style.root} id={id} style={colorBgc}>
            <div className={style.wrapper}>
                <article>
                    <div className={style.title}>
                        {title && (<h3>{title}</h3>)}
                        <span className={style.separator}></span>
                    </div>
                    <div className={`${style.desc} ${style.full}`}>
                        {desc && (<p>{desc}</p>)}
                    </div>
                </article>
            </div>
        </section>
    );

}



export default LayoutBlock;