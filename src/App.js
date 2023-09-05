import { Switch } from "react-router-dom";
import "./App.css";
import Members from "./component/Members";
import { Route, NavLink, useHistory } from "react-router-dom";
import { useState } from "react";
import Form from "./component/Form";


function App() {
  const membersInitial = [{
    id:1,
    img: "",
    name: "Emre",
    email: "emre@gmailcom",
    rol: "managment",
  }];
  const formDataInitial = {
    name: "",
    email: "",
    rol: "",
  };

  const [formData, setFormData] = useState(formDataInitial);
  const [members, setMembers] = useState(membersInitial);
  const history = useHistory()

  const submitHandler = (e) => {
    e.preventDefault();
    if(formData.id){  
      let updateMember = members.map((member)=>{
        if(member.id ===formData.id){
          return formData;
        }else{
          return member;
        }
      });
      setMembers(updateMember);

    }else{
      const newMember = { ...formData, ["img"]: "img" ,["id"]:members[members.length-1].id+1,};
    setMembers([...members, newMember]);
    }
    
    setFormData(formDataInitial);
    history.push("/")
  };
  const changeHandler = (e) => {
    let { value, name, type, checked } = e.target;
    value = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: value });
  };
const editMember=(member)=>{
  setFormData(member);
  history.push("/signup")
}
  return (
    <div className="App">
      <header>
        <nav>
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/signup" exact>
            new member
          </NavLink>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact>
          <Members members={members} editMember={editMember} />
        </Route>
        <Route path="/signup" exact>
          <Form
            submitHandler={submitHandler}
            changeHandler={changeHandler}
            formData={formData}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
