import { motion } from 'framer-motion'
import React, { useState } from "react"
import { blogList } from "../../data/blog"
import { blogMenuItems } from "../../data/blog-menu"
import { Header } from '../../components/Header'
import { BlogList } from "../../components/BlogList"
import { SearchBar } from '../../components/SearchBar'
import { Footer } from "../../components/Footer"
import { ScrollTop } from "../../components/ScrollTop"
import { SiteTitle } from '../../components/SiteTitle'

export const Blog = () => {
    const [blogs, setBlogs] = useState(blogList)
    const [searchKey, setSearchKey] = useState('')

    const handleSearchSubmit = event => {
        event.preventDefault()
        handleSearchResults()
    }

    const handleSearchResults = () => {
        const allBlogs = blogList
        // Filter matching the title of the blog data items and the cleaned input value
        const filteredBlogs = allBlogs.filter((blog) =>
            blog.title.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase().trim())
        )
        setBlogs(filteredBlogs)
    }

    // Handle an empty value on the input
    const handleClearSearch = () => {
        setBlogs(blogList)
        setSearchKey('')
    }

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
            <section id="blog" className="blog">
                <article className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <SiteTitle subtitle='Just one more blog where a random human from Camino al Obelisco - Uruguay, writes about his experiences on this godless piece of rock called Earth.' />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <SearchBar
                            value={searchKey}
                            clearSearch={handleClearSearch}
                            formSubmit={handleSearchSubmit}
                            handleSearchKey={(e) => setSearchKey(e.target.value)}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.3 }}
                        viewport={{ once: true }}
                    >
                        {!blogs.length ?
                            <React.Fragment>
                                <h2>No articles founded</h2>
                                <p>Please, try something different...</p>
                            </React.Fragment> :
                            <BlogList blogs={blogs} />
                        }
                    </motion.div>
                </article>
            </section>
            <Footer />
            <ScrollTop scrollTo={'#'} />
        </React.Fragment>
    )
}
