  
import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { Container, Button } from "nes-react";
import {Collapse} from 'react-collapse';
import {graphql, StaticQuery } from 'gatsby';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
    const [collapseStatus, toggleCollapse] = useState(false);
  const [buttonCTA, setCTA] = useState("View More");

  const toggle = () => {
    toggleCollapse(!collapseStatus);
    if (collapseStatus === false) {
      setCTA("View Less");
    }
    else {
      setCTA("View More");
    }
  }

    return (
    <StaticQuery
    query={graphql`{
  allWordpressWpPortfolio {
    nodes {
      title
      content
      acf {
        item_priority
        item_url
      }
      id
      featured_media {
        source_url
      }
    }
  }
}`}
    render={props => {
        const primaryItems = props.allWordpressWpPortfolio.nodes.filter(item => item.acf.item_priority === 'Primary');
        const secondaryItems = props.allWordpressWpPortfolio.nodes.filter(item => item.acf.item_priority === 'Secondary');
        return (
            <Container title="Portfolio" dark>
      <div className="waterfallGrid">
      {
            primaryItems.map(item =>
                <Fade bottom key={item.id}>
              <Container dark> 
            <PortfolioItem item={item} />
            </Container>
            </Fade>
            )
        }</div>
        <div className="portfolioButtonContainer">
      <Button onClick={toggle}>{buttonCTA}</Button>
      </div>
      <Collapse isOpened={collapseStatus}>
      <div className="waterfallGrid">
      {secondaryItems.map((item) => {
          return (
            <Fade bottom key={item.id} >
              <Container dark>
              <PortfolioItem item={item} />
              </Container>
            </Fade>
          );
        })}
        </div>
</Collapse>
        </Container>
    )}
    }
    ></StaticQuery>
)};

export default Portfolio;