import React from 'react';
import Logotux from './Logotux';
import Navigation from './Navigation';


const Home = () => {
    return(
        <div className="Home">
            <Navigation />
            <br/>
            
    
<div id="readme" class="Box-body readme blob js-code-block-container p-5 p-xl-6 gist-border-0">
<article class="markdown-body entry-content container-lg" itemprop="text"><h1 dir="auto"><a id="user-content-nightwatch" class="anchor" aria-hidden="true" href="#nightwatch"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>NightWatch</h1>
<p dir="auto"><a href="https://www.cisel.ch/" rel="nofollow"><img width="500" src="https://camo.githubusercontent.com/a4d704807e94420c6179a7f4316b2ebee953b810645e6d5832512323f4295461/68747470733a2f2f7777772e636973656c2e63682f77702d636f6e74656e742f75706c6f6164732f323032312f30372f372e706e67" title="CISEL" alt="CISEL" data-canonical-src="https://www.cisel.ch/wp-content/uploads/2021/07/7.png" style="max-width: 100%;" /></a></p>
<p dir="auto">This is the official repository of the Nighwatch Project.</p>
<hr/>
<h3 dir="auto"><a id="user-content-quick-local-installation-guide" class="anchor" aria-hidden="true" href="#quick-local-installation-guide"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Quick Local Installation guide</h3>
<ul dir="auto">
<li>Requirement : Docker</li>
<li>wget <a href="https://gitlab.cisel4you.ch/devops/nightwatch/-/raw/91db2238e9a08c6c3cd4c4db18b58ca8215488d3/docker-compose.yml" rel="nofollow">https://gitlab.cisel4you.ch/devops/nightwatch/-/raw/91db2238e9a08c6c3cd4c4db18b58ca8215488d3/docker-compose.yml</a></li>
<li>docker-compose up</li>
<li>Access the UI : <a href="http://localhost:3000/" rel="nofollow">http://localhost:3000/</a></li>
<li>Access the API : <a href="http://localhost:5000/" rel="nofollow">http://localhost:5000/</a></li>
</ul>
<hr/>
<h3 dir="auto"><a id="user-content-kubernetes-installation-guide" class="anchor" aria-hidden="true" href="#kubernetes-installation-guide"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Kubernetes Installation guide</h3>
<ul dir="auto">
<li>Requirement : Kubernetes cluster &amp; Ingress controller (or loadbalancer like metallb)</li>
<li>Find the sample of deployment in this repo (sample-deployment/deployment.yaml)</li>
<li>Create a public DNS and edit the ingress rule in your sample-deployment/deployment.yaml</li>
<li>kubectl apply -f sample-deployment/deployment.yaml</li>
</ul>
<hr/>
<h3 dir="auto"><a id="user-content-build-and-push-the-docker-image" class="anchor" aria-hidden="true" href="#build-and-push-the-docker-image"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Build and push the docker image</h3>
<ul dir="auto">
<li>cd $HOME &amp;&amp; git clone <a href="https://gitlab.cisel4you.ch/devops/nightwatch.git" rel="nofollow">https://gitlab.cisel4you.ch/devops/nightwatch.git</a> &amp;&amp; cd nightwatch/</li>
<li>docker build --rm=true --force-rm=true -t cisel/nightwatch:X.Y .</li>
<li>docker image push cisel/nightwatch:X.Y</li>
<li>cd nightwatch-ui/</li>
<li>docker build --rm=true --force-rm=true -t cisel/nightwatch-ui:X.Y .</li>
<li>docker image push cisel/nightwatch-ui:X.Y</li>
</ul>
<hr/>
<h3 dir="auto"><a id="user-content-user-guide" class="anchor" aria-hidden="true" href="#user-guide"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>User Guide</h3>
<p dir="auto">Access the web interface on <a href="http://localhost:3000/" rel="nofollow">http://localhost:3000/</a> or on the URL you defined in your deployment.
On all the interface, you can fill the forms and the send button will call the backend rest api.
The right part of the interface will display the return of the backend in JSON.
<a target="_blank" rel="noopener noreferrer" href="https://github.com/cisel-dev/nightwatch/raw/master/sample-deployment/nwui.png"><img src="https://github.com/cisel-dev/nightwatch/raw/master/sample-deployment/nwui.png" title="CISEL" alt="CISEL" style="max-width: 100%;"/></a></p>
<p dir="auto">You can directly access the backend API on <a href="http://localhost:5000" rel="nofollow">http://localhost:5000</a> or on the URL you defined in your deployment.
<a target="_blank" rel="noopener noreferrer" href="https://github.com/cisel-dev/nightwatch/raw/master/sample-deployment/nwrestapi.png"><img src="https://github.com/cisel-dev/nightwatch/raw/master/sample-deployment/nwrestapi.png" title="CISEL" alt="CISEL" style="max-width: 100%;"/></a></p>
<hr/>
<h3 dir="auto"><a id="user-content-tools-of-the-api" class="anchor" aria-hidden="true" href="#tools-of-the-api"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Tools of the API</h3>
<p dir="auto">Kube-hunter Usage</p>
<ul dir="auto">
<li>docker exec -it nightwatch kube-hunter --remote w.x.y.z  --enable-cve-hunting</li>
<li>docker exec -it nightwatch kube-hunter --remote w.x.y.z  --enable-cve-hunting --report json</li>
<li>docker exec -it nightwatch kube-hunter --cidr w.x.y.z/24 --enable-cve-hunting</li>
<li>docker exec -it nightwatch kube-hunter --cidr w.x.y.z/24 --enable-cve-hunting --mapping</li>
</ul>
<p dir="auto">Kube-bench Usage</p>
<ul dir="auto">
<li>docker cp ./kubeconfig.cfg nightwatch:/home/nightwatch/kubeconfig.cfg &amp;&amp; docker exec nightwatch bash -c 'export KUBECONFIG=/home/nightwatch/kubeconfig.cfg; kube-bench;'</li>
<li>docker cp ./kubeconfig.cfg nightwatch:/home/nightwatch/kubeconfig.cfg &amp;&amp; docker exec nightwatch bash -c 'export KUBECONFIG=/home/nightwatch/kubeconfig.cfg; kube-bench --json;'</li>
<li>docker cp ./kubeconfig.cfg nightwatch:/home/nightwatch/kubeconfig.cfg &amp;&amp; docker exec nightwatch bash -c 'export KUBECONFIG=/home/nightwatch/kubeconfig.cfg; kube-bench --junit;'</li>
</ul>
<p dir="auto">Kubesec usage</p>
<ul dir="auto">
<li>docker exec nightwatch bash -c 'git clone <a href="https://github.com/kubernetes/examples.git">https://github.com/kubernetes/examples.git</a>; cd examples/guestbook/; find . -type f -name "*.yaml" -exec kubesec scan {} ;'</li>
</ul>
<p dir="auto">Kube-linter Usage</p>
<ul dir="auto">
<li>kube-linter checks list</li>
<li>kube-linter checks list --format json</li>
<li>docker exec nightwatch bash -c 'rm -rf examples; git clone <a href="https://github.com/kubernetes/examples.git">https://github.com/kubernetes/examples.git</a>; export PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"; kube-linter lint -v --add-all-built-in examples/guestbook/;'</li>
<li>docker exec nightwatch bash -c 'rm -rf examples; git clone <a href="https://github.com/kubernetes/examples.git">https://github.com/kubernetes/examples.git</a>; export PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"; kube-linter lint examples/guestbook/;'</li>
<li>docker exec nightwatch bash -c 'rm -rf examples; git clone <a href="https://github.com/kubernetes/examples.git">https://github.com/kubernetes/examples.git</a>; export PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"; kube-linter lint --format=json examples/guestbook/;'</li>
<li>docker exec nightwatch bash -c 'rm -rf examples; git clone <a href="https://github.com/kubernetes/examples.git">https://github.com/kubernetes/examples.git</a>; export PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"; kube-linter lint --format=sarif examples/guestbook/;'</li>
<li>docker exec nightwatch bash -c 'rm -rf examples; git clone <a href="https://github.com/kubernetes/examples.git">https://github.com/kubernetes/examples.git</a>; export PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"; kube-linter lint -v examples/guestbook/;'</li>
<li>docker exec nightwatch bash -c 'rm -rf examples; git clone <a href="https://github.com/helm/examples.git">https://github.com/helm/examples.git</a>;  export PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"; kube-linter lint  -v --add-all-built-in examples/charts/hello-world/;'</li>
</ul>
<p dir="auto">Terrascan usage</p>
<ul dir="auto">
<li>docker exec nightwatch bash -c 'rm -rf examples; git clone <a href="https://github.com/kubernetes/examples.git">https://github.com/kubernetes/examples.git</a>; terrascan init; terrascan scan --iac-dir examples/guestbook/ -i k8s;'</li>
<li>docker exec nightwatch bash -c 'rm -rf examples; git clone <a href="https://github.com/kubernetes/examples.git">https://github.com/kubernetes/examples.git</a>; terrascan init; terrascan scan --iac-dir examples/guestbook/ --show-passed --output json -i k8s;'</li>
<li>docker exec nightwatch bash -c 'rm -rf examples; git clone <a href="https://github.com/helm/examples.git">https://github.com/helm/examples.git</a>; terrascan init; terrascan scan --iac-dir examples/charts/hello-world/ -i helm;'</li>
<li>docker exec nightwatch bash -c 'rm -rf examples; git clone <a href="https://github.com/helm/examples.git">https://github.com/helm/examples.git</a>; terrascan init; terrascan scan --iac-dir examples/charts/hello-world/ --show-passed -i helm;'</li>
<li>terrascan scan -t k8s -r git -u <a href="https://github.com/kubernetes/examples.git">https://github.com/kubernetes/examples.git</a></li>
</ul>
<p dir="auto">GitLeaks usage</p>
<ul dir="auto">
<li>docker exec nightwatch bash -c 'rm -rf examples; git clone <a href="https://github.com/kubernetes/examples.git">https://github.com/kubernetes/examples.git</a>; gitleaks detect -v -s /examples/ -c /gitleaks/config/gitleaks.toml;'</li>
<li>docker exec nightwatch bash -c 'rm -rf gronit; git clone <a href="https://github.com/gitleakstest/gronit">https://github.com/gitleakstest/gronit</a>; gitleaks detect -v -s /gronit/ -c /gitleaks/config/gitleaks.toml;'</li>
<li>docker exec nightwatch bash -c 'rm -rf gronit; git clone <a href="https://github.com/gitleakstest/gronit">https://github.com/gitleakstest/gronit</a>; gitleaks detect -v -s /gronit/ --report=gitleaks_results.csv -c /gitleaks/config/gitleaks.toml;'</li>
<li>docker exec nightwatch bash -c 'rm -rf gronit; git clone <a href="https://github.com/gitleakstest/gronit">https://github.com/gitleakstest/gronit</a>; gitleaks detect -v -s /gronit/ --report=gitleaks_results.json -c /gitleaks/config/gitleaks.toml;'</li>
</ul>
<p dir="auto">Whispers usage</p>
<ul dir="auto">
<li>docker exec nightwatch bash -c 'curl -L <a href="https://raw.githubusercontent.com/Skyscanner/whispers/master/whispers/config.yml" rel="nofollow">https://raw.githubusercontent.com/Skyscanner/whispers/master/whispers/config.yml</a> -o whispers_config.yml; rm -rf gronit; git clone <a href="https://github.com/gitleakstest/gronit">https://github.com/gitleakstest/gronit</a>; whispers --config whispers_config.yml /gronit/;'</li>
<li>docker exec nightwatch bash -c 'curl -L <a href="https://raw.githubusercontent.com/Skyscanner/whispers/master/whispers/config.yml" rel="nofollow">https://raw.githubusercontent.com/Skyscanner/whispers/master/whispers/config.yml</a> -o whispers_config.yml; rm -rf gronit; git clone <a href="https://github.com/gitleakstest/gronit">https://github.com/gitleakstest/gronit</a>; whispers --config whispers_config.yml /gronit/ --output secrets.yml;'</li>
<li>docker exec nightwatch bash -c 'curl -L <a href="https://raw.githubusercontent.com/Skyscanner/whispers/master/whispers/config.yml" rel="nofollow">https://raw.githubusercontent.com/Skyscanner/whispers/master/whispers/config.yml</a> -o whispers_config.yml; rm -rf gronit; git clone <a href="https://github.com/gitleakstest/gronit">https://github.com/gitleakstest/gronit</a>; whispers --config whispers_config.yml /gronit/ --severity CRITICAL;'</li>
</ul>
<p dir="auto">Detect-secrets usage</p>
<ul dir="auto">
<li>docker exec nightwatch bash -c 'rm -rf gronit; git clone <a href="https://github.com/gitleakstest/gronit">https://github.com/gitleakstest/gronit</a>; cd gronit; detect-secrets scan --all-files --force-use-all-plugins;'</li>
</ul>
<p dir="auto">Tools for Kubernetes</p>
<ul dir="auto">
<li>Kube-bench : <a href="https://github.com/aquasecurity/kube-bench">https://github.com/aquasecurity/kube-bench</a></li>
<li>Kube-hunter : <a href="https://github.com/aquasecurity/kube-hunter">https://github.com/aquasecurity/kube-hunter</a></li>
</ul>
<p dir="auto">Tools for Code Best practice Yaml/Repo/Helm</p>
<ul dir="auto">
<li>Kubesec : <a href="https://kubesec.io/" rel="nofollow">https://kubesec.io/</a></li>
<li>KubeLinter : <a href="https://github.com/stackrox/kube-linter">https://github.com/stackrox/kube-linter</a></li>
<li>Terrascan : <a href="https://github.com/accurics/terrascan">https://github.com/accurics/terrascan</a></li>
</ul>
<p dir="auto">Tools for Secret discovers</p>
<ul dir="auto">
<li>Gitleaks : <a href="https://github.com/zricethezav/gitleaks">https://github.com/zricethezav/gitleaks</a></li>
<li>detect-secrets : <a href="https://github.com/Yelp/detect-secrets">https://github.com/Yelp/detect-secrets</a></li>
</ul>
<hr/>
<h2 dir="auto"><a id="user-content-support" class="anchor" aria-hidden="true" href="#support"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Support</h2>
<p dir="auto">Reach us at one of the following places!</p>
<ul dir="auto">
<li>Website at <a href="https://www.cisel.ch" rel="nofollow"><code>https://www.cisel.ch</code></a></li>
<li>CISEL DevOps Technbical Website <a href="https://devops.cisel.ch/" rel="nofollow"><code>https://devops.cisel.ch</code></a></li>
<li>LinkedIn at <a href="https://www.linkedin.com/company/cisel-informatique-sa/" rel="nofollow"><code>CISEL Informatique SA</code></a></li>
</ul>
<hr/>
<h2 dir="auto"><a id="user-content-license" class="anchor" aria-hidden="true" href="#license"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>License</h2>
<ul dir="auto">
<li>Nous avons utilisé les exemples de  <a href="https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46">fvcproductions</a> pour créer ce template.</li>
<li>Copyright 2020 © <a href="https://www.cisel.ch" rel="nofollow">CISEL</a>.</li>
</ul>
</article>
</div>




        </div>
    )
}

export default Home;