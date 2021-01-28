import style from './style.module.css';

const HeaderBlock = ({title, descr}) => {
    return (
        <div className={style.root}>
            <div className={style.forest}></div>
            <div className={style.container}>
                {title && (<h1>{title}</h1>)}

                {descr && (<p>{ descr }</p>)}
            </div>
        </div>
    );

}

export default HeaderBlock;