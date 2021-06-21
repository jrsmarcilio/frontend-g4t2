import React from "react";

// import { Container } from './styles';

function Clientes() {
  return (
    <div className="col-xl-8 col-lg-7">
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">
            Relação de Clientes
          </h6>
          <div className="dropdown no-arrow">
            <a
              className="dropdown-toggle"
              href="/login"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
            </a>
          </div>
        </div>
        <div className="card-body">
          <div className="chart-area">
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-warning shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                        Atendimentos da Semana
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        18
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-comments fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <canvas id="myAreaChart"></canvas>
        </div>
      </div>
    </div>
  );
}

export default Clientes;
