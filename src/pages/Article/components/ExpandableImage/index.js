import React, { useState } from "react"
import './styles.scss'

export const ExpandableImage = ({ source, altText }) => {
    const [openImgModal, setOpenImgModal] = useState(false)

    const handleClick = () => {
        setOpenImgModal(!openImgModal)
    }

    return (
        <React.Fragment>
            <img className="expandable-img" src={source} alt={altText} onClick={handleClick} />
            {openImgModal && (
                <div className="img-modal">
                    <div className="container">
                        <img className="img-modal-img" src={source} alt={altText} onClick={handleClick} />
                        <i className="fas fa-times close-icon" onClick={handleClick}></i>
                    </div>
                </div>
            )}
        </React.Fragment>
    )
}
