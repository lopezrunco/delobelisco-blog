import { Link } from 'react-router-dom'
import './styles.scss'

export const BlogItem = ({
    blog: {
        id,
        title,
        author,
        date,
        imgSrc
    },
}) => {
    return (
        <div className="blog-item">
            {/* Generate a dinamic route using the id */}
            <Link to={`/${id}`}>
                <div className="content">
                    <h5 className="title">{title}</h5>
                    <div className="info">
                        <small className="author"><i className="fas fa-user icon"></i>by {author}</small>
                        <small className="date"><i className="fas fa-calendar icon"></i>{date}</small>
                    </div>
                </div>
            </Link>
        </div>
    )
}
