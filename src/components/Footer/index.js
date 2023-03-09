import './styles.scss'

export const Footer = () => {
    return (
        <article className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 site-info">
                        <small>Copyright © 2023 Del Obelisco | Developed by <a href='https://damian-lopez.web.app/' target='_blank' rel='noreferrer'>Damian</a></small>
                    </div>
                    <div className="col-md-6 links">
                        <small>Made with <i className="fas fa-mug-hot"></i> and <a href='https://reactjs.org/' target='_blank' rel='noreferrer'>React.js</a></small>
                    </div>
                </div>
            </div>
        </article>
    )
}
