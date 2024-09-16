const Login = ({setIsLogin}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form>
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
          <input
            placeholder="Enter Password"
            className="w-full px-3 py-2 border"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <label className="inline-flex items-center" htmlFor="checkbox">
            <input className="form-checkbox" type="checkbox" name="checkbox" id="checkbox" />
            <span className="ml-2 text-gray-700">Remember Me</span>
          </label>
          <a className="text-red-800" href="#">
            Forgot Password?
          </a>
        </div>
        <div className="mb-4">
          <button type="submit" className="w-full bg-red-600 text-white py-2">
            Login
          </button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700">Don't Have an Account?</span>
        <button onClick={()=>{setIsLogin(false)}} className="text-red-800 ml-1">Sign Up</button>
      </div>
    </div>
  );
};

export default Login;
