import React from 'react';
import './RecentNewsBlock.css';
import news_item_img_1 from '../assets/images/news-item-1.png';
import news_item_img_2 from '../assets/images/news-item-2.png';
import news_item_img_3 from '../assets/images/news-item-3.png';
import news_item_img_4 from '../assets/images/news-item-4.png';
function RecentNewsBlock(){
  return(
    <>
      <section className="recent-news">
        <div className="title">
          <h2>Recent News</h2>
        </div>
        <div className="container">
          <article className="news-item">
            <img className="image" src={news_item_img_1} alt="NewsItem"/>
            <div className="content">
              <h5 className="date">24th October 2021</h5>
              <h3 className="title">Lorem Ipsum is simply dummy text</h3>
              <p className="description">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
              <span className="more-details">more <i className="fas fa-long-arrow-right"></i></span>
            </div>
            
          </article>
          <article className="news-item">
            <img className="image" src={news_item_img_2} alt="NewsItem"/>
            <div className="content">
              <h5 className="date">24th October 2021</h5>
              <h3 className="title">Lorem Ipsum is simply dummy text</h3>
              <p className="description">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
              <span className="more-details">more <i className="fas fa-long-arrow-right"></i></span>
            </div>
          </article>
          <article className="news-item">
            <img className="image" src={news_item_img_3} alt="NewsItem"/>
            <div className="content">
              <h5 className="date">24th October 2021</h5>
              <h3 className="title">Lorem Ipsum is simply dummy text</h3>
              <p className="description">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
              <span className="more-details">more <i className="fas fa-long-arrow-right"></i></span>
            </div>
            
          </article>
          <article className="news-item">
            <img className="image" src={news_item_img_4} alt="NewsItem"/>
            <div className="content">
              <h5 className="date">24th October 2021</h5>
              <h3 className="title">Lorem Ipsum is simply dummy text</h3>
              <p className="description">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
              <span className="more-details">more <i className="fas fa-long-arrow-right"></i></span>
            </div>
          </article>
        </div>
      </section>  
    </>
  );
}

export default RecentNewsBlock;