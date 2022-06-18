import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div>
        <Header />
        <Contact
          name={contacts[0].name}
          phone={contacts[0].phone}
          email={contacts[0].email}
          photo={contacts[0].photo}
        />
        <Contact
          name={contacts[1].name}
          phone={contacts[1].phone}
          email={contacts[1].email}
          photo={contacts[1].photo}
        />
        <Contact
          name={contacts[2].name}
          phone={contacts[2].phone}
          email={contacts[2].email}
          photo={contacts[2].photo}
        />
        <Contact
          name={contacts[3].name}
          phone={contacts[3].phone}
          email={contacts[3].email}
          photo={contacts[3].photo}
        />
        <Contact
          name={contacts[4].name}
          phone={contacts[4].phone}
          email={contacts[4].email}
          photo={contacts[4].photo}
        />
        <Contact
          name={contacts[5].name}
          phone={contacts[5].phone}
          email={contacts[5].email}
          photo={contacts[5].photo}
        />
      </div>
    </div>
  );
}

export default App;
