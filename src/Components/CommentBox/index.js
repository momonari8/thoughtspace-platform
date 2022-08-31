import React, { useRef } from "react";
import Commentbox from "./CommentBoxInput";
import Comment from "./Comment";

function CommentWrapper(props) {
  const EditorRef = useRef();

  const handleReply = () => {
    EditorRef?.current.focus();
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="commen-wrapper">
        <div className="comment-wrapper-sec">
          <div className="comment-wrapper-content">
            <h1
              style={{
                fontSize: "12px",
                fontWeight: "400",
                margin: "  0px 0 0 33px",
                paddingTop: "10px",
              }}
            >
              Comment as{" "}
              <span style={{ color: "#47ACDF" }}>Base02Programmer</span>
            </h1>
            <Commentbox EditorRef={EditorRef} />
            <p
              style={{
                fontSize: "15px",
                color: "#47ACDF",
                margin: "  0px 0 0 33px",
                position: "relative",
                zIndex: 99999999999,
              }}
            >
              {" "}
              <select
                name=""
                id=""
                className="select-itd"
                style={{
                  border: "none",
                  background: "transparent",
                  appearance: "none",
                  color: " rgb(71, 172, 223)",
                }}
              >
                <option value=""> Sort By : Best</option>
                <option value=""> Sort By : Latest</option>
              </select>{" "}
            </p>
            {props?.data?.map((item, index) => {
              return (
                <>
                  <Comment
                    ProfileAvatar={item?.ProfileAvatar}
                    ProfileName={item?.ProfileName}
                    Upvotes={item?.Upvotes}
                    Time={item?.Time}
                    TwitterID={item?.TwitterID}
                    TwitterFollowers={item?.TwitterFollowers}
                    Comment={item?.Comment}
                    handleReply={handleReply}
                  />
                  <div style={{ marginLeft: "10%" }}>
                    {item?.Reply?.map((v) => {
                      return (
                        <Comment
                          reply={true}
                          ProfileAvatar={v?.ProfileAvatar}
                          ProfileName={v?.ProfileName}
                          Upvotes={v?.Upvotes}
                          Time={v?.Time}
                          TwitterID={v?.TwitterID}
                          TwitterFollowers={v?.TwitterFollowers}
                          Comment={v?.Comment}
                        />
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default CommentWrapper;
