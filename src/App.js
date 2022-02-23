import React from 'react'
import './App.css';
import producerContacts from './contacts.json'

function App() {
  let contactsArr = producerContacts.slice(0, 5)
  const [contacts, setContacts] = React.useState(contactsArr)

  const addContact = () => {
    let arrClone = [...producerContacts]
    let filtered = arrClone.filter((celeb) => {
      if (!contacts.includes(celeb)) {
        return celeb
      }
    })
    let randomI = Math.floor(Math.random() * filtered.length - 1)
    setContacts(contacts.concat(filtered[randomI]))
  }

  const sortByName = () => {
    let cloned = [...contacts]
    cloned.sort((a, b) => a.name.localeCompare(b.name));
    setContacts(cloned)
  }

  const sortByPop = () => {
    let cloned = [...contacts]
    cloned.sort((a, b) => a.popularity - b.popularity)
    setContacts(cloned)
  }

  const deleteCeleb = (celebId) => {
    let filtered = contacts.filter(celeb => {
      return celeb.id !== celebId
    })
    setContacts(filtered)
  }
  
  return (
    <div className="App">
    <h1>IronContacts</h1>
      <button onClick={addContact} style={{
        backgroundColor: 'chocolate', 
        color: 'blanchedAlmond', margin: '10px', 
        borderRadius: '5px',
        padding: '10px'
        }}>Add Random Contact</button>
      <button onClick={sortByName} style={{
        backgroundColor: 'chocolate', 
        color: 'blanchedAlmond', margin: '10px', 
        borderRadius: '5px',
        padding: '10px'
        }}>Sort by Name</button>
      <button onClick={sortByPop} style={{
        backgroundColor: 'chocolate', 
        color: 'blanchedAlmond', margin: '10px', 
        borderRadius: '5px',
        padding: '10px'
        }}>Sort by Popularity</button>
      <table>
      <tr>
        <th style={{width: '100px'}}>Picture</th>
        <th style={{width: '100px'}}>Name</th>
        <th style={{width: '100px'}}>Popularity</th>
        <th style={{width: '100px'}}>Won Oscar</th>
        <th style={{width: '100px'}}>Won Emmy</th>
        <th style={{width: '100px'}}>Remove</th>
      </tr>
      {contacts.map((celeb) => {
          return (
            <tr style={{backgroundColor: "blanchedAlmond"}}>
              <td>
                <img src={celeb.pictureUrl} style={{height: '100px'}}/>
              </td>
              <td>
                <p>{celeb.name}</p>
              </td>
              <td>
                <p>{celeb.popularity}</p>
              </td>
              <td>
                {celeb.wonOscar ? "🏆 " : ' '}
              </td>
              <td>
                {celeb.wonEmmy ? "🏆 " : ' '}
              </td>
              <td>
                <button onClick={() => deleteCeleb(celeb.id)} style={{backgroundColor: 'chocolate', color: 'blanchedAlmond', margin: '10px', borderRadius: '5px', padding: '10px'}}>Delete</button>
              </td>
            </tr>
          )
        })
      }
      </table>
    </div>
  )
}

export default App;
