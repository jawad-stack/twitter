import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FieldError } from "../../assets";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

function Login() {
  const { register, handleSubmit, errors } = useForm();
  useEffect(() => {
    document.title = "Login || Lotus Yodha";
  }, []);
  function onSubmit(data) {}
  return (
    <div className="container-fluid page-height main-login-body p-5">
      <div className="login-body-inner shadow">
        <form onSubmit={handleSubmit(onSubmit)} className="form-aside">
          <div className="row mt-1">
            <div className="col-12">
              <FormGroup>
                <FormLabel>{"Email"}</FormLabel>
                <FormControl
                  style={{
                    borderColor: errors && errors.email ? "#a80000" : "",
                  }}
                  name="email"
                  type="email"
                  ref={register({ required: true })}
                />
              </FormGroup>
              {errors.email && (
                <FieldError message={"This Field is Required"} />
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <FormGroup>
                <FormLabel>{"Password"}</FormLabel>
                <FormControl
                  style={{
                    borderColor: errors && errors.password ? "#a80000" : "",
                  }}
                  name="password"
                  type="password"
                  ref={register({ required: true })}
                />
                {errors.password && (
                  <FieldError message={"This Field Is Required"} />
                )}
              </FormGroup>
            </div>
          </div>
          <div className="row mt-1 justify-center">
            <button type="submit" className="btn-2">
              {"LOG IN"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
