import image from '../image.png'

const NewsItem = ({title, description, src, url, author, date}) => {
    console.log(date);
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 py-2" style={{maxWidth:"330px"}}>
        <img src={src?src:image} style={{height:"200px", width:"310px"}} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,55)}..</h5>
          <p className="card-text">{description?description.slice(0,90)+"...":""}</p>
          <p className="card-text text-info"><small> By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
          <a href={url} rel="noreferrer" className="btn btn-primary" target="_blank">Readmore</a>
        </div>
      </div>
    )
}

export default NewsItem