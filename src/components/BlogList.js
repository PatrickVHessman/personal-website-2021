import React, { useState, useEffect } from "react";
import { Container } from "nes-react";
import { Link } from 'gatsby';

const BlogList = (props) => {
  const [currentPage, setCurrentPage] =  useState(1);
  const [currentPageArray, setCurrentPageArray] = useState([]);
  const [slug, setSlug] = useState('blog')
  const numOfPages =  Math.ceil(props.posts.length / props.postsPerPage);

  const getPaginatedData = (num) => {
    if (props.source==='index') {
      setSlug(`blog/`);
    }
    else if (props.source==='blogPage') {
      setSlug(``)
    }
    let startIndex;
    startIndex = Math.floor(num * props.postsPerPage) - props.postsPerPage;
    const endIndex = startIndex + props.postsPerPage;
    const arr = props.posts.slice(startIndex, endIndex);
    return setCurrentPageArray(arr);
  };

  useEffect(() => {
    getPaginatedData(currentPage);
  }, [currentPage,getPaginatedData,props.source,slug])


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
    return null;
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
      <div className="font12">
        {currentPageArray.map( (post, index) => <div key={index} className="blogListContainer">
        <div className="blogListContainerLeft"><img src={post.featured_media.source_url} style={{width: '100%'}} /></div>
        <div className="blogListContainerRight">
        <div style={{fontWeight: 'bold'}}><Link to={slug + `${post.slug}`} dangerouslySetInnerHTML={{__html: post.title}} /></div>
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

