import React from 'react';

const NewsItem = (props)=> {
  
    let { title, description, imageUrl, newsUrl,author,date, source } = props;
    return (
      <div className='my-3'>
        {/* <p class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> {source}</p> */}
        <div className="card">
          <div style={{display: 'flex',  justifyContent:'flex-end',position:'absolute',right:'0' }}>
          <p class="badge rounded-pill bg-danger"> {source}</p>
          </div>
        {/* <p class="badge rounded-pill bg-danger" style={{left: '90%', zIndex:'1'}}> {source}</p> */}
          <img src={!imageUrl ? "https://s.yimg.com/ny/api/res/1.2/h7RBt73vMgPLHyynzmp5uw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03OTg-/https://media.zenfs.com/en/the_cool_down_737/39758bc34cdc82de6ea5b83d14b5a97b" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}  </h5>
            
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {author? author:"Unkonown author"} on {new Date(date).toGMTString()}</small></p>
              <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
