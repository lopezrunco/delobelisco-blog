import { BlogItem } from "./components/BlogItem"
import './styles.scss'

export const BlogList = ({ blogs }) => (
    <div className="blog-list">
        <div className="grid">
            {blogs.map((blog) =>
                (blog.published)
                    ? <BlogItem blog={blog} key={blog.id} />
                    : null
            )}
        </div>
    </div>
)
