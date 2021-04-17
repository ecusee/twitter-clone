import React, { useState } from 'react';
import './style.css'

const Trends = () => {

    const [searchInput, setSearchInput] = useState('');

    return (
        <div className='trends'>
            <div className="search-box">
                { searchInput ? null : <i class="bi bi-search"></i> }
                <input placeholder="Search Twitter" onChange={(e) => setSearchInput(e.target.value)} />
            </div>

            <div className="trends-box">
                <div className="top">
                    <span>Trends For You</span>
                    <i class="bi bi-gear"></i>
                </div>
                <div className="c-1">
                    <span className="grey-1">Trending in Turkey</span>
                    <span className="trend-text">Trend #1</span>
                    <span className="grey-2">8,123 Tweets</span>
                </div>
                <div className="c-2">
                    <span className="grey-1">Trending in Turkey</span>
                    <span className="trend-text">Trend #2</span>
                    <span className="grey-2">8,123 Tweets</span>
                </div>
                <div className="c-3">
                    <span className="grey-1">Trending in Turkey</span>
                    <span className="trend-text">Trend #3</span>
                    <span className="grey-2">8,123 Tweets</span>
                </div>
                <div className="c-4">
                    <span className="grey-1">Trending in Turkey</span>
                    <span className="trend-text">Trend #4</span>
                    <span className="grey-2">8,123 Tweets</span>
                </div>
                <div className="c-5">
                    <span className="grey-1">Trending in Turkey</span>
                    <span className="trend-text">Trend #5</span>
                    <span className="grey-2">8,123 Tweets</span>
                </div>
                <div className="bottom">
                    <a href="#">Show More</a>
                </div>
            </div>
        </div>
    )
}

export default Trends
