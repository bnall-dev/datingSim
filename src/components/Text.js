import React from 'react';

const Text = ({
  view,
  setView,
  currentLocation,
  inventory,
  lookItem,
  setLookItem,
  lookObject,
  contacts,
  caseFiles,
}) => {
  const inventoryList = inventory.map((item, i) => (
    <li
      key={i}
      className="inventoryItem"
      onClick={() => {
        setLookItem(item);
        setView('lookItem');
      }}
    >
      <b>{item.menuName}</b>
    </li>
  ));

  const contactList = contacts.map((contact, i) => {
    if (contact) {
      return (
        <li key={i} className="contactItem">
          <b>{contact.name}</b>
        </li>
      );
    }
  });

  const caseFileList = caseFiles.map((file, i) => {
    if (file) {
      return (
        <li key={i} className="caseFilesItem">
          <h3>
            #{i} {file.title}
          </h3>
        </li>
      );
    }
  });

  const openContacts = () => {
    setView('contacts');
  };
  const openCaseFiles = () => {
    setView('caseFiles');
  };

  return (
    <div id="textBox">
      {view === 'startMenu' && (
        <div id="startTextBox">
          <h2>Select an Option.</h2>
        </div>
      )}
      {view === 'gameplay' && (
        <div id="gameplayText">
          {currentLocation.district && (
            <h3>
              <b>{currentLocation.district}</b>
            </h3>
          )}
          <br />
          <h2>
            <b>{currentLocation.name}</b>
          </h2>
          <br />

          {currentLocation.description}
        </div>
      )}
      {view === 'gameMenu' && (
        <div id="gameMenuBox">
          <h2>
            <b>Menu</b>
          </h2>
        </div>
      )}
      {view === 'inventory' && (
        <div id="inventory">
          <h2>
            <b>Briefcase</b>
          </h2>
          <br />
          <p>{inventoryList}</p>
        </div>
      )}
      {view === 'phone' && (
        <div id="phone">
          <h2>
            <b>Phone</b>
          </h2>
          <br />
          <h3 className="phoneApp" onClick={openContacts}>
            Contacts
          </h3>
          <br />
          <h3 className="phoneApp" onClick={openCaseFiles}>
            Case Files
          </h3>
          <br />
          <h3>GPS</h3>
          <br />
          <h3>Photos</h3>
          <br />
          <h3>Sindr</h3>
        </div>
      )}
      {view === 'contacts' && (
        <div id="contacts">
          <h2>
            <b>Contacts</b>
          </h2>
          <br />
          <p>{contactList}</p>
        </div>
      )}
      {view === 'caseFiles' && (
        <div id="caseFiles">
          <h2>
            <b>Case Files</b>
          </h2>
          <br />
          {caseFileList}
        </div>
      )}
      {view === 'lookItem' && (
        <div id="lookBox">
          <h2>
            <b>{lookItem.menuName}</b>
          </h2>

          <h2>
            <b>{lookItem.dialogueName}</b>
          </h2>

          <br />
          <p>{lookItem.description}</p>
        </div>
      )}
      {view === 'lookObject' && (
        <div id="lookBox">
          <h2>
            <b>{lookObject.name}</b>
          </h2>

          <br />
          <p>{lookObject.description}</p>
          <br />
          <p>{lookObject.lookDialogue}</p>
        </div>
      )}
    </div>
  );
};

export default Text;
