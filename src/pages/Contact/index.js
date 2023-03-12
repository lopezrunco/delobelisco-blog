import { motion } from 'framer-motion'
import React from "react"
import { blogMenuItems } from "../../data/blog-menu"
import { Header } from '../../components/Header'
import { Footer } from "../../components/Footer"
import { ScrollTop } from "../../components/ScrollTop"
import { SiteTitle } from '../../components/SiteTitle'
import './styles.scss'

export const Contact = () => {
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
            <section id="contact" className="contact">
                <article className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <SiteTitle subtitle="If you had a good experience in this website, we want to hear about it! If you were disappointed, we want to hear about that too! Your feedback is important to us." />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.3 }}
                        viewport={{ once: true }}
                    >
                        <div className='row'>
                            <div className='col-lg-6'>
                                <h4>Please email us about:</h4>
                                <ul>
                                    <li>Typos, grammatical errors, or broken links.</li>
                                    <li>Website errors or bugs. (Actually, you should head over to our <a href='https://github.com/lopezrunco/delobelisco-blog' target='_blank' rel='noreferrer'>GitHub repo</a> to report site errors.)</li>
                                    <li>Questions about the magazine, our staff, and our authors.</li>
                                </ul>
                            </div>
                            <div className='col-lg-6'>
                                <h4>You don't need to email us about:</h4>
                                <ul>
                                    <li>Product pitches or press releases: We only publish original articles by contributors—there are no staff writers, and we do not cover products or site launches.</li>
                                    <li>Reprints, translations, and using our source code. We welcome these. Please visit Permissions & Copyright for details.</li>
                                </ul>
                            </div>
                            <div className='col-12 text-center mt-5'>
                                <a href='mailto:info@delobelisco.com' className='button'>Email us</a>
                            </div>
                        </div>
                    </motion.div>
                </article>
            </section>
            <Footer />
            <ScrollTop scrollTo={'#'} />
        </React.Fragment>
    )
}