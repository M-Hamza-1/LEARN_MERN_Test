
import { FileDownload } from "@mui/icons-material";
import "./App.css";
import CloseIcon from "@mui/icons-material/Close";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";
import InfoIcon from "@mui/icons-material/Info";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
function App() {
  const tagArray = [
    "Animals in the wild",
    " wild",
    "Animals ",
    "Animals in the wild",
    "wild",
    "Animals ",
    "Animals in the wild",
    "Animals ",
    "Animals ",
    "Animals",
    "wild",
    " wild",
  ];
  return (
    <>
      <div className="Task-Conatiner">
        <div className="Task-Container__img">
          <span>
            <CloseIcon className="popup__close" />
          </span>
          <img
            src="https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636__480.jpg"
            alt="Popup image"
            className="popup__img"
          />

          <div className="icon">
            <span className="share" style={{ color: "white" }}>
              <Button
                variant="outlined"
                startIcon={<ShareIcon />}
                className="icon-btn"
              >
                Delete
              </Button>
            </span>
            <span className="info">
              <Button
                variant="outlined"
                startIcon={<InfoIcon />}
                className="icon-btn"
              >
                Delete
              </Button>
            </span>
          </div>
          <button className="popup__download">Download image</button>
        </div>

        <div class="Task-Container__content">
          <div className="userDetails">
            <div className="user">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBCQkJ9H19piIgHPU_JNyHdFiRcDSGjbhDRCBkVHg&s"
                alt="profile img"
                className="profile"
              />
              <div className="userName">
                <p>Jacob Jones</p>
                <i className="userName_i">@jacobclicks</i>
              </div>

              <div className="userLinks">
                <i className="userLink__i">
                  <InstagramIcon />
                  /jacobclicks
                </i>
                <i className="userLink__i">
                  <TwitterIcon />
                  <span> /jacobclicks</span>
                </i>
              </div>
            </div>

            <div className="userLikes">
              <span className="span-1">1.2K downloads</span>
              <span className="span-2">
                <ThumbUpOffAltIcon /> 2.3K
              </span>
            </div>
          </div>

          <div className="tags">
            <h5>Related Tags</h5>
            {/* <div className="tag__text">
              {string.map((text, idx) => (
                <p className="tags-title" key={idx}>
                  {text}
                </p>
              ))}
            </div> */}
            <div className="title-div">
              {tagArray.map((item, idx) => (
                <p className="tags-title">{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
