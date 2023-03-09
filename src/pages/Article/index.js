import { motion } from 'framer-motion'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { blogList } from '../../data/blog'
import { blogMenuItems } from '../../data/blog-menu'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ScrollTop } from '../../components/ScrollTop'
import { ExpandableImage } from './components/ExpandableImage'
import { NotFoundMessage } from '../../components/NotFoundMessage'
import './styles.scss'

export const Article = () => {
    const { id } = useParams()
    const [blog, setBlog] = useState(null)

    useEffect(() => {
        let blog = blogList.find(blog => blog.id === parseInt(id))
        if (blog) setBlog(blog)
    }, [id])

    return (
        <React.Fragment>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .5 }}
                viewport={{ once: true }}
            >
                <Header menuItems={blogMenuItems} />
            </motion.div>
            <section className='article'>
                {blog ? (
                    <article className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}
                                >
                                    <h1 className='title'>{blog.title}</h1>
                                    <div className='breadcrumbs d-none d-md-flex'>
                                        <Link to='/'>Home</Link>
                                        <i className="fas fa-caret-right"></i>
                                        <span>{blog.title}</span>
                                    </div>
                                    <div className='breadcrumbs d-md-none'>
                                        <Link to='/'>Back to home</Link>
                                    </div>
                                </motion.div>
                                <div className='content'>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1.3 }}
                                        viewport={{ once: true }}
                                    >
                                        <img className='main-img' src={`../assets/blog/${blog.imgSrc}`} alt={blog.title} />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1 }}
                                        viewport={{ once: true }}
                                    >
                                        <p>{blog.description}</p>
                                        {blog.quotes
                                            ? blog.quotes.map((quoteEl, quoteI) => (
                                                <p className='quote' key={quoteI}>{quoteEl}</p>))
                                            : null}
                                    </motion.div>
                                    {blog.secondaryImgsSrc
                                        ? <div className='secondary-imgs'>
                                            {blog.secondaryImgsSrc.map((secImgSrcEl, secImgSrcElI) => (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 1 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <ExpandableImage
                                                        key={secImgSrcElI}
                                                        source={`../assets/blog/${secImgSrcEl}`}
                                                        altText={blog.title}
                                                    />
                                                </motion.div>
                                            ))}
                                        </div>
                                        : null}
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className='info'>
                                        <div className='tags'>
                                            {blog.tags.map((tagEl, tagIdx) => (
                                                <span key={tagIdx}>{tagEl}</span>
                                            ))}
                                        </div>
                                        <div className='author-date'>
                                            <small><i className="fas fa-user"></i> Author: {blog.author}</small>
                                            <small><i className="fas fa-calendar"></i> Date: {blog.date}</small>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </article>
                ) : (
                    <NotFoundMessage />
                )}
            </section>
            <Footer />
            <ScrollTop scrollTo={'#'} />
        </React.Fragment>
    )
}
