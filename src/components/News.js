import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
// import { useAsyncError } from 'react-router-dom';



const News =(props)=> {

        const [articles , setArticles] = useState([]); 
        const [loading , setLoading] = useState(true); 
        const [page , setPage] = useState(1); 
        const [totalResults, setTotalResults] = useState(0); 
    
        document.title = `${props.category}- GlobalNews `;
    
   const updateNews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(40);
        let parsedData = await data.json();
        console.log(parsedData);
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);

    }
    useEffect(() => {
        updateNews();
        // eslint-disable-next-line
      },[]);
    
    //   we use infinite scroll so no need of this buttons 
//      const handlePrevClick = async () => {
//         setPage( page - 1);
//         updateNews();

//     }
//     const handleNextClick = async () => {
//         setPage( page + 1);
//         updateNews();
//   }
    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage( page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles (articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults)
        
    }
 
        return (
            <>
                
                    <h1 className='heading  text-center' style={{ padding: "10px",marginTop:"70px"}}>GlobalNews-Top {props.category} Headlines.</h1>
                    {loading && <Spinner />}
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                        loader={<Spinner />}
                    >
                        <div className="container">
                            <div className='row my-3'>
                                {!loading && articles.map((element) => {
                                    return <div className='col-md-4' key={element.url}>
                                        <NewsItem title={element.title ? element.title.slice(0, 40) : " "} description={element.description ? element.description.slice(0, 90) : " "} ImageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}
                                            source={element.source.name} />
                                    </div>
                                })}
                            </div>
                        </div>
                    </InfiniteScroll>
                
            </>
        )
    }



        News.defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general"
    }
    News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    }

export default News


