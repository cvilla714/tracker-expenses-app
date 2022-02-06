import React from 'react';
import { Container, Row } from 'react-bootstrap';
import img1 from '../images/main_image.png';
import img2 from '../images/expenses2.png';

const Tracker = () => (
  <main>
    <div className="container py-4">
      <header className="pb-3 mb-4 border-bottom">
        <a
          href="?"
          className="d-flex align-items-center text-dark text-decoration-none"
        >
          <i className="fas fa-home" />
          <title>Bootstrap</title>

          <span className="mx-2 text-success">Tracking Your Expenses</span>
        </a>
      </header>

      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold text-primary">
            Track Your Expenses Easily
          </h1>
          <p className="col-md fs-4 text-warning">
            Don&apos;t have to worry about how much you spend last month on
            groceries, now you can add and track your expenses
          </p>
        </div>
      </div>

      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 text-white bg-dark rounded-3">
            <h2>Add expenses per month and year</h2>
            <Container>
              <Row>
                <img src={img1} alt="Expenses" />
              </Row>
            </Container>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 text-white bg-dark rounded-3">
            <h2>Add new expenses</h2>
            <Container>
              <Row>
                <img src={img2} alt="Expenses" />
              </Row>
            </Container>
          </div>
        </div>
      </div>

      <footer className="pt-3 mt-4 text-muted border-top">
        &copy; Cvilla714 2021
      </footer>
    </div>
  </main>
);

export default Tracker;
