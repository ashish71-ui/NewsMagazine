import image from '../assets/news.jpg'
const NewsItem = ({ title, description, src, url }) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-4 px-2 py-2" style={{ maxWidth: "300px" }}>
            <img src={src?src:image} className="card-img-top" style={{ height: "200px", width: "290px" }} alt="News" />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0, 50)}</h5>
                <p className="card-text">{description ? description.slice(0, 90) : "Description not availale for now"}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    );
}

export default NewsItem;
