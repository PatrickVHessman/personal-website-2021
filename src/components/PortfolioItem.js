import React from 'react';

const PortfolioItem = (props) => (<div style={{ textAlign: "center", margin: "2rem" }}>
<h5>
  <a href={props.item.acf.item_url} target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{__html: props.item.title}} />
</h5>
<div className="font12" dangerouslySetInnerHTML={{__html: props.item.content}} />
<a href={props.item.acf.item_url} target="_blank" rel="noopener noreferrer">
  <img
    src={props.item.featured_media.source_url}
    className="opacityHover"
    alt={props.item.title}
    style={{ width: "100%" }}
  />
</a>
</div>);

export default PortfolioItem;