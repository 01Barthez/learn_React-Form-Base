// import { useState } from "react"

function App() {
  // const [username, setUsername] = useState('')
  // const [email, setEmail] = useState('')
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target;
    const formData = new FormData(form);
    const username = formData.get("name");
    const email = formData.get("email");
    // console.log(form);
    alert(`Name: ${username}, Email: ${email}`)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="name">Nom</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            // required 
            placeholder="Enter your name"
            // onChange = {(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            // required 
            placeholder="Enter your email"
            // onChange = {(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit">Connecter</button>
      </form>
    </>
  )
}

export default App
