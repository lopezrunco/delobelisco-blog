import './styles.scss'

export const SiteTitle = ({ subtitle }) => {
  return (
    <div className="row site-title">
      <div className="col-12">
        <h1>DelObelisco</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}
