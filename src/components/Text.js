import React from 'react';
import store from '../store.js';
import caseFiles from '../../db/caseFiles.js';
import cutscenes from '../../db/cutscenes.js';
import { examineItem, examineCaseFile } from '../../db/functions.js';
import { changeView } from '../../db/actions.js';

const Text = ({
  view,
  currentLocation,
  inventory,
  lookItem,
  lookObject,
  contacts,
  lookBuilding,
  lookCaseFile,
  currentScene,
  sceneText,
}) => {
  const inventoryList = inventory.map((item, i) => (
    <li
      key={i}
      className="inventoryItem"
      onClick={() => {
        examineItem(item);
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

  const caseFileList = caseFiles.map((caseFile, i) => {
    if (caseFile) {
      return (
        <li key={i} onClick={examineCaseFile} className="caseFilesItem">
          <h3>{caseFile.title}</h3>
        </li>
      );
    }
  });

  const openContacts = () => {
    store.dispatch(changeView('contacts'));
  };
  const openCaseFiles = () => {
    store.dispatch(changeView('caseFiles'));
  };

  return (
    <div id="textBox">
      {view === 'startMenu' && (
        <div id="startTextBox">
          <h2>Select an Option.</h2>
        </div>
      )}
      {view === 'cutscene' && (
        <div id="cutsceneTextBox">
          <p>{currentScene.text[sceneText]}</p>
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
          <br />
          <p>What do you want to do?</p>
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
      {view === 'lookCaseFile' && (
        <div id="lookCaseFile">
          <h2>
            <b>{lookCaseFile.title}</b>
          </h2>
          <br />
          <p>{lookCaseFile.content}</p>
        </div>
      )}
      {view === 'lookItem' && (
        <div id="lookBox">
          <h2>
            <b>{lookItem.menuName}</b>
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
      {view === 'lookBuilding' && (
        <div id="lookBox">
          <h2>
            <b>{lookBuilding.name}</b>
          </h2>

          <br />
          {lookBuilding.description}
        </div>
      )}
    </div>
  );
};

export default Text;
