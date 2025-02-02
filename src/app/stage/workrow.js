
import stylesw from './watchlist.module.css';



export default function workrow({serial, heading, description}) {
    return (
        <div className={stylesw.workrow}>
          <div className={stylesw.serial}>
            <h3>{serial}</h3>
          </div>
          <div className={stylesw.heading}>
            <h3>{heading}</h3>
          </div>
          <div className={stylesw.description}>
            <p>
            {description}
            </p>
          </div>
          </div>

    )}