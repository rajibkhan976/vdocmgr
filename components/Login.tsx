import { db } from "../indexdb/db";
import { useLiveQuery } from "dexie-react-hooks";
import { User } from "../indexdb/models/UserInterface";
import { useForm } from "react-hook-form";
import useAppStore, { AppStore } from "../store/useAppStore";

const Login = () => {
  const {
    setIsAuthenticated,
    shouldUploadCredential,
    setShouldUploadCredential,
  } = useAppStore((state) => state as AppStore);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const users = useLiveQuery(() => db.users.toArray());

  const onSubmit = async (data: any) => {
    if (
      Array.isArray(users) &&
      users.length > 0 &&
      data.username &&
      data.password &&
      users.some(
        (user: User) =>
          user.username === data.username && user.password === data.password
      )
    ) {
      sessionStorage.setItem("user", data.username);
      setIsAuthenticated(true);
    } else {
      data.username && data.password && setShouldUploadCredential(true);
      if (
        data.username &&
        data.email &&
        data.password &&
        data.credential &&
        data.confirmPassword &&
        data.password === data.confirmPassword
      ) {
        let username = data.username;
        let email = data.email;
        let password = data.password;
        let file = data.credential[0];
        const fileContent = await file.text();
        let credential = fileContent;
        try {
          const id = await db.users.add({
            username,
            email,
            password,
            credential,
          });
          setIsAuthenticated(true);
          console.log(`User ${username} successfully added. Got id ${id}`);
          sessionStorage.setItem("user", username);
          setShouldUploadCredential(false);
        } catch (error) {
          setIsAuthenticated(false);
          console.error(`Failed to add ${data.username}: ${error}`);
        }
      }
    }
  };

  return (
    <div className="row">
      <div className="d-flex flex-column col-11 col-md-4 mx-auto mt-5 p-3">
        <h5 className="mb-4">Create account</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex flex-column mb-3">
            <input
              type="text"
              className="form-control"
              {...register("username", {
                required: true,
                minLength: 8,
                maxLength: 100,
                pattern: /^[\w\W]+$/i,
              })}
              placeholder="Username"
            />
          </div>
          {errors?.username?.type === "required" && (
            <p className="text-danger">User name is required!</p>
          )}
          {errors?.username?.type === "minLength" && (
            <p className="text-danger">
              User name cannot be less than 8 characters!
            </p>
          )}
          {errors?.username?.type === "maxLength" && (
            <p className="text-danger">
              User name cannot exceed 100 characters!
            </p>
          )}
          {errors?.username?.type === "pattern" && (
            <p className="text-danger">Incorrect user name!</p>
          )}
          {shouldUploadCredential && (
            <>
              <div className="d-flex flex-column mb-3">
                <input
                  type="text"
                  className="form-control"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                  placeholder="Email"
                />
              </div>
              {errors?.email?.type === "required" && (
                <p className="text-danger">Email id is required!</p>
              )}
              {errors?.email?.type === "pattern" && (
                <p className="text-danger">Incorrect email id!</p>
              )}
            </>
          )}
          <div className="d-flex flex-column mb-3">
            <input
              type="password"
              className="form-control"
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 16,
                pattern: /^[\w\W]+$/i,
              })}
              placeholder="Password"
            />
          </div>
          {errors?.password?.type === "required" && (
            <p className="text-danger">Password is required!</p>
          )}
          {errors?.password?.type === "minLength" && (
            <p className="text-danger">
              Password cannot be less than 8 characters!
            </p>
          )}
          {errors?.password?.type === "maxLength" && (
            <p className="text-danger">Password cannot exceed 16 characters!</p>
          )}
          {errors?.password?.type === "pattern" && (
            <p className="text-danger">Incorrect password</p>
          )}
          {shouldUploadCredential && (
            <>
              <div className="d-flex flex-column mb-3">
                <input
                  type="password"
                  className="form-control"
                  {...register("confirmPassword", {
                    required: true,
                    minLength: 8,
                    maxLength: 16,
                    pattern: /^[\w\W]+$/i,
                  })}
                  placeholder="Confirm Password"
                />
              </div>
              {errors?.confirmPassword?.type === "required" && (
                <p className="text-danger">
                  Password confirmation is required!
                </p>
              )}
              {errors?.confirmPassword?.type === "minLength" && (
                <p className="text-danger">
                  Password cannot be less than 8 characters!
                </p>
              )}
              {errors?.confirmPassword?.type === "maxLength" && (
                <p className="text-danger">
                  Password cannot exceed 16 characters!
                </p>
              )}
              {errors?.confirmPassword?.type === "pattern" && (
                <p className="text-danger">Incorrect password</p>
              )}
              <div className="mb-3">
                <label htmlFor="credential" className="form-label">
                  Personal OOR vLEI
                </label>
                <input
                  className="form-control"
                  type="file"
                  accept=".json"
                  {...register("credential", { required: true })}
                />
              </div>
              {errors?.credential?.type === "required" && (
                <p className="text-danger">Credential is required!</p>
              )}
            </>
          )}
          <div className="d-block mt-4">
            {shouldUploadCredential ? (
              <p className="d-inline-block">
                <span className="d-inline-block align-middle">
                  Have an account?
                </span>
                <button
                  type="button"
                  className="btn py-0 px-1"
                  onClick={() => setShouldUploadCredential(false)}
                >
                  <a href="#" className="text-dark">
                    Log in
                  </a>
                </button>
              </p>
            ) : (
              <p className="d-inline-block">
                <button
                  type="button"
                  className="btn py-0 px-1"
                  onClick={() => console.log(false)}
                >
                  <a href="#" className="text-dark fw-semibold">
                    Forgot your password?
                  </a>
                </button>
              </p>
            )}
            <input
              type="submit"
              className="btn px-4 float-end"
              value={shouldUploadCredential ? "Create account" : "Log in"}
              style={{ backgroundColor: "#D8D8D8" }}
            />
          </div>
        </form>
        {shouldUploadCredential ? (
          <p className="mt-5 text-center">
            By creating an account you agree to our&nbsp;
            <a href="#" className="text-dark">
              Terms and Conditions
            </a>
          </p>
        ) : (
          <p className="mt-5 text-center">
            <span className="d-inline-block align-middle">
              Don't have an account?&nbsp;
            </span>
            <button
              type="button"
              className="btn py-0 px-1"
              onClick={() => setShouldUploadCredential(true)}
            >
              <a href="#" className="text-dark">
                Create account now
              </a>
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
