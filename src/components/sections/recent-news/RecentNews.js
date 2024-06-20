import React from "react";
import "./RecentNews.css";
import Card from "../../cards/Card";

function RecentNews() {
  const newsCardData = [
    {
      className: "NewsCard",
      NewsDate: "31",
      NewsMonth: "October",
      NewsTitle: "Market News1",
      NewsContent:
        "The Savola Group invites its shareholders to attend the Ordinary General Assembly Meeting No.(43)......",
      NewsLink: "https://www.savola.com/en",
    },
    {
      className: "NewsCard",
      NewsDate: "31",
      NewsMonth: "October",
      NewsTitle: "Market News2",
      NewsContent:
        "The Savola Group Announces to its Shareholders the Commencement Date.....",
      NewsLink: "https://www.savola.com/en",
    },
    {
      className: "NewsCard",
      NewsDate: "31",
      NewsMonth: "October",
      NewsTitle: "Market News3",
      NewsContent:
        "General Assembly Meeting No.(43) (First Meeting) via modern technology means......",
      NewsLink: "https://www.savola.com/en",
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="recent-news-wrapper">
          <span>Recent NEWS</span>
          <h3>ANNOUNCEMENTS AND LATEST NEWS</h3>
          <p>
            Proprietary data, expert analysis and provocative points of view for
            leaders seeking sustained, profitable growth points of view for
            leaders seeking sustained, profitable growth.
          </p>
        </div>
        <div className="NewsCardWrapper">
          {
            newsCardData.map((data)=>(
              <Card className={data.className} NewsDate={data.NewsDate} NewsMonth={data.NewsMonth} title={data.NewsTitle} content={data.NewsContent} redirection={data.NewsLink}/>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default RecentNews;
