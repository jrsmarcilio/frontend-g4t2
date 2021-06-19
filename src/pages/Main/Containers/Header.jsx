import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import coracao from '../../../assets/img/healthcare.svg';

function Header() {
  return (
    <>
      <header className="masthead">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="mb-5 mb-lg-0 text-center text-lg-start">
                <h1 className="display-1 lh-1 mb-3">
                  A maneira mais fácil de organizar seus atendimentos.
                </h1>
                <p className="lead fw-normal text-muted mb-5">
                  Nosso objetivo é ajudar você a ter a melhor experiência de
                  atendimento possível e, consequentemente, o seu paciente.
                  Conheça nossos serviços e nossa história
                </p>
                <Link to="/cadastro">
                  <button type="submit" className="btn btn-primary ">
                    Cadastre-se
                  </button>
                </Link>
                <Link to="/login">
                  <button
                    style={{ marginLeft: 15 }}
                    type="submit"
                    className="btn btn-primary-login"
                  >
                    Login
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="masthead-device-mockup">
                <img alt="coracao" className="coracao" src={coracao} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <aside className="text-center bg-color">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-xl-8">
              <div className="h2 fs-1 text-white mb-4">
                Apoiamos o médico em seu desenvolvimento pessoal e profissional.
                Somos seu parceiro na jornada da carreira médica.
              </div>
            </div>
          </div>
        </div>
      </aside>

      <section className="cta">
        <div className="cta-content">
          <div className="container px-5">
            <h2 className="text-white display-1 lh-1 mb-4">
              Venha fazer parte da nossa história.
            </h2>
            <a
              className="btn btn-outline-light py-3 px-4 rounded-pill"
              href="!#"
              target="_blank"
            >
              Cadastre-se ou faça o login agora
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(Header);
