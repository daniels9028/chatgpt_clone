import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>ChatGPT</p>
        <img src={assets.user_icon} alt="user_icon" />
      </div>

      <div className="main-container">
        {showResult && (
          <>
            <div className="result">
              <div className="result-title">
                <img src={assets.user_icon} alt="user-icon" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="gemini_icon" />
                {loading && (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                )}
                {!loading && (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          </>
        )}

        {!showResult && (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="compass_icon" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="bulb_icon" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="message_icon" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="code_icon" />
              </div>
            </div>
          </>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here"
              name="search"
              id="search"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <div>
              <img src={assets.gallery_icon} alt="gallery_icon" />
              <img src={assets.mic_icon} alt="mic_icon" />
              {input && (
                <img
                  src={assets.send_icon}
                  alt="send_icon"
                  onClick={() => onSent()}
                />
              )}
            </div>
          </div>
          <p className="bottom-info">
            God has a purpose for our life before we ever had a plan for
            ourselves
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
