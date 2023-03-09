import './styles.scss'

export const NotFoundMessage = () => {
    return (
        <article className='container'>
            <div className='row not-found'>
                <div className='col-xl-5'>
                    <h1>404!</h1>
                </div>
                <div className='col-xl-7'>
                    <h2>It seems you're lost!</h2>
                    <p>The page you're looking for has either been moved or removed from the site. <br />Please return to the main page and try again.</p>
                    <a className='button' href='/'>Home</a>
                    {/* <a className='button mx-2' href='/blog'>Blog</a> */}
                </div>
            </div>
        </article>
    )
}
