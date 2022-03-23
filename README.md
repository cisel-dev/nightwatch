# NightWatch
<a href="https://www.cisel.ch/"><img width="500" src="https://www.cisel.ch/wp-content/uploads/2021/07/7.png" title="CISEL" alt="CISEL"></a>


This is the official repository of the Nighwatch Project.

---
### Quick Local Installation guide
- Requirement : Docker 
- wget https://gitlab.cisel4you.ch/devops/nightwatch/-/raw/91db2238e9a08c6c3cd4c4db18b58ca8215488d3/docker-compose.yml
- export URL=http://localhost
- docker-compose up
- Access the UI : http://localhost:3000/
- Access the API : http://localhost:5000/


---
### Kubernetes Installation guide
- Requirement : Kubernetes cluster & Ingress controller (or loadbalancer like metallb)
- Find the sample of deployment in this repo (sample-deployment/deployment.yaml)
- Create a public DNS and edit the ingress rule in your sample-deployment/deployment.yaml
- kubectl apply -f sample-deployment/deployment.yaml

---
### Build and push the docker image
- cd $HOME && git clone https://gitlab.cisel4you.ch/devops/nightwatch.git && cd nightwatch/
- docker build --rm=true --force-rm=true -t cisel/nightwatch:X.Y .
- docker image push cisel/nightwatch:X.Y
- cd nightwatch-ui/
- docker build --rm=true --force-rm=true -t cisel/nightwatch-ui:X.Y .
- docker image push cisel/nightwatch-ui:X.Y

---
### User Guide
Access the web interface on http://localhost:3000/ or on the URL you defined in your deployment.
On all the interface, you can fill the forms and the send button will call the backend rest api.
The right part of the interface will display the return of the backend in JSON.
<img src="https://github.com/cisel-dev/nightwatch/raw/master/sample-deployment/nwui.png" title="CISEL" alt="CISEL">

You can directly access the backend API on http://localhost:5000 or on the URL you defined in your deployment.
<img src="https://github.com/cisel-dev/nightwatch/raw/master/sample-deployment/nwrestapi.png" title="CISEL" alt="CISEL">

---
### Tools of the API
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
- kube-linter checks list
- kube-linter checks list --format json
- docker exec nightwatch bash -c 'rm -rf examples; git clone https://github.com/kubernetes/examples.git; export PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"; kube-linter lint -v --add-all-built-in examples/guestbook/;'
- docker exec nightwatch bash -c 'rm -rf examples; git clone https://github.com/kubernetes/examples.git; export PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"; kube-linter lint examples/guestbook/;' 
- docker exec nightwatch bash -c 'rm -rf examples; git clone https://github.com/kubernetes/examples.git; export PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"; kube-linter lint --format=json examples/guestbook/;'
- docker exec nightwatch bash -c 'rm -rf examples; git clone https://github.com/kubernetes/examples.git; export PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"; kube-linter lint --format=sarif examples/guestbook/;'
- docker exec nightwatch bash -c 'rm -rf examples; git clone https://github.com/kubernetes/examples.git; export PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"; kube-linter lint -v examples/guestbook/;'
- docker exec nightwatch bash -c 'rm -rf examples; git clone https://github.com/helm/examples.git;  export PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"; kube-linter lint  -v --add-all-built-in examples/charts/hello-world/;'

Terrascan usage
- docker exec nightwatch bash -c 'rm -rf examples; git clone https://github.com/kubernetes/examples.git; terrascan init; terrascan scan --iac-dir examples/guestbook/ -i k8s;'
- docker exec nightwatch bash -c 'rm -rf examples; git clone https://github.com/kubernetes/examples.git; terrascan init; terrascan scan --iac-dir examples/guestbook/ --show-passed --output json -i k8s;'
- docker exec nightwatch bash -c 'rm -rf examples; git clone https://github.com/helm/examples.git; terrascan init; terrascan scan --iac-dir examples/charts/hello-world/ -i helm;'
- docker exec nightwatch bash -c 'rm -rf examples; git clone https://github.com/helm/examples.git; terrascan init; terrascan scan --iac-dir examples/charts/hello-world/ --show-passed -i helm;'
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

Tools for Kubernetes
- Kube-bench : https://github.com/aquasecurity/kube-bench 
- Kube-hunter : https://github.com/aquasecurity/kube-hunter

Tools for Code Best practice Yaml/Repo/Helm
- Kubesec : https://kubesec.io/
- KubeLinter : https://github.com/stackrox/kube-linter
- Terrascan : https://github.com/accurics/terrascan 

Tools for Secret discovers
- Gitleaks : https://github.com/zricethezav/gitleaks
- detect-secrets : https://github.com/Yelp/detect-secrets
---


## Support

Reach us at one of the following places!

- Website at <a href="https://www.cisel.ch" target="_blank">`https://www.cisel.ch`</a>
- CISEL DevOps Technbical Website <a href="https://devops.cisel.ch/" target="_blank">`https://devops.cisel.ch`</a>
- LinkedIn at <a href="https://www.linkedin.com/company/cisel-informatique-sa/" target="_blank">`CISEL Informatique SA`</a>

---

## License
- Nous avons utilisé les exemples de  <a href="https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46" target="_blank">fvcproductions</a> pour créer ce template.
- Copyright 2020 © <a href="https://www.cisel.ch" target="_blank">CISEL</a>.

