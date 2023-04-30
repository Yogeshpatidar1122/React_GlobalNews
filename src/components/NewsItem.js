import React from 'react'

const NewsItem =(props)=> {
    
        let { title, description, ImageUrl, newsUrl,author,date,source } = props
        let imgUrl = "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1520x800.webp"
        return (
            <div className='my-3'>
                <div className="card">
                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"85%",zIndex:"1"}}>{source}</span>
                    <img src={ImageUrl ? ImageUrl: imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>

                        <p className="card-text">{description}...</p>
                        <div className="card-footer">
                            <small className="text-muted">by <strong>{author ? author:"Unknown"} </strong>,{new Date(date).toGMTString()}</small>
                        </div>
                        <a href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }

    export default NewsItem 


