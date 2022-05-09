import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import axios from 'axios';
import error from 'axios';
import Console from './Console';
import { nativeTouchData } from 'react-dom/cjs/react-dom-test-utils.development';
import { Spinner } from '../common/components';
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from 'react-promise-tracker';
import { Alert } from 'bootstrap';
import AlertMessage from '../common/components/AlertMessage';


const Gittools = () => {

  const [data, setData] = useState([]);
  const [textConsole, setTextConsole] = useState("un text");
  const [playOnce, setplayOnce] = useState(true);
  const [kubeIpAddress, setKubeIpAddress] = useState();
  const [kubelintURL, setKubelintURL] = useState();
  const [kubelintFolder, setKubelintFolder] = useState();
  const [kubelintUsername, setKubelintUsername] = useState();
  const [kubelintPassword, setKubelintPassword] = useState();
  const [terrascanURL, setTerrascanURL] = useState();
  const [terrascanFolder, setTerrascanFolder] = useState();
  const [terrascanUsername, setTerrascanUsername] = useState();
  const [terrascanPassword, setTerrascanPassword] = useState();
  const [gitleaksURL, setGitleaksURL] = useState();
  const [gitleaksFolder, setGitleaksFolder] = useState();
  const [gitleaksUsername, setGitleaksUsername] = useState();
  const [gitleaksPassword, setGitleaksPassword] = useState();
  const [kubeconfig, setKubeConfig] = useState();
  const { promiseInProgress } = usePromiseTracker();
  const [onError, setOnError] = useState(false);

  useEffect(() => {

  }, [data]);

  function kubelint(event, ipAddress) {
    const body = { "url": kubelintURL, "folder": kubelintFolder, "username": kubelintUsername, "password": kubelintPassword };
    setOnError(null);
    trackPromise(
      axios
        .post(
          process.env.REACT_APP_ACCESS_URL+"/cisel-nightwatch-git/kubelint", body
        )
        .then((res) => {
          setData(res.data);
          console.log(data);
        })
        .catch(err => {
          if (err.response) {
            // client received an error response (5xx, 4xx)
            setOnError(err.message);
          } else if (err.request) {
            // client never received a response, or request never left
            setOnError(err.message);
          } else {
            setOnError(err.message);
          }
        }));
    event.preventDefault();
  }
  function terrascan(event, ipAddress) {
    const body = { "url": terrascanURL, "folder": terrascanFolder , "username": terrascanUsername, "password": terrascanPassword};
    setOnError(null);
    trackPromise(
      axios
        .post(
          process.env.REACT_APP_ACCESS_URL+"/cisel-nightwatch-git/terrascan", body
        )
        .then((res) => {
          setData(res.data);
          console.log(data);
        })
        .catch(err => {
          if (err.response) {
            // client received an error response (5xx, 4xx)
            setOnError(err.message);
          } else if (err.request) {
            // client never received a response, or request never left
            setOnError(err.message);
          } else {
            setOnError(err.message);
          }
        }));
    event.preventDefault();
  }
  function gitleaks(event, ipAddress) {
    const body = { "url": gitleaksURL, "folder": gitleaksFolder, "username": gitleaksUsername, "password": gitleaksPassword };
    setOnError(null);
    trackPromise(
      axios
        .post(
          process.env.REACT_APP_ACCESS_URL+"/cisel-nightwatch-git/gitleaks", body
        )
        .then((res) => {
          setData(res.data);
          console.log(data);
        })
        .catch(err => {
          if (err.response) {
            // client received an error response (5xx, 4xx)
            setOnError(err.message);
          } else if (err.request) {
            // client never received a response, or request never left
            setOnError(err.message);
          } else {
            setOnError(err.message);
          }
        }));
    event.preventDefault();
  }


  return (
    <div className="Gittools">

      <Navigation />
      <br />

      <Container>
        <Row>
          <Col xs={6}>
            <Card className="bg-dark text-white">
              <Card.Header>Check your vulnerabilities regarding GIT</Card.Header>
              <Card.Body>
                <Card.Title>Gittools </Card.Title>
                <Card.Text>
                  Using some opensource tools to scan git related resources...
                </Card.Text>
                <Form onSubmit={(e) => kubelint(e, kubeIpAddress)}>
                  <Form.Group className="mb-3" controlId="kubelintId">
                    <Form.Label>kubelint</Form.Label>
                    <Row><Col><Form.Control required type="text" placeholder="Enter a Git repository URL : https://github.com/kubernetes/examples.git" value={kubelintURL} onInput={e => setKubelintURL(e.target.value)} /></Col></Row>
                    <Row><Col><Form.Control required type="text" placeholder="Enter the path of the folder to scan : examples/guestbook/" value={kubelintFolder} onInput={e => setKubelintFolder(e.target.value)} /></Col></Row>
                    <Row>
                      <Col><Form.Control type="text" placeholder="Git username" value={kubelintUsername} onInput={e => setKubelintUsername(e.target.value)} /></Col>
                      <Col><Form.Control type="password" placeholder="Git password" value={kubelintPassword} onInput={e => setKubelintPassword(e.target.value)} /><br /></Col>
                    </Row>
                    <Button type="submit" value="submit">
                      Go!
                    </Button>
                  </Form.Group>
                </Form>
                <Form onSubmit={(e) => terrascan(e, kubeIpAddress)}>
                  <Form.Group className="mb-3" controlId="terrascanId">
                    <Form.Label>terrascan</Form.Label>
                    <Row><Col><Form.Control required type="text" placeholder="Enter a Git repository URL : https://github.com/kubernetes/examples.git" value={terrascanURL} onInput={e => setTerrascanURL(e.target.value)} /></Col></Row>
                    <Row><Col><Form.Control required type="text" placeholder="Enter the path of the folder to scan : examples/guestbook/" value={terrascanFolder} onInput={e => setTerrascanFolder(e.target.value)} /></Col></Row>
                    <Row>
                      <Col><Form.Control type="text" placeholder="Git username" value={terrascanUsername} onInput={e => setTerrascanUsername(e.target.value)} /></Col>
                      <Col><Form.Control type="password" placeholder="Git password" value={terrascanPassword} onInput={e => setTerrascanPassword(e.target.value)} /><br /></Col>
                    </Row>
                    <Button type="submit" value="submit">
                      Go!
                    </Button>
                  </Form.Group>
                </Form>
                <Form onSubmit={(e) => gitleaks(e, kubeIpAddress)}>
                  <Form.Group className="mb-3" controlId="gitleaksId">
                    <Form.Label>gitleaks</Form.Label>
                    <Row><Col><Form.Control required type="text" placeholder="Enter a Git repository URL : https://github.com/kubernetes/examples.git" value={gitleaksURL} onInput={e => setGitleaksURL(e.target.value)} /></Col></Row>
                    <Row><Col><Form.Control required type="text" placeholder="Enter the path of the folder to scan : examples/guestbook/" value={gitleaksFolder} onInput={e => setGitleaksFolder(e.target.value)} /></Col></Row>
                    <Row>
                      <Col><Form.Control type="text" placeholder="Git username" value={gitleaksUsername} onInput={e => setGitleaksUsername(e.target.value)} /></Col>
                      <Col><Form.Control type="password" placeholder="Git password" value={gitleaksPassword} onInput={e => setGitleaksPassword(e.target.value)} /><br /></Col>
                    </Row>
                    <Button type="submit" value="submit">
                      Go!
                    </Button>
                  </Form.Group>
                </Form>

              </Card.Body>
            </Card>

          </Col>
          <Col xs={6}>
            {onError ? <AlertMessage message={onError} /> : null}
            <Console asd={JSON.stringify(data, null, 2)} />
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default Gittools;