import React from 'react'
import './App.css';
import producerContacts from './contacts.json'

function App() {
  let contactsArr = producerContacts.slice(0, 5)
  const [contacts, setContacts] = React.useState(contactsArr)
  const [ascending, setAscending] = React.useState(true);


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
    if (ascending) {
      cloned.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      cloned.sort((a, b) => b.name.localeCompare(a.name));
    }
    setContacts(cloned)
    setAscending(!ascending)
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
    <h1 style={{fontSize:'40px', color: 'cadetBlue'}}>IronContacts</h1>
      <button onClick={addContact} style={{
        backgroundColor: 'chocolate', 
        color: 'blanchedAlmond', margin: '10px', 
        borderRadius: '5px',
        padding: '10px',
        fontWeight: 'bolder'
        }}>Add Random Contact</button>
      <button onClick={sortByName} style={{
        backgroundColor: 'chocolate', 
        color: 'blanchedAlmond', margin: '10px', 
        borderRadius: '5px',
        padding: '10px',
        fontWeight: 'bolder'
        }}>Sort by Name ({ascending ? "ascending" : "descending"})</button>
      <button onClick={sortByPop} style={{
        backgroundColor: 'chocolate', 
        color: 'blanchedAlmond', margin: '10px', 
        borderRadius: '5px',
        padding: '10px',
        fontWeight: 'bolder'
        }}>Sort by Popularity</button>
      <table style={{marginLeft: '145px', marginTop: '50px'}}>
        <tbody>
          <tr>
            <th style={{width: '100px', color: 'cadetBlue', fontSize: '18px'}}>Picture</th>
            <th style={{width: '100px', color: 'cadetBlue', fontSize: '18px'}}>Name</th>
            <th style={{width: '100px', color: 'cadetBlue', fontSize: '18px'}}>Popularity</th>
            <th style={{width: '100px', color: 'cadetBlue', fontSize: '18px'}}>Won Oscar</th>
            <th style={{width: '100px', color: 'cadetBlue', fontSize: '18px'}}>Won Emmy</th>
            <th style={{width: '100px', color: 'cadetBlue', fontSize: '18px'}}>Remove</th>
          </tr>
          {contacts.map((celeb, i) => {
              return (
                <tr style={{backgroundColor: "blanchedAlmond"}} key={i}>
                  <td>
                    <img src={celeb.pictureUrl} style={{height: '100px'}}/>
                  </td>
                  <td>
                    <p style={{color: 'cadetBlue'}}>{celeb.name}</p>
                  </td>
                  <td>
                    <p style={{color: 'cadetBlue'}}>{celeb.popularity}</p>
                  </td>
                  <td>
                    {celeb.wonOscar ? "🏆 " : ' '}
                  </td>
                  <td>
                    {celeb.wonEmmy ? "🏆 " : ' '}
                  </td>
                  <td>
                    <button onClick={() => deleteCeleb(celeb.id)} style={{backgroundColor: 'chocolate', color: 'blanchedAlmond', margin: '10px', borderRadius: '5px', padding: '10px', fontWeight: 'bolder'}}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App;
