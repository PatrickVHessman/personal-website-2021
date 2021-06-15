import React, { useState, useEffect } from "react";
import { Container } from "nes-react";
import { Link } from 'gatsby';

const BlogList = (props) => {
  const postsPerPage = 2;
  const [currentPage, setCurrentPage] =  useState(1);
  const [currentPageArray, setCurrentPageArray] = useState([]);
  const numOfPages =  Math.ceil(props.posts.length / postsPerPage);

  const getPaginatedData = (num) => {
    let startIndex;
    startIndex = Math.floor(num * postsPerPage) - postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const arr = props.posts.slice(startIndex, endIndex);
    return setCurrentPageArray(arr);
  };

  useEffect(() => {
    getPaginatedData(currentPage);
  }, [])


const pageBack = () => {
  if (currentPage > 1) {
    const num = currentPage - 1;
    setCurrentPage(num);
    getPaginatedData(num);
  }
}

const pageForward = () => {
  if (currentPage !== numOfPages) {
    const num = currentPage + 1;
    setCurrentPage(num);
    getPaginatedData(num);
  }
}

const PageControls = () => {
  if (numOfPages <= 1) {
    return <div />
  }
  else {
    return <div style={{display: 'flex', justifyContent: 'space-between'}}>
    <div onClick={() => pageBack()}>«</div>
        <div onClick={() => pageForward()}>»</div>
        </div>
  }
}

return <Container dark title="Blog Posts">
 <div >
  <h2>{currentPage}</h2>
      <div className="font12">
        {currentPageArray.map( (post, index) => <div key={index} className="blogListContainer">
        <div className="blogListContainerLeft"><img src={post.featured_media.source_url} style={{width: '100%'}} /></div>
        <div className="blogListContainerRight">
        <div style={{fontWeight: 'bold'}}><Link to={`blog/${post.slug}`} dangerouslySetInnerHTML={{__html: post.title}} /></div>
        <div><small>{post.date}</small></div>
        <div dangerouslySetInnerHTML={{__html: post.excerpt}} />
        </div>
        </div>
        )}
        </div>
    <PageControls />
    </div>

</Container>
}

export default BlogList;

