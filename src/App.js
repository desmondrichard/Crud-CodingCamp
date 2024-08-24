import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Create from './Components/Create';
import Home from './Components/Home';
import { v4 as uuid } from 'uuid';
import Update from './Components/Update';


function App() {
  const [postData, setPostData] = useState(true);

  const [users, setUsers] = useState([
    {
      id: "1",
      Name: "tom",
      Email: "tom@gmail.com",
      MobileNumber: "872782",
      Age: 20
    },
    {
      id: "2",
      Name: "des",
      Email: "des@gmail.com",
      MobileNumber: "123455",
      Age: 27
    },
    {
      id: "3",
      Name: "dos",
      Email: "dos@gmail.com",
      MobileNumber: "6527367",
      Age: 30
    },
  ])

  // Modal:
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Post:
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted")
    const ids = uuid();
    let uni = ids.slice(0, 8);

    if (name !== "" && email !== "" && mobile !== "" && age !== "") {
      const newUser = { id: uni, Name: name, Email: email, MobileNumber: mobile, Age: age }
      const appendUser = [...users, newUser];
      setUsers(appendUser)
      console.log("appendUser", appendUser);
    }

    setShow(false);// to close modal
  }

  // Delete:
  function handleDelete(id) {
    alert("Delete clicked")
    const deleted = users.filter((i) => {
      return i.id !== id
    })
    setUsers(deleted)
  }

  // Update:

  function handleUpdate(id, Name, Email, MobileNumber, Age) {
    setPostData(false);
    localStorage.setItem("id", id);
    localStorage.setItem("Name", Name);
    localStorage.setItem("Email", Email);
    localStorage.setItem("MobileNumber", MobileNumber);
    localStorage.setItem("Age", Age);

    //updated state values else same preloaded value for all row data:
    setName(Name);
    setEmail(Email);
    setMobile(MobileNumber);
    setAge(Age);
    handleShow();

  }

  function handleUpdateSubmit(e) {
    e.preventDefault();
    const listItems = users.map((i) => {
      if (i.id === localStorage.getItem("id")) {
        return {
          ...i,
          Name: name,
          Email: email,
          MobileNumber: mobile,
          Age: age,
        };
      } else {
        return i;
      }
    });
    setUsers(listItems);

    setName("");
    setEmail("");
    setMobile("");
    setAge("");
    setShow(false)
    setPostData(true);

  }



  return (
    <div>
      <Home users={users} show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} handleDelete={handleDelete} handleUpdate={handleUpdate} />
      {
        postData ?
          <Create show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} handleSubmit={handleSubmit} name={name} setName={setName} email={email} setEmail={setEmail} mobile={mobile} setMobile={setMobile} age={age} setAge={setAge} />
          :
          <Update show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} handleUpdateSubmit={handleUpdateSubmit} name={name} setName={setName} email={email} setEmail={setEmail} mobile={mobile} setMobile={setMobile} age={age} setAge={setAge} />
      }
    </div>
  );
}

export default App;
