import React from "react";
import Ticket from "./../components/ticket/ticket";
import ProfileIcon from "./../components/profileIcon/profileicon";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { updateTicketList } from "./../actions";
import archiveIcon from "./../images/archive.png";
import clockIcon from "./../images/clock.png";

const HomePage = (props) => {
  const options = [
    "Buy a product",
    "Cancel an account",
    "Buy and Recommend a gift",
    "Ask for the business",
  ];
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.ticket);
  const uuidv4 = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
      c
    ) {
      var r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };
  const [content, setContent] = React.useState({
    _id: uuidv4(),
    Title: "",
    Assignee: "",
    Status: "new",
    Goal: "",
  });
  const [number, setNumber] = React.useState(25);
  const [disable, setDisable] = React.useState(true);
  const [textarea, settextarea] = React.useState("");
  const textareaRef = React.useRef();
  const handleChange = (e) => {
    setContent({ ...content, Goal: options[e.target.value - 1] });
  };

  const handleSubmit = () => {
    const newList = [...tickets, content];
    dispatch(updateTicketList(newList));
    setContent({
      _id: uuidv4(),
      Title: "",
      Assignee: "",
      Status: "new",
      Goal: "",
    });
    setDisable(false);
  };

  return (
    <div className="homepage">
      <div className="left-panel">
        <ProfileIcon />
        {tickets.length !== 0 &&
          tickets.map((ticket, index) => {
            return <Ticket key={index} data={ticket} />;
          })}
      </div>
      <div className="mid-panel">
        <h2 className="title">Classify</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <label>
            <p>What's the user asking for?</p>
            <select
              onChange={(e) => handleChange(e)}
              value={
                options.indexOf(content.Goal) === -1
                  ? 0
                  : options.indexOf(content.Goal) + 1
              }
            >
              <option value={0} disabled hidden>
                Select
              </option>
              {options &&
                options.map((option, index) => {
                  return (
                    <option key={index + 1} value={index + 1}>
                      {option}
                    </option>
                  );
                })}
            </select>
          </label>
          <label>
            <p>Task name(as shown to the user)</p>
            <input
              placeholder={
                content.Goal.length === 0
                  ? ""
                  : content.Goal.split(" ")[0] + " what?"
              }
              value={content.Title}
              onChange={(text) => {
                setContent({ ...content, Title: text.target.value });
                setNumber(25 - text.target.value.length);
              }}
              disabled={content.Goal.length === 0}
            />
          </label>
          <p>
            (Characters left:{" "}
            <span className={number < 0 ? "error" : ""}>{number}</span> )
          </p>
          <input
            type="submit"
            value="Proceed"
            disabled={
              content.Goal.length === 0 ||
              content.Title.length === 0 ||
              content.Title.length > 25
            }
          />
        </form>
      </div>
      <div className="right-panel">
        <div>
          <div className="top-section">
            <h2>New Task</h2>
            <div className="top-section-right">
              <p>00:00</p>
              <img src={clockIcon} alt="clockicon" />
              <img src={archiveIcon} alt="archiveicon" />
            </div>
          </div>
          <div className="mid-section">
            <div className="message">
              <p>I would like to do something (first msg in the task)</p>
            </div>
            <div className="detail">
              <span />
              <p>Wesley Wong, 11:42 am(via email)</p>
            </div>
          </div>
        </div>

        <div className="bottom-section">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              settextarea("");
            }}
          >
            <label>
              <textarea
                placeholder="Type a message"
                value={textarea}
                onChange={(text) => settextarea(text.target.value)}
                disabled={disable}
                ref={textareaRef}
                onFocus={() => {
                  textareaRef.current.style.height = "150px";
                  textareaRef.current.style.lineHeight = "150px";
                }}
                onBlur={() => {
                  textareaRef.current.style.height = "100px";
                  textareaRef.current.style.lineHeight = "100px";
                }}
              />
            </label>
            <input type="submit" value="Submit" disabled={disable} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
