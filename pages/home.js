import css from '../styles/styles.css'
import Link from 'next/link'

export default () => (
  <div className={css.home} id="home">
    <div className={css.dot} />
    <div className={css.shadowOverlay} />
    <div className={css.subContenedorHome}>
      <div className={css.subContenedorHomeLetras}>
        <span className={css.welcome} style={{ animationDelay: '0.1s' }}>
          DIRECCIÓN
        </span>
        <span className={css.welcome} style={{ animationDelay: '0.2s' }}>
          ARTE
        </span>
        <span className={css.welcome} style={{ animationDelay: '0.3s' }}>
          ESCENOGRAFÍA
        </span>
        <span className={css.welcome} style={{ animationDelay: '0.4s' }}>
          DISEÑO
        </span>
      </div>
      <div className={css.introScroll}>
        <Link href="/#about">
          <span className={css.introScrollLink}>Scroll +</span>
        </Link>
      </div>
    </div>
  </div>
)
