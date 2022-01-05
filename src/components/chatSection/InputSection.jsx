import React, {useState} from 'react';

const InputSection = () => {
  const [newMessage, setNewMessage] = useState("")

  const sendMessage = () => {
    console.log(newMessage)
    setNewMessage("")
  }

  return (
    <div className="p-3 p-lg-4 border-top mb-0">
      <div className="row no-gutters">
        <div className="col">
          <div>
            <input
              value={newMessage}
              onKeyPress={e => {
                if (e.key === "Enter") {
                  sendMessage()
                }
              }}
              onChange={e => setNewMessage(e.target.value)}
              type="text" className="form-control form-control-lg bg-light border-light"
              placeholder="Enter Message..."/>
          </div>
        </div>
        <div className="col-auto">
          <div className="chat-input-links ml-md-2">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <button type="button"
                        className="btn btn-link text-decoration-none font-size-16 btn-lg waves-effect"
                        data-toggle="tooltip" data-placement="top" title="Emoji">
                  <i className="ri-emotion-happy-line"/>
                </button>
              </li>
              <li className="list-inline-item">
                <button type="button"
                        className="btn btn-link text-decoration-none font-size-16 btn-lg waves-effect"
                        data-toggle="tooltip" data-placement="top" title="Attached File">
                  <i className="ri-attachment-line"/>
                </button>
              </li>
              <li className="list-inline-item">
                <button type="submit"
                        onClick={sendMessage}
                        className="btn btn-primary font-size-16 btn-lg chat-send waves-effect waves-light">
                  <i className="ri-send-plane-2-fill"/>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputSection;
