import css from '../styles/styles.css'
import Link from 'next/link'

export default () => (
  <div className={css.home} id="home">
    <div className={css.dot} />
    <div className={css.pic}>
      <div className={css.shadowOverlay} />
    </div>
    <div className={css.subContenedorHome}>
      <div className={css.subContenedorHomeLetras}>
        <span className={css.welcome} style={{ animationDelay: '0.1s' }}>
          ART
        </span>
        <span className={css.welcome} style={{ animationDelay: '0.2s' }}>
          DIRECTION
        </span>
        <span className={css.welcome} style={{ animationDelay: '0.3s' }}>
          SCENOGRAPHY
        </span>
        <span className={css.welcome} style={{ animationDelay: '0.4s' }}>
          DESIGN
        </span>
      </div>
      <div className={css.introScroll}>
        <Link href="/#about">
          <span className={css.introScrollLink}>Scroll For More</span>
        </Link>
      </div>
    </div>
  </div>
)
