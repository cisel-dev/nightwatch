# NightWatch
<a href="https://www.cisel.ch/"><img width="500" src="https://www.cisel.ch/wp-content/uploads/2021/07/7.png" title="CISEL" alt="CISEL"></a>


This is the official repository of the Nighwatch Project.

NightWatch gathers different opensource tools around the security of native cloud ecosystems.
It will help you to easily identify security issues in 
- Kubernetes Cluster and deployment
- Container images
- Codes and repositories 


---
### Disclaimer
Do not publish this application on the internet. It does not follow good security practices. It is dedicated to an internal use.

---
### Requirements
- Docker : https://docs.docker.com/get-docker/

---
### Local Installation guide
```
cd $HOME && git clone https://github.com/cisel-dev/nightwatch.git && cd nightwatch/
export URL=http://localhost:5000
docker-compose up
```
### Access the application
- Access the UI : http://localhost:3000/
- Access the API : http://localhost:5000/

---
### Kubernetes Installation guide (WORK IN PROGRESS)
If you prefer to run the application on a Kubernetes cluster
- Requirement : Kubernetes cluster & Ingress controller (or loadbalancer like metallb)
- Find the sample of deployment in this repo (sample-deployment/deployment.yaml)
- Create a entry in your DNS, edit the ingress rule and the REACT_APP_ACCESS_URL in your sample-deployment/deployment.yaml
- kubectl apply -f sample-deployment/deployment.yaml

---
### Build and push the docker image
```
cd $HOME && git clone https://github.com/cisel-dev/nightwatch.git && cd nightwatch/
docker build --rm=true --force-rm=true -t XYZ/nightwatch:X.Y .
docker image push XYZ/nightwatch:X.Y
cd nightwatch-ui/
docker build --rm=true --force-rm=true -t XYZ/nightwatch-ui:X.Y .
docker image push XYZ/nightwatch-ui:X.Y
```

---
### User Guide
Access the web interface on http://localhost:3000/ or on the URL you defined in your deployment.
On all the interface, you can fill the forms and the send button will call the backend rest api.
The right part of the interface will display the return of the backend in JSON.
<img src="https://github.com/cisel-dev/nightwatch/raw/master/sample-deployment/nwui.png" title="CISEL" alt="CISEL">

You can directly access the backend API on http://localhost:5000 or on the URL you defined in your deployment.
<img src="https://github.com/cisel-dev/nightwatch/raw/master/sample-deployment/nwrestapi.png" title="CISEL" alt="CISEL">



#### kubehunt usage
- Enter an IP adress or FQDN of a Kubernetes cluster

#### kubesec usage
- Enter a Git repository URL : https://github.com/kubernetes/examples.git
- Enter a YAML file to analyse in the repository : examples/guestbook/frontend-deployment.yaml
- Git username, Git password

#### kubebench usage
- Enter .kubeconfig file in 64bits format, Exemple :  cat ~/.kube/config | base64 | pbcopy 

#### kubelint usage
- Enter a Git repository URL : https://github.com/kubernetes/examples.git
- Enter the path of the folder to scan : examples/guestbook/
- Git username, Git password

#### terrascan usage
- Enter a Git repository URL : https://github.com/kubernetes/examples.git
- Enter the path of the folder to scan : examples/guestbook/
- Git username, Git password

#### gitleaks usage
- Enter a Git repository URL : https://github.com/kubernetes/examples.git
- Enter the path of the folder to scan : examples/guestbook/
- Git username, Git password

#### trivy usage
- Enter the dockr image name : alpine:latest, or alpine:3.15.2, or cisel/nightwatch:0.1
- Registry username, Registry password


---
### Tools usage examples without of the UI
Below you can find some examples on how to use some of the security tools hosted in NightWatch using the CLI.

Kube-hunter Usage
- docker exec -it nightwatch kube-hunter --remote w.x.y.z  --enable-cve-hunting 
- docker exec -it nightwatch kube-hunter --remote w.x.y.z  --enable-cve-hunting --report json
- docker exec -it nightwatch kube-hunter --cidr w.x.y.z/24 --enable-cve-hunting
- docker exec -it nightwatch kube-hunter --cidr w.x.y.z/24 --enable-cve-hunting --mapping

Kube-bench Usage
- docker cp ./kubeconfig.cfg nightwatch:/home/nightwatch/kubeconfig.cfg && docker exec nightwatch bash -c 'export KUBECONFIG=/home/nightwatch/kubeconfig.cfg; kube-bench;'
- docker cp ./kubeconfig.cfg nightwatch:/home/nightwatch/kubeconfig.cfg && docker exec nightwatch bash -c 'export KUBECONFIG=/home/nightwatch/kubeconfig.cfg; kube-bench --json;'
- docker cp ./kubeconfig.cfg nightwatch:/home/nightwatch/kubeconfig.cfg && docker exec nightwatch bash -c 'export KUBECONFIG=/home/nightwatch/kubeconfig.cfg; kube-bench --junit;'

Kubesec usage
- docker exec nightwatch bash -c 'git clone https://github.com/kubernetes/examples.git; cd examples/guestbook/; find . -type f -name "*.yaml" -exec kubesec scan {} \;'

Kube-linter Usage

- docker exec nightwatch bash -c 'rm -rf examples; git clone https://github.com/kubernetes/examples.git; export PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"; kube-linter lint -v --add-all-built-in examples/guestbook/;'
- docker exec nightwatch bash -c 'rm -rf examples; git clone https://github.com/kubernetes/examples.git; export PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"; kube-linter lint examples/guestbook/;' 
- docker exec nightwatch bash -c 'rm -rf examples; git clone https://github.com/kubernetes/examples.git; export PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"; kube-linter lint --format=json examples/guestbook/;'
- docker exec nightwatch bash -c 'rm -rf examples; git clone https://github.com/kubernetes/examples.git; export PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"; kube-linter lint -v examples/guestbook/;'
- docker exec nightwatch bash -c 'rm -rf examples; git clone https://github.com/helm/examples.git;  export PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"; kube-linter lint  -v --add-all-built-in examples/charts/hello-world/;'

Terrascan usage
- docker exec nightwatch bash -c 'rm -rf examples; git clone https://github.com/kubernetes/examples.git; terrascan init; terrascan scan --iac-dir examples/guestbook/ -i k8s;'
- docker exec nightwatch bash -c 'rm -rf examples; git clone https://github.com/kubernetes/examples.git; terrascan init; terrascan scan --iac-dir examples/guestbook/ --show-passed --output json -i k8s;'
- docker exec nightwatch bash -c 'rm -rf examples; git clone https://github.com/helm/examples.git; terrascan init; terrascan scan --iac-dir examples/charts/hello-world/ -i helm;'
- terrascan scan -t k8s -r git -u https://github.com/kubernetes/examples.git

GitLeaks usage
- docker exec nightwatch bash -c 'rm -rf examples; git clone https://github.com/kubernetes/examples.git; gitleaks detect -v -s /examples/ -c /gitleaks/config/gitleaks.toml;'
- docker exec nightwatch bash -c 'rm -rf gronit; git clone https://github.com/gitleakstest/gronit; gitleaks detect -v -s /gronit/ -c /gitleaks/config/gitleaks.toml;'
- docker exec nightwatch bash -c 'rm -rf gronit; git clone https://github.com/gitleakstest/gronit; gitleaks detect -v -s /gronit/ --report=gitleaks_results.csv -c /gitleaks/config/gitleaks.toml;'
- docker exec nightwatch bash -c 'rm -rf gronit; git clone https://github.com/gitleakstest/gronit; gitleaks detect -v -s /gronit/ --report=gitleaks_results.json -c /gitleaks/config/gitleaks.toml;'

Whispers usage
- docker exec nightwatch bash -c 'curl -L https://raw.githubusercontent.com/Skyscanner/whispers/master/whispers/config.yml -o whispers_config.yml; rm -rf gronit; git clone https://github.com/gitleakstest/gronit; whispers --config whispers_config.yml /gronit/;'
- docker exec nightwatch bash -c 'curl -L https://raw.githubusercontent.com/Skyscanner/whispers/master/whispers/config.yml -o whispers_config.yml; rm -rf gronit; git clone https://github.com/gitleakstest/gronit; whispers --config whispers_config.yml /gronit/ --output secrets.yml;'
- docker exec nightwatch bash -c 'curl -L https://raw.githubusercontent.com/Skyscanner/whispers/master/whispers/config.yml -o whispers_config.yml; rm -rf gronit; git clone https://github.com/gitleakstest/gronit; whispers --config whispers_config.yml /gronit/ --severity CRITICAL;'

Detect-secrets usage
- docker exec nightwatch bash -c 'rm -rf gronit; git clone https://github.com/gitleakstest/gronit; cd gronit; detect-secrets scan --all-files --force-use-all-plugins;'
---


## Support

Reach us at one of the following places!

- Website at <a href="https://www.cisel.ch" target="_blank">`https://www.cisel.ch`</a>
- CISEL DevOps Technbical Website <a href="https://devops.cisel.ch/" target="_blank">`https://devops.cisel.ch`</a>
- LinkedIn at <a href="https://www.linkedin.com/company/cisel-informatique-sa/" target="_blank">`CISEL Informatique SA`</a>

---

## License
- Copyright 2022 © <a href="https://www.cisel.ch" target="_blank">CISEL</a>.

