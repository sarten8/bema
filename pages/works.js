import css from '../styles/styles.css'
import works from '../utils/works'

const myWorks = works()

export default () => (
  <section className={css.work} id="work">
    <div>
      <p>::: work</p>
    </div>
    <div className={css.contentWork}>
      {myWorks.map((work, index) => (
        <div
          key={index}
          className={css.card}
          style={{ backgroundImage: `url(${work.cover})` }}
        >
          <div>
            <span>{work.title}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
)
