import { useEffect, useCallback, useState } from "react";
import { getLocalData, useFetchAPODRandom } from "../../hooks/useFetchData";
import CardMiniArticle from "./card_mini_article/CardMiniArticle";
import Header from "../header/Header";
import { Link } from "react-router-dom";

const MiniArticle = () => {
    const [articleRefresh, setArticleRefresh] = useState(false);
    const [articleData, setArticleData] = useState(null);
    const [articleActive, setArticleActive] = useState(null);
    const [isLocalUpdate, setIsLocalUpdate] = useState(null);
    const {loading:articleLoading} = useFetchAPODRandom("APOD_min_artc", articleRefresh, 3);
    const {data: articleDataFromLocal} = JSON.parse(localStorage.getItem("APOD_min_artc"));

    useEffect(() => {
        setIsLocalUpdate(getLocalData("today", "APOD_min_artc"))
    }, [])

    useEffect(() => {
        if(!isLocalUpdate) {
            setArticleRefresh(true);
        } else {
            setArticleData(articleDataFromLocal)
        }
    }, [isLocalUpdate]);

    useEffect(() => {
        if(!articleLoading && !isLocalUpdate) {
            setArticleData(articleDataFromLocal);
            setArticleRefresh(false);
        }
    }, [articleLoading])

    const activeHandler = useCallback((index) => {
        if(articleActive) {
            setArticleActive(null)
        } else {
            setArticleActive(index + 1)
        }
    }, [articleActive])
    return(
        <div className="mini_article">
            <div className="header_mini-artic w-full flex justify-between items-center">
                <Header 
                custom_header={`w-8/12 md:w-5/6`}
                textContent_title={'Astronomy in Pictures'}
                textContent_firstDesc={'A short explanation of what’s happening in outer space'}/>
                <div className="navigate">
                    <Link to={"/article"}>
                    <p className="text-base text-grey-1  capitalize"><span className="pr-2">more article</span><i className="bi bi-arrow-right"></i></p>
                    </Link>
                </div>
            </div>
            <div className="container_mini-article w-full h-[300px] sm:h-[400px] md:h-[500px] mt-4 flex gap-2 md:gap-4">
                {
                    articleData &&
                    articleData.map((data, index) => {
                        let isHidden;
                        if(articleActive && (articleActive - 1) !== index) {
                            isHidden = true;
                        }
                        return(
                            <CardMiniArticle 
                            key={index} 
                            index={index} 
                            articleData={data}
                            activeHandler={activeHandler}
                            articleActive={index === articleActive - 1? true : false}
                            isHidden={isHidden}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MiniArticle;

