/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import Logo from '../../../assets/img/logoafya.png';
import { Container } from '../styles';

function FormsLogin() {
  return (
    <Container className="container">
      <div className="container position-relative">
        <div className="row">
          <div className="row header justify-content-md-center">
            <img alt="logo-afya" id="logoafya" src={Logo} />
          </div>

          <div className="row">
            <div className="col-md-6">
              <p className="login">Log In</p>

              <form role="form">
                <div className="form-group">
                  <label htmlFor="InputNome">Nome</label>
                  <input type="name" className="form-control" id="InputName" />
                </div>

                <div className="form-group">
                  <label htmlFor="InputEmail">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="InputEmail"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="InputPassword">Senha</label>
                  <input
                    type="password"
                    className="form-control"
                    id="InputPassword"
                  />
                </div>

                <div className="checkbox centralize col-12">
                  <label>
                    <input type="checkbox" /> Lembrar senha
                  </label>
                  <p className="forgot centralize">Esqueceu a senha?</p>
                </div>

                <button type="submit" className="button">
                  Login
                </button>
                <p className="registro">
                  Não é registrado ainda? Crie uma <strong>conta</strong>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 pink-background">
        <p className="texto">
          Um mundo com melhor <strong>educação, saúde e bem-estar.</strong> Faça
          parte da nossa história. Cadastre-se ou faça o login.
        </p>
      </div>
    </Container>
  );
}

export default FormsLogin;
