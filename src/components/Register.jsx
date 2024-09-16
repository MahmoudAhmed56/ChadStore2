
const Register = ({setIsLogin}) => {
  return (
    <div>
    <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
    <form>
      <div className="mb-4">
        <label className="block text-gray-700" htmlFor="name">
          Name
        </label>
        <input
          placeholder="Enter Name"
          className="w-full px-3 py-2 border"
          type="text"
          name="name"
          id="name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700" htmlFor="email">
          Email
        </label>
        <input
          placeholder="Enter Email"
          className="w-full px-3 py-2 border"
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700" htmlFor="password">
          Password
        </label>
        <input placeholder="Enter Password" className="w-full px-3 py-2 border" type="password" name="password" id="password" />
      </div>

      <div className="mb-4">
        <button type="submit" className="w-full bg-red-600 text-white py-2">Sign Up</button>
      </div>
    </form>
    <div className="text-center">
      <span className="text-gray-700">Already Have an Account?</span>
      <button onClick={()=>{setIsLogin(true)}} className="text-red-800">Login</button>
    </div>
  </div>
  )
}

export default Register