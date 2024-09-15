
// file name: SpaceSnapshot.jsx

import { useState } from "react";
import { useFetchAPODRandom } from "../../hooks/useFetchData";
import CardSpaceSnapshot from "./card_space-snapshot/CardSpaceSnapshot";
import { useEffect } from "react";
import { formattedCurrentDate } from "../../utils/dateFormatters";

const SpaceSnapshot = () => {
    const [articleRefresh, setArticleRefresh] = useState(false);
    const [articleData, setArticleData] = useState(null);
    const [articleActive, setArticleActive] = useState(null);
    // const sementara = [{
    //     copyright: "Ben Cooper",
    //     date: "2012-04-18", 
    //     explanation: "What would it be like to fly a space shuttle? Although the last of NASA's space shuttles has now been retired, it is still fun to contemplate sitting at the controls of one of the humanity's most sophisticated machines.  Pictured above is the flight deck of Space Shuttle Endeavour, the youngest shuttle and the second to last ever launched. The numerous panels and displays allowed the computer-controlled orbiter to enter the top of Earth's atmosphere at greater than the speed of sound and -- just thirty minutes later -- land on a runway like an airplane.  The retired space shuttles are now being sent to museums, with Endeavour being sent to California Space Center in Los Angeles, California, Atlantis to the  Kennedy Space Center Visitor Complex on Merritt Island, Florida, and Discovery to the Udvar-Hazy Annex of the National Air and Space Museum in Chantilly, Virginia.  Therefore sitting in a shuttle pilot's chair and personally contemplating the thrill of human space flight may actually be in your future.   Developing Gallery: Flyover of Space Shuttle Discovery atop a 747", 
    //     hdurl: "https://apod.nasa.gov/apod/image/1204/EndeavourFlightDeck_cooper_1050.jpg",
    //     media_type: "image",
    //     service_version: "v1",
    //     title: "The Flight Deck of Space Shuttle Endeavour",
    //     url: "https://apod.nasa.gov/apod/image/1204/EndeavourFlightDeck_cooper_960.jpg",
    // },
    // {
    //     copyright: "Ben Cooper",
    //     date: "2012-04-18", 
    //     explanation: "What would it be like to fly a space shuttle? Although the last of NASA's space shuttles has now been retired, it is still fun to contemplate sitting at the controls of one of the humanity's most sophisticated machines.  Pictured above is the flight deck of Space Shuttle Endeavour, the youngest shuttle and the second to last ever launched. The numerous panels and displays allowed the computer-controlled orbiter to enter the top of Earth's atmosphere at greater than the speed of sound and -- just thirty minutes later -- land on a runway like an airplane.  The retired space shuttles are now being sent to museums, with Endeavour being sent to California Space Center in Los Angeles, California, Atlantis to the  Kennedy Space Center Visitor Complex on Merritt Island, Florida, and Discovery to the Udvar-Hazy Annex of the National Air and Space Museum in Chantilly, Virginia.  Therefore sitting in a shuttle pilot's chair and personally contemplating the thrill of human space flight may actually be in your future.   Developing Gallery: Flyover of Space Shuttle Discovery atop a 747", 
    //     hdurl: "https://apod.nasa.gov/apod/image/1204/EndeavourFlightDeck_cooper_1050.jpg",
    //     media_type: "image",
    //     service_version: "v1",
    //     title: "The Flight Deck of Space Shuttle Endeavour",
    //     url: "https://apod.nasa.gov/apod/image/1204/EndeavourFlightDeck_cooper_960.jpg",
    // },
    // {
    //     copyright: "Ben Cooper",
    //     date: "2012-04-18", 
    //     explanation: "What would it be like to fly a space shuttle? Although the last of NASA's space shuttles has now been retired, it is still fun to contemplate sitting at the controls of one of the humanity's most sophisticated machines.  Pictured above is the flight deck of Space Shuttle Endeavour, the youngest shuttle and the second to last ever launched. The numerous panels and displays allowed the computer-controlled orbiter to enter the top of Earth's atmosphere at greater than the speed of sound and -- just thirty minutes later -- land on a runway like an airplane.  The retired space shuttles are now being sent to museums, with Endeavour being sent to California Space Center in Los Angeles, California, Atlantis to the  Kennedy Space Center Visitor Complex on Merritt Island, Florida, and Discovery to the Udvar-Hazy Annex of the National Air and Space Museum in Chantilly, Virginia.  Therefore sitting in a shuttle pilot's chair and personally contemplating the thrill of human space flight may actually be in your future.   Developing Gallery: Flyover of Space Shuttle Discovery atop a 747", 
    //     hdurl: "https://apod.nasa.gov/apod/image/1204/EndeavourFlightDeck_cooper_1050.jpg",
    //     media_type: "image",
    //     service_version: "v1",
    //     title: "The Flight Deck of Space Shuttle Endeavour",
    //     url: "https://apod.nasa.gov/apod/image/1204/EndeavourFlightDeck_cooper_960.jpg",
    // },]
    const localMiniArtc = JSON.parse(localStorage.getItem("APOD_min_artc"));
    const {loading:articleLoading} = useFetchAPODRandom("APOD_min_artc", articleRefresh, 3);

    useEffect(() => {
        if(!localMiniArtc) {
            console.log('exe')
            setArticleRefresh(true);
        }else if(localMiniArtc && !localMiniArtc.date === formattedCurrentDate) {
            setArticleRefresh(true);
        }
    }, [])
    useEffect(() => {
        console.log("article loading :", articleLoading);
        if(!articleLoading) {
            const {data} = JSON.parse(localStorage.getItem("APOD_min_artc"));
            setArticleData(data);
            setArticleRefresh(false);
        }
    }, [articleLoading])

    const activeHandler = (index) => {
        if(articleActive) {
            setArticleActive(null)
        } else {
            setArticleActive(index + 1)
        }
    }
    return(
        <div className="space_snapshot">
            <div className="container_space-snapshot w-full h-[300px] sm:h-[400px] md:h-[500px] flex gap-2 md:gap-4">
                {
                    articleData &&
                    articleData.map((data, index) => {
                        let isHidden;
                        if(articleActive && (articleActive - 1) !== index) {
                            isHidden = true;
                        }
                        return(
                            <CardSpaceSnapshot 
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

export default SpaceSnapshot;

