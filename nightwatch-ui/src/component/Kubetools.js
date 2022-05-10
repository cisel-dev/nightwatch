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


const Kubetools = () => {

  const [data, setData] = useState([]);
  const [textConsole, setTextConsole] = useState("un text");
  const [playOnce, setplayOnce] = useState(true);
  const [kubeIpAddress, setKubeIpAddress] = useState();
  const [kubesecURL, setKubesecURL] = useState();
  const [kubesecFolder, setKubesecFolder] = useState();
  const [kubesecUsername, setKubesecUsername] = useState();
  const [kubesecPassword, setKubesecPassword] = useState();
  const [kubeconfig, setKubeConfig] = useState();
  const { promiseInProgress } = usePromiseTracker();
  const [onError, setOnError] = useState(false);


  /*useEffect(() => {
      console.log("geuseeffect");
      console.log(playOnce);
      if(playOnce){
      axios
        .get(
          "https://restcountries.com/v3.1/name/suisse"
        )
        .then((res) => {
          setData(res.data);
          //console.log(res);
        });
      }
      console.log(data); 
      setTextConsole("asd");
      setplayOnce(false);
    }, [data]); */
  useEffect(() => {
    /*console.log(textConsole);
    axios
      .get(
        "https://restcountries.com/v3.1/name/"+textConsole 
      )
      .then((res) => {
        setData(res.data);
        //console.log(res);
      });
    */

  }, [data]);


  function kubehunt(event, ipAddress) {
    setOnError(null);
    
    trackPromise(
      axios
        .get(
          process.env.REACT_APP_ACCESS_URL+"/cisel-nightwatch-kub/kubehunt?ipaddress=" + ipAddress
        )
        .then((res) => {
          setData(res.data);
          console.log(data);
        }).catch(err => {
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

  function kubesec(event, ipAddress) {
    const body = { "url": kubesecURL, "file": kubesecFolder, "username": kubesecUsername, "password": kubesecPassword };
    setOnError(null);
    trackPromise(
      axios
        .post(
          process.env.REACT_APP_ACCESS_URL+"/cisel-nightwatch-kub/kubesec", body
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

  function kubebench(event) {
    setOnError(null);
    const body = { "kubeconfig": kubeconfig };
    trackPromise(
      axios
        .post(
          process.env.REACT_APP_ACCESS_URL+"/cisel-nightwatch-kub/kubebench", body
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
    <div className="Kubetools">

      <Navigation />
      <br />

      <Container>
        <Row>
          <Col xs={6}>
            <Card className="bg-dark text-white">
              <Card.Header>Check your vulnerabilities regarding Kubernetes</Card.Header>
              <Card.Body>
                <Card.Title>Kubetools </Card.Title>
                <Card.Text>
                  Using some opensource tools to scan k8s related resources
                </Card.Text>
                <Form onSubmit={(e) => kubehunt(e, kubeIpAddress)}>
                  <Form.Group className="mb-3" controlId="kubhuntId">
                    <Row><Col><Form.Label>kubehunt</Form.Label></Col></Row>
                    <Row><Col><Form.Control required type="text" placeholder="Enter an IP adress or FQDN of a Kubernetes cluster : https://10.10.0.10 or https://cluster.local" value={kubeIpAddress} onInput={e => setKubeIpAddress(e.target.value)} /></Col></Row>
                    <br />
                    <Button type="submit" value="submit">
                      Go!
                    </Button>
                  </Form.Group>
                </Form>
                <Form onSubmit={(e) => kubebench(e)}>
                  <Form.Group className="mb-3" controlId="kubebenchId">
                    <Row><Col><Form.Label>kubebench</Form.Label></Col></Row>
                    <Row><Col><Form.Control required type="text" placeholder="Paste your .kubeconfig file content in base64 format, Exemple :  cat ~/.kube/config | base64 | pbcopy" value={kubeconfig} onInput={e => setKubeConfig(e.target.value)} /></Col></Row>
                    <br />
                    <Button type="submit" value="submit">
                      Go!
                    </Button>
                  </Form.Group>
                </Form>
                <Form onSubmit={(e) => kubesec(e, kubeIpAddress)}>
                  <Form.Group className="mb-3" controlId="kubesecId">
                    <Row><Col><Form.Label>kubesec</Form.Label></Col></Row>
                    <Row><Col><Form.Control required type="text" placeholder="Enter a Git repository URL : https://github.com/kubernetes/examples.git" value={kubesecURL} onInput={e => setKubesecURL(e.target.value)} /></Col></Row>
                    <Row><Col><Form.Control required type="text" placeholder="Enter a YAML file to analyse in the repository : examples/guestbook/frontend-deployment.yaml" value={kubesecFolder} onInput={e => setKubesecFolder(e.target.value)} /></Col></Row>
                    <Row>
                      <Col>
                        <Form.Control type="text" placeholder="Git username if needed" value={kubesecUsername} onInput={e => setKubesecUsername(e.target.value)} />
                      </Col>
                      <Col>
                        <Form.Control type="password" placeholder="Git password if needed" value={kubesecPassword} onInput={e => setKubesecPassword(e.target.value)} /><br />
                      </Col>
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

export default Kubetools;